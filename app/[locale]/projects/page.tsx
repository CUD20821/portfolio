import { getCategoryStats, getTechStackStats} from "@/app/utils/graph";
import ProjectClient from "./projectClient";
import { getListMarkdownData } from "@/app/utils";

export default async function ProjectPage() {
  const categoryStats = await getCategoryStats();
  const techStackStats = await getTechStackStats();
  const datas = await getListMarkdownData();
  return (
    <ProjectClient
      categoryStats={categoryStats}
      techStackStats={techStackStats}
      datas={datas}
    />
  );
}
