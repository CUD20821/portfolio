import SubProject from "@/component/Project/SubProject";
import Button from "@/component/Button";
import { dataHome, dataExperience } from "./constants";

export default function Home() {
  return (
    <div>
      <h1>What is Lorem Ipsum?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="content-parent">
        <div className="content-col-1">
          <div className="box">
            <div className="title">
              <h3>Experience</h3>
            </div>
            <div className="sub-items">
              {dataExperience.map((item) => (
                <SubProject
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="content-col-2">
          <div className="box">
            <div className="title">
              <h3>Projects</h3>
            </div>
            <div className="sub-items">
              <div className="sub-project-container">
                {dataHome.map((item) => (
                  <SubProject
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <Button
                text={"See all projects"}
                type={"readmore"}
                url={"/projects"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
