import { Fragment } from "react";
import { renderNotionBlock } from "../../components/NotionBlockRenderer";
import { getBlocks, getDatabase, getPage } from "../../lib/notion";
import probeImageSize from "../../lib/imageing";
import Comments from "../../components/Comments";
import { useEffect } from 'react';
import { REBUILD_TIME } from "../../lib/buildTime";
// import { pages ,blocksWithPic, blocksWithExternalPic } from "../../mock";

const Post = ({ page, blocks }) => {
  useEffect(() => {
    document.title = page.properties.name.title[0].plain_text;
  }, [page.properties.name.title])

  if (!page || !blocks) return <div>ops~</div>
  return (
    <>
      <h1 className="flex justify-center text-3xl font-mono font-bold">{page.properties.name.title[0].plain_text}</h1>
      <span className="flex justify-center text-sm mt-2 text-slate-400 mb-4">{page.properties.date.date.start}</span>
      {blocks.map(block => (
        <Fragment key={block.id}>{renderNotionBlock(block)}</Fragment>
      ))}
      <Comments />
    </>
  );
};

export const getStaticPaths = async () => {
  const db = await getDatabase();
  return {
    paths: db.map(p => ({
      params: { slug: p.properties.slug.rich_text[0].text.content },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const db = await getDatabase(slug);
  const postId = db[0].id;
  const page = await getPage(postId);
  const blocks = await getBlocks(postId);
  const childBlocks = await Promise.all(
    blocks
      .filter((b) => b.has_children)
      .map(async b => {
        return {
          id: b.id,
          children: await getBlocks(b.id),
        }
      })
  );

  const blocksWithChildren = blocks.map((b) => {
    if (b.has_children && !b[b.type].children) {
      b[b.type]['children'] = childBlocks.find(x => x.id === b.id)?.children
    }
    return b;
  })

  await Promise.all(
    blocksWithChildren
      .filter((b) => b.type === 'image')
      .map(async b => {
        const { type } = b;
        const value = b[type];
        const src = value.type === 'external' ? value.external.url : value.file.url;

        const { width, height } = await probeImageSize(src);
        value['dim'] = { width, height };
        b[type] = value;
      })
  )

  // for dev
  // const page = pages[0];
  // const blocksWithChildren = blocksWithPic;

  return {
    props: { page, blocks: blocksWithChildren, revalidate: 10 }
  }
}

export default Post;
