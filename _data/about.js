import Fetch from "@11ty/eleventy-fetch";
import { parse, stringify } from 'yaml'

export default async function () {
  const remoteData = await Fetch(`${process.env.DATA_URL}${process.env.COMMIT_HASH || 'main'}/data.yml`, {
    duration: "60s",
    type: "text",
    returnType: "text"
  });

  const { about } = parse(remoteData.replace(/\u00A0/g, ' '));

  return about
}