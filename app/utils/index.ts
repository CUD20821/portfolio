// import { getDataContentMD } from "@/app/utils";
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getDataContentMD = async (id: string) => {
  const projectsDir = await path.join(
    process.cwd(),
    "app",
    "contents",
    "projects"
  );

  const fileNames = await fs.readdirSync(projectsDir);

  let data: any[] | any[] = [];

  data = fileNames.map((fileName) => {
    const filePath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      titleVI: data.titleVI,
      descriptionVI: data.descriptionVI,
      titleJP: data.titleJP,
      descriptionJP: data.descriptionJP,
      link: data.link || "", // for project
      tech: data.tech || [], // for project
      date: data.date,
      slug: data.slug,
      image: data.image,
      category: data.category,
      content,
    };
  });

  return data.find((i) => i.id === id) || null;
};

const getListMarkdownData = async () => {
  const filesDir = await path.join(process.cwd(), "app/contents/projects");
  const files = fs.readdirSync(filesDir).filter((file) => file.endsWith(".md"));

  const listFilesWithMetadata = files.map((file) => {
    const filePath = path.join(filesDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      id: data.id,
      titleVI: data.titleVI,
      descriptionVI: data.descriptionVI,
      titleJP: data.titleJP,
      descriptionJP: data.descriptionJP,
      link: data.link || "", // for project
      tech: data.tech || [], // for project
      duration: data.duration,
      slug: data.slug,
      image: data.image,
      category: data.category,
      url: data.url,
    };
  });
  return listFilesWithMetadata;
};

// function splitByLocale(raw: string) {
//   const result: Record<string, string> = {};

//   const regex = /##\s*(vi|ja)\s*\n([\s\S]*?)(?=##\s*(vi|ja)|$)/g;

//   let match;
//   while ((match = regex.exec(raw)) !== null) {
//     const locale = match[1];
//     const body = match[2].trim();
//     result[locale] = body;
//   }

//   return result;
// }

// const getDataContentMD = async (id: string) => {
//   const filePath = path.join(
//     process.cwd(),
//     "app/contents/projects",
//     `${id}.md`
//   );

//   if (!fs.existsSync(filePath)) return null;

//   const file = fs.readFileSync(filePath, "utf-8");

//   const { data, content } = matter(file);

//   const contentByLocale = splitByLocale(content);

//   const i18n = {
//     vi: data.i18n?.vi ?? {
//       title: data.titleVI ?? "",
//       description: data.descriptionVI ?? "",
//     },
//     ja: data.i18n?.ja ?? {
//       title: data.titleJP ?? "",
//       description: data.descriptionJP ?? "",
//     },
//   };

//   return {
//     ...data,
//     i18n,
//     contentByLocale,
//   };
// };

export { getDataContentMD, getListMarkdownData };
