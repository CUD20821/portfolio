import Image from "next/image";
import "./project.css";
import { Link } from "@/i18n/routing";

interface ProjectProps {
  title: string;
  image: string;
  start?: string;
  end?: string;
  description: string;
  url: string;
  type?: string;
}

function Project(props: ProjectProps) {
  const { title, image, start, end, description, url, type } = props;

  return (
    <>
      {type === "main" ? (
        <Link
          href={url}
          className="flex flex-col gap-2 bg-bg-base rounded-lg cursor-pointer w-full p-3 justify-start hover:bg-(--bg-hover) transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="relative size-12">
              <Image
                src={image}
                alt="logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-bold flex-1">{title}</span>
            </div>
          </div>
          <div className="text-text-muted">{start} ~ {end}</div>
          <div>{description}</div>
        </Link>
      ) : (
        <Link
          href={url}
          className="flex gap-3 bg-bg-base rounded-lg cursor-pointer w-full p-3 justify-start transition-all duration-300 ease-in-out hover:bg-(--bg-hover)"
        >
          <div className="relative size-12">
            <Image
              src={image}
              alt="logo"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">{title}</p>
            <p className="line-clamp-2">{description}</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default Project;
