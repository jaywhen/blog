import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_KEY
});

const databaseId = process.env.NOTION_DATABASE_ID;

export const getDatabase = async (slug) => { 
  let dbQuery = {
    database_id: databaseId,
    filter: {
      and: [{
        property: 'published',
        checkbox: { equals: true }
      }]
    },
    sorts: [{ property: 'date', direction: 'descending' }]
  };
  if(slug) {
    dbQuery.filter.and.push({
      property: 'slug',
      rich_text: { equals: slug }
    });
  }

  const response = await notion.databases.query(dbQuery);
  return response.results;
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });
  return response.results;
}