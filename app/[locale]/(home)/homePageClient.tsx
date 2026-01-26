"use client";

// import SubProject from "@/component/Project/SubProject";
import Project from "@/component/Project";
import Experience from "@/component/Experience";
import { dataSkill, dataContact } from "@/constants";
import { formatExperienceDuration } from "@/app/utils/formatExperienceDuration";
import Skill from "@/component/Skill";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
// import "./home.css";
import Social from "@/component/Social";
import viMessages from "@/messages/vi.json";
import jaMessages from "@/messages/ja.json";
import { useParams } from "next/navigation";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePageClient({ data }: { data: any[] }) {
  const tHomepage = useTranslations("HomePage");
  const startYoe = new Date("2023-10-01");
  const today = new Date();
  // const data = await getListMarkdownData();
  const { locale } = useParams();
  const messages = locale === "vi" ? viMessages : jaMessages;
  const experiences = messages.Experience;

  let yoe = today.getFullYear() - startYoe.getFullYear();
  const monthDiff = today.getMonth() - startYoe.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < startYoe.getDate())
  ) {
    yoe--;
  }

  return (
    <div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[600px_1fr] gap-12 lg:gap-10 items-center">
        <div className="w-full">
          <h2 className="text-[40px] mb-0">{tHomepage("greeting")}</h2>
          <h1 className="text-[60px]">
            {tHomepage("intro1")}{" "}
            <span className="highlight">{tHomepage("name")}</span>
          </h1>
          <div>
            {tHomepage("experience", { yoe })}{" "}
            <span className="highlight">{tHomepage("position")}</span>
            <br />
            <br />
            {tHomepage("intro2")}{" "}
            <span className="highlight">{tHomepage("mainField")}</span>{" "}
            {tHomepage("intro3")}{" "}
            <span className="highlight">{tHomepage("businessDomain")}</span>
          </div>
          <a href={locale === "vi" ? "/resume/resume-vn.pdf" : "/resume/resume-jp.pdf"} target="_blank" rel="noopener noreferrer">
            <div className="resume">
              <span>{locale === "vi" ? "My resume" : "職務経歴書"}</span>
            </div>
          </a>
          <div className="flex gap-6 items-center mt-6">
            {dataContact.map((item) => (
              <Social key={item.id} img={item.img} url={item.url} />
            ))}
          </div>
        </div>
        <div className="flex justify-center relative size-[300px]">
          <Image
            src={"/me.jpeg"}
            alt="me"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-2.5 mt-6">
        <div className="flex flex-col w-full lg:w-[60%] gap-4">
          <div className="flex flex-col border border-main rounded-lg p-6 gap-2.5">
            <div className="font-bold text-main flex justify-center">
              <span className="hover:underline cursor-pointer">{tHomepage("experienceTitle")}</span>
            </div>
            <div className="flex flex-col gap-2">
              {experiences.map((ex) => (
                <Experience
                  key={ex.id}
                  image={ex.image}
                  position={ex.position}
                  company={ex.company}
                  duration={formatExperienceDuration(
                    ex.startDate,
                    ex.endDate,
                    locale,
                  )}
                  place={ex.place}
                  description={ex.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[40%] gap-4">
          <div className="flex flex-col border border-main rounded-lg p-6 gap-2.5">
            <div className="font-bold text-main flex justify-center">
              <span className="hover:underline cursor-pointer">{tHomepage("projectsTitle")}</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                {data.map((item) => (
                  <Project
                    key={item.id}
                    image={item.image}
                    title={locale === "vi" ? item.titleVI : item.titleJP}
                    description={
                      locale === "vi" ? item.descriptionVI : item.descriptionJP
                    }
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <Link href={"/projects"} className="w-full h-10 flex justify-center items-center rounded-lg cursor-pointer font-semibold transition-all ease-300 text-text-heading hover:text-main hover:border hover:border-main hover:bg-transparent bg-(--border-color)">
                {tHomepage("seeAllProjects")}
              </Link>
            </div>
          </div>
          <div className="flex flex-col border border-main rounded-lg p-6 gap-2.5">
            <p className="font-bold text-main flex justify-center">
              <span className="hover:underline cursor-pointer">{tHomepage("skillsTitle")}</span>
            </p>
            <div className="line-clamp-2 w-full">
              {dataSkill.map((item) => (
                <Skill key={item.id} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  