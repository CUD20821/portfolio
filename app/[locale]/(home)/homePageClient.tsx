"use client";

// import SubProject from "@/component/Project/SubProject";
import Project from "@/component/Project";
import Experience from "@/component/Experience";
import { dataSkill, dataContact } from "@/app/constants";
import { formatExperienceDuration } from "@/app/utils/formatExperienceDuration";
import Skill from "@/component/Skill";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "./home.css";
import Social from "@/component/Social";
import viMessages from "@/messages/vi.json";
import jaMessages from "@/messages/ja.json";
import { useParams } from "next/navigation";
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
        <h2 className="greeting">{tHomepage("greeting")}</h2>
        <h1 className="intro">
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
        <div className="contact-items">
          {dataContact.map((item) => (
            <Social key={item.id} img={item.img} url={item.url} />
          ))}
        </div>
      <div className="content-parent">
        <div className="content-col-1">
          <div className="box">
            <div className="hp-title">
              <span>{tHomepage("experienceTitle")}</span>
            </div>
            <div className="sub-items">
              {experiences.map((ex) => (
                <Experience
                  key={ex.id}
                  image={ex.image}
                  position={ex.position}
                  company={ex.company}
                  duration={formatExperienceDuration(ex.startDate, ex.endDate, locale)}
                  place={ex.place}
                  description={ex.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="content-col-2">
          <div className="box">
            <div className="hp-title">
              <span>{tHomepage("projectsTitle")}</span>
            </div>
            <div className="sub-items">
              <div className="sub-project-container">
                {data.map((item) => (
                  <Project
                    key={item.id}
                    image={item.image}
                    title={locale === "vi" ? item.titleVI : item.titleJP}
                    description={locale === "vi" ? item.descriptionVI : item.descriptionJP}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <Link href={"/projects"} className="seemore">
                {tHomepage("seeAllProjects")}
              </Link>
            </div>
          </div>
          <div className="box">
            <p className="hp-title">
              <span>{tHomepage("skillsTitle")}</span>
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
