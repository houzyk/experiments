from scrapy import Spider, Request, FormRequest
class MuPostSpider(Spider):
    name = "mupost"

    def start_requests (self):
        url = "https://www.mauritiuspost.mu/products-and-services/post-code-and-zip-code-finder"
        yield Request (url, callback = self.get_localities)

    def get_localities (self, response):
        localities  = response.css("select.login_field option::attr(value)").extract()

        for locality in localities:
            yield FormRequest.from_response(
                response,
                method="POST",
                formdata={ "locality": locality },
                callback=self.get_pc_street_sublocal,
                headers={
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                meta={
                    "locality": locality
                }
            )

    def get_pc_street_sublocal(self, response):
        locations = response.css(".postcode_box1")

        for location in locations:

            # [sublocal, street_name]
            addresses = location.css(".postcode_locality::text").getall()

            sub_locality = addresses[0]
            street_name = addresses[1] if len(addresses) == 2 else ""

            postcode = location.css(".postcode_no::text").get()

            yield {
                "locality": response.meta.get("locality"),
                "sub_locality": sub_locality,
                "street_name": street_name,
                "postcode": postcode
            }
