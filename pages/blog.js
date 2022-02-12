import Link from "next/link";
import { getDatabase } from "../lib/notion";

const Blog = ({ posts }) => {
  return(
      <div className="mt-10">
        {
          posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.properties.slug.rich_text[0].text.content}`} passHref>
              <div className="border-none rounded cursor-pointer -mx-2 mb-2 p-2 hover:bg-slate-50 hover:opacity-80">
                <h2 className="flex space-x-2 text-xl font-semibold mb-2 justify-between">
                  <span>{post.properties.name.title[0].text.content}</span>
                </h2>
                <p className="text-sm primary-text">{post.properties.summary.rich_text[0].text.content}</p>
                <div className="flex flex-wrap font-mono space-x-2 text-sm secondary-text items-center">
                  <span>{post.properties.date.date.start} · </span>
                  <span>{post.properties.tags.select.name.toLowerCase()}</span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
  );
};



export const getStaticProps = async () => {
  const db = await getDatabase();
  return {
    props: {
      posts: db,
    },
    revalidate: 1,
  }
}

export default Blog;
