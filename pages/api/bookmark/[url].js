import { unfurl } from "unfurl.js";
export default async function handler(req, res) {
  let { url } = req.query;
  let og = await unfurl(url);
  let faviconInfo = await fetch(og.favicon);
  let faviconState = await faviconInfo.ok;
  let ogContent = {
    title: og.title,
    description: og.description ? og.description : "",
    favicon: faviconState ? og.favicon : "/no-favicon.png",
    cover: og.open_graph && og.open_graph.images.length > 0 ? og.open_graph.images[0].url : '/no-cover.png',
  }
  res.status(200).json(ogContent);
}