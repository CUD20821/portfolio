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

  data = fileNames.map((fileName, index) => {
    const filePath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      slug: data.slug,
      titleVI: data.titleVI,
      titleEN: data.titleEN,
      descriptionVI: data.descriptionVI,
      descriptionEN: data.descriptionEN,
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

const formatExperienceDuration = (
  startDate: string,
  endDate: string | null
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Format display
  const formatMonthYear = (date: Date) =>
    date.toLocaleDateString("vi-VN", { month: "long", year: "numeric" });

  const startDisplay = formatMonthYear(start);
  const endDisplay = endDate ? formatMonthYear(end) : "Hiện tại";

  /* Calculate yoe(kể cả tháng hiện tại)
  const totalMonth = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  example:
  end = 2025-08
  start = 2022-10
  totalMonth = (2025 - 2022) * 12 + (7 - 9) +1 = 3 * 12 - 2 + 1 = 35
  */

  // Calculate yoe(tính khoảng cách)
  const totalMonth =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonth / 12);
  const months = totalMonth % 12;

  let durationText = "";

  if (years > 0) durationText += `${years} năm`;
  if (months > 0) durationText += ` ${months} tháng`;

  return `${startDisplay} - ${endDisplay} ・ ${durationText.trim()}`;
};

export { getDataContentMD, formatExperienceDuration };
