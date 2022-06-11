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
    <div className="mt-10 flex flex-col space-y-4">
      {
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.properties.slug.rich_text[0].text.content}`} passHref>
            <div className="flex flex-col space-y-4 font-sans justify-between border-b-2 border-dotted cursor-pointer py-2">
              <div className="flex justify-between">
                <span className="w-9/12 text-base md:text-xl break-words">{post.properties.name.title[0].text.content}</span>
                <span className="text-base md:text-xl text-gray-600">{post.properties.date.date.start}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-8/12 truncate mt-2 text-gray-500 text-sm font-serif">{post.properties.summary.rich_text[0].text.content}</div>
                <div className="mt-2">
                  <Tag color={post.properties.tags.select.color} content={post.properties.tags.select.name.toLowerCase()} />
                </div>
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
