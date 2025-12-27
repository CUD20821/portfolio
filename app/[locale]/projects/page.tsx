import MainProject from "@/component/Project";
import { dataProjects } from "@/app/constants";
import "./projects.css";
import { getCategoryStats, getTechStackStats } from "@/app/utils/graph";
import { PieChart } from "@/component/Charts";

export default async function Projects() {
  const categoryStats = await getCategoryStats();
  const techStackStats = await getTechStackStats();
  return (
    <div>
      <div className="graphs">
        <PieChart graphTitle="Business Domain" stats={categoryStats} />
        <PieChart graphTitle="Tech Stack" stats={techStackStats} />
      </div>
      <h1>Projects</h1>
      <p className="page_description"></p>
      <div className="projects">
        {dataProjects.map((item) => (
          <MainProject
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
            type={"main"}
          />
        ))}
      </div>
    </div>
  );
}
