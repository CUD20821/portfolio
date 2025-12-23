'use client';

import SubProject from "@/component/Project/SubProject";
import Experience from "@/component/Experience";
import Button from "@/component/Button";
import { dataProjects, dataExperience, dataSkill } from "../constants";
import { formatExperienceDuration } from "../utils/formatExperienceDuration";
import Skill from "@/component/Skill";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const startYoe = new Date("2022-10-01");
  const today = new Date();

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
      <h1>{t('greeting')}</h1>
      <div>
        {t('intro')}{" "}
        <span className="highlight">{t('position')}</span>. {t('experience', { yoe })}
        <br />
        <span className="space-between-graph"></span>
        {t('mainField')}{" "}
        <span className="highlight">{t('webDevelopment')}</span> {t('businessDomain')}{" "}
        <span className="highlight">{t('insurance')}</span>
        <br /> 
        {t('brseRole')}
        <span className="space-between-graph"></span>
        {t('background')}
        <span className="space-between-graph"></span>
        {t('purpose')}
        <p className="note">
          {t('note')}
        </p>
      </div>
      <div className="content-parent">
        <div className="content-col-1">
          <div className="box">
            <div className="title">
              <span>{t('experienceTitle')}</span>
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
            <div className="title">
              <span>{t('projectsTitle')}</span>
            </div>
            <div className="sub-items">
              <div className="sub-project-container">
                {dataProjects.map((item) => (
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
                text={t('seeAllProjects')}
                type={"readmore"}
                url={"/projects"}
              />
            </div>
          </div>
          <div className="box">
            <p className="title">{t('skillsTitle')}</p>
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

