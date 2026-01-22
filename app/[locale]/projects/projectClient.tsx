"use client";

import { useEffect, useMemo, useState } from "react";
import Project from "@/component/Project";
import { PieChart } from "@/component/Charts";
import Image from "next/image";
// import { dataProjects } from "@/app/constants";
import { Stats } from "@/app/utils/graph";
import "./projects.css";
import { useParams } from "next/navigation";

export default function ProjectClient({
  categoryStats,
  techStackStats,
  datas,
}: {
  categoryStats: Stats;
  techStackStats: Stats;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datas: any[];
}) {
  const { locale } = useParams();
  // New
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Khi component mount trên client, đọc sessionStorage và bật mounted
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("selectedCategory");
      if (stored) setSelectedCategory(stored);
    }
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      sessionStorage.setItem("selectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!mounted) return;
    if (selectedCategory) {
      sessionStorage.setItem("selectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory, mounted]);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return datas;
    return datas.filter((i) => {
      return (
        i.category === selectedCategory || i.tech.includes(selectedCategory)
      );
    });
  }, [selectedCategory, datas]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="project-card">
        <div className="card-header">
          {locale === "vi" ? <span>Total</span> : <span>総数</span>}
        </div>
        <div className="project-count">
          {locale === "vi" ? `${datas.length}` : `${datas.length}`}
        </div>
      </div>
      {/* 
      Trung bình nhân sự mỗi dự án(MM)
      Thời gian trung bình của mỗi dự án
       */}
      <div className="w-full">
        <div className="flex gap-3 justify-evenly">
          <PieChart
            graphTitle={locale === "vi" ? "Business Domain" : "ビジネス"}
            stats={categoryStats}
            onSelectCategory={setSelectedCategory}
          />
          <PieChart
            graphTitle={locale === "vi" ? "Tech stack" : "技術"}
            stats={techStackStats}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="filter-wrapper pl-4">
          {/* Giữ wrapper DOM cố định để tránh thay đổi thứ tự node */}
          {mounted && selectedCategory && (
            <div>
              <p>
                {locale === "vi" ? "Filtering by category:" : "カテゴリで絞り込み中:"}
                <strong> {selectedCategory}</strong>
              </p>
              <Image
                src={"/reset.png"}
                alt="reset-btn"
                width={32}
                height={32}
                onClick={() => setSelectedCategory(null)}
                className="reset-btn"
              />
            </div>
          )}
        </div>
      </div>

      <div className="projects">
        {filteredProjects.map((item) => (
          <Project
            key={item.id}
            image={item.image}
            duration={item.duration}
            title={locale === "vi" ? item.titleVI : item.titleJP}
            description={
              locale === "vi" ? item.descriptionVI : item.descriptionJP
            }
            url={item.url}
            type={"main"}
          />
        ))}
      </div>
    </div>
  );
}
