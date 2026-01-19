import Image from "next/image";
import "./project.css";
import { Link } from "@/i18n/routing";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  url: string;
  type?: string;
}

function Project(props: ProjectProps) {
  const { title, image, description, url, type } = props;

  return (
    <>
      {type === "main" ? (
        <Link href={url} className="card">
          <div className="card-header">
            <div className="relative size-12">
              <Image src={image} alt="logo" fill sizes="48px" className="object-cover"/>
            </div>
            <div>
              <span className="project-title">{title}</span>
            </div>
          </div>
          <div className="card-body">
            <div>
              <span className="project-description">{description}</span>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={url} className="card sub">
          <div className="relative size-12">
            <Image src={image} alt="logo" fill sizes="48px" className="object-cover"/>
          </div>
          <div className="content">
            <p className="project-title">{title}</p>
            <p className="sub-project-description">{description}</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default Project;
