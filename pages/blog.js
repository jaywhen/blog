import Link from "next/link";
import Tag from "../components/Tag";
import { REBUILD_TIME } from "../lib/buildTime";
import { getDatabase } from "../lib/notion";
import { useEffect } from 'react';
// import { pages } from "../mock";

const Blog = ({ posts }) => {
  useEffect(() => {
    document.title = "Blog";
  }, [])
  return (
    <div className="mt-10">
      {
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.properties.slug.rich_text[0].text.content}`} passHref>
            <div className="flex flex-col font-mono justify-between border-none rounded cursor-pointer -mx-2 mb-2 p-2">
              <div className="flex justify-between font-bold">
                <span className="w-9/12 text-base md:text-xl break-words">{post.properties.name.title[0].text.content}</span>
                <span className="text-sm md:text-xl text-gray-600">{post.properties.date.date.start}</span>
              </div>
              <div className="w-8/12 truncate mt-2 text-gray-500 text-sm font-semibold">{post.properties.summary.rich_text[0].text.content}</div>
              <div className="mt-2">
                <Tag color={post.properties.tags.select.color} content={post.properties.tags.select.name.toLowerCase()} />
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
  // for dev
  // const db = pages;
  return {
    props: {
      posts: db,
    },
    revalidate: REBUILD_TIME,
  }
}

export default Blog;
