import { promises as fs } from 'fs';
import path from 'path';

export default function Index({ data }) {
  return (
    <>
      <h1>{data.hmm}</h1>
    </>
  );
}

export async function getStaticProps() {

  // Faking an API call for data
  const filePath = path.join(process.cwd(), 'data.json');
  const data = await fs.readFile(filePath, "utf8");

  return {
    props: {
      data: JSON.parse(data)
    }
  }
}
