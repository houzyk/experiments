import re
from scrapy import Spider, Request

class WikiRandomRSpider(Spider):
    name = "wiki_random_r"

    def start_requests (self):
        url = "https://en.wikipedia.org/wiki/Special:Random"
        yield Request (
                url,
                callback = self.srape_r,
                meta = {
                    "parent_page_url": ""
                },
                cb_kwargs = {
                    "n": 5
                }
            )

    def srape_r (self, response, n = 0):
        if n == 0: return

        links  = response.css("#bodyContent a::attr(href)").extract()
        links_to_follow = []

        for link in links:
            if re.search("/wiki/[^File]", link) and len(links_to_follow) < n:
                links_to_follow.append(link)


        yield {
            "parent_page_url": response.meta.get('parent_page_url'),
            "page_url": response.request.url,
            "links": links_to_follow
        }

        num_of_links_to_follow = len(links_to_follow)

        for link_to_follow in links_to_follow:
            yield Request (
                url = (f"https://en.wikipedia.org{link_to_follow}"),
                callback = self.srape_r,
                meta = {
                    "parent_page_url": response.request.url
                },
                cb_kwargs = {
                    "n": num_of_links_to_follow - 1 if num_of_links_to_follow < n else n - 1
                }
            )
