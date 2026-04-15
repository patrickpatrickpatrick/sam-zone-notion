import Fetch from "@11ty/eleventy-fetch";
import { parse } from 'yaml'

export default async function () {
  const remoteData = await Fetch(`${process.env.DATA_URL}${process.env.COMMIT_HASH || 'main'}/data.yml`, {
    duration: "60s",
    type: "text",
    returnType: "text"
  });

  const data = parse(remoteData);

  const albums = await Promise.all(data.albums.map(async (albumName) => {
    const albumData = await Fetch(`${process.env.DATA_URL}${process.env.COMMIT_HASH || 'main'}/albums/${albumName}.yml`, {
      duration: "60s",
      type: "text",
      returnType: "text"
    });
    return parse(albumData);
  })).then((values) => values)

  return albums
}