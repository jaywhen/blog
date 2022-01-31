import { Fragment, useEffect } from "react";
import { renderNotionBlock } from "../../components/NotionBlockRenderer";
import { getBlocks, getDatabase, getPage } from "../../lib/notion";
import probeImageSize from "../../lib/imageing";

const Post = ({ page, blocks }) => {
    useEffect(() => {
        // console.log(page);
        console.log(blocks);
    })
    if(!page || !blocks) return <div>ops~</div>

    return (
        <>
            <h1 className="flex justify-center text-2xl font-bold">{page.properties.name.title[0].plain_text}</h1>
            <span className="flex justify-center text-sm text-slate-400">{page.properties.date.date.start}</span>
            {blocks.map(block => (
                <Fragment key={block.id}>{renderNotionBlock(block)}</Fragment>
            ))}
        </>
    );
};

export const getServerSideProps = async ({params}) => {
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
        if(b.has_children && !b[b.type].children) {
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

    return { 
        props: { page, blocks: blocksWithChildren } 
    }
}

export default Post;
