"use client";

// import SubProject from "@/component/Project/SubProject";
import Project from "@/component/Project";
import Experience from "@/component/Experience";
import { dataExperience, dataSkill, dataContact } from "@/app/constants";
import { formatExperienceDuration } from "@/app/utils/formatExperienceDuration";
import Skill from "@/component/Skill";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "./home.css";
import Social from "@/component/Social";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePageClient({ data }: { data: any[] }) {
  const t = useTranslations("HomePage");
  const startYoe = new Date("2022-10-01");
  const today = new Date();
  // const data = await getListMarkdownData();

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
      <div className="test">
        <h2 className="greeting">{t("greeting")}</h2>
        <h1 className="intro">
          {t("intro1")} <span className="highlight">{t("name")}</span>
        </h1>
        <div>
          {t("experience", { yoe })}{" "}
          <span className="highlight">{t("position")}</span>
          <br />
          <br />
          {t("intro2")} <span className="highlight">{t("mainField")}</span>{" "}
          {t("intro3")} <span className="highlight">{t("businessDomain")}</span>
        </div>
        <div className="contact-items">
          {dataContact.map((item) => (
            <Social key={item.id} img={item.img} url={item.url} />
          ))}
        </div>
      </div>
      <div className="content-parent">
        <div className="content-col-1">
          <div className="box">
            <div className="hp-title">
              <span>{t("experienceTitle")}</span>
            </div>
            <div className="sub-items">
              {dataExperience.map((item) => (
                <Experience
                  key={item.id}
                  image={item.image}
                  position={item.position}
                  company={item.company}
                  duration={formatExperienceDuration(
                    item.startDate,
                    item.endDate
                  )}
                  place={item.place}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="content-col-2">
          <div className="box">
            <div className="hp-title">
              <span>{t("projectsTitle")}</span>
            </div>
            <div className="sub-items">
              <div className="sub-project-container">
                {data.map((item) => (
                  <Project
                    key={item.id}
                    image={item.image}
                    title={item.titleVI}
                    description={item.descriptionVI}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <Link href={"/projects"} className="seemore">
                See All Projects
              </Link>
            </div>
          </div>
          <div className="box">
            <p className="hp-title">
              <span>{t("skillsTitle")}</span>
            </p>
            <div className="skill-items">
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
