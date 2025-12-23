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
      slug: data.slug,
      titleVI: data.titleVI,
      titleJP: data.titleJP,
      descriptionVI: data.descriptionVI,
      descriptionJP: data.descriptionJP,
      tech: data.tech || [], // for project
      tag: data.tag || [], // for blog
      link: data.link || "", // for project
      date: data.date,
      image: data.image,
      content, // for project
    };
  });

  return data.find((i) => i.id === id) || null;
};

export { getDataContentMD };
