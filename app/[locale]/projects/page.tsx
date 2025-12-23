
import MainProject from "@/component/Project/MainProject";
import { dataMainProject } from "../../constants";
import "./projects.css"

export default function Projects(){
  return(
    <div>
      <h1 className="page_title">Projects</h1>
      <p className="page_description"></p>
      <div className="projects">
      {dataMainProject.map((item) => (
        <MainProject
        key={item.id} 
        image={item.image}
        title={item.title}
        description={item.description}
        />
      ))}
      </div>
    </div>
  )
}

