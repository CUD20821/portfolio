import { Link } from "@/i18n/routing";
import React from "react";
import "./subproject.css";
import Image from "next/image";

interface SubProjectProps {
  title: string;
  image: string;
  description: string;
  url: string;
}
function SubProject(props: SubProjectProps) {
  const { image, title, description, url } = props;

  return (
    <Link href={url} className="card-sub-project">
      <Image src={image} alt="logo" width={42} height={42} />
      <div className="content">
        <p className="title">{title}</p>
        <p className="sub-project-description">{description}</p>
      </div>
    </Link>
  );
}

export default SubProject;
