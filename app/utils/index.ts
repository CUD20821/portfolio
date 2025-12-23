// import { getDataContentMD } from "@/app/utils";
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// const getDataContentMD = async (id: string) => {
//   const projectsDir = await path.join(
//     process.cwd(),
//     "app",
//     "contents",
//     "projects"
//   );

//   const fileNames = await fs.readdirSync(projectsDir);

//   let data: any[] | any[] = [];

//   data = fileNames.map((fileName) => {
//     const filePath = path.join(projectsDir, fileName);
//     const fileContents = fs.readFileSync(filePath, "utf8");
//     const { data, content } = matter(fileContents);

//     return {
//       id: data.id,
//       slug: data.slug,
//       titleVI: data.titleVI,
//       titleJP: data.titleJP,
//       descriptionVI: data.descriptionVI,
//       descriptionJP: data.descriptionJP,
//       tech: data.tech || [], // for project
//       tag: data.tag || [], // for blog
//       link: data.link || "", // for project
//       date: data.date,
//       image: data.image,
//       content, // for project
//     };
//   });

//   return data.find((i) => i.id === id) || null;
// };

function splitByLocale(raw: string) {
  const result: Record<string, string> = {};

  const regex = /##\s*(vi|ja)\s*\n([\s\S]*?)(?=##\s*(vi|ja)|$)/g;

  let match;
  while ((match = regex.exec(raw)) !== null) {
    const locale = match[1];
    const body = match[2].trim();
    result[locale] = body;
  }

  return result;
}

const getDataContentMD = async (id: string) => {
  const filePath = path.join(
    process.cwd(),
    "app/contents/projects",
    `${id}.md`
  );

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(file);

  const contentByLocale = splitByLocale(content);
  return {
    ...data,
    contentByLocale,
  };
};

export { getDataContentMD };
