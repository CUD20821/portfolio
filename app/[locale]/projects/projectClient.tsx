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
  // Old
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(
  //   () => {
  //     // window là biến khi js chạy ở client, nên cần check để không crash app
  //     if (typeof window === "undefined") return null;
  //     return sessionStorage.getItem("selectedCategory");
  //   }
  // );

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

  // // eslint-disable-next-line react-hooks/preserve-manual-memoization
  // const filteredProjects = useMemo(() => {
  //   // if (!selectedCategory) return dataProjects;
  //   if (!selectedCategory) return datas;

  //   // return dataProjects.filter(
  //   //   (p) =>
  //   //     p.category === selectedCategory || p.tech.includes(selectedCategory)
  //   // );
  //   return datas.filter((p) => {
  //     return (
  //       p.category === selectedCategory || p.tech.includes(selectedCategory)
  //     );
  //   });
  //   // return datas.filter(
  //   //   p.category === selectedCategory || p.tech.includes(selectedCategory)
  //   // );
  // }, [selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return datas;
    return datas.filter((i) => {
      return (
        i.category === selectedCategory || i.tech.includes(selectedCategory)
      );
    });
  }, [selectedCategory, datas]);

  return (
    <div>
      <div className="graphs">
        <PieChart
          graphTitle={locale === "vi" ? "Business Domain" : "ビジネス割合"}
          stats={categoryStats}
          onSelectCategory={setSelectedCategory}
        />
        <PieChart
          graphTitle={locale === "vi" ? "Tech stack" : "技術割合"}
          stats={techStackStats}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <div className="filter-wrapper">
        {/* Giữ wrapper DOM cố định để tránh thay đổi thứ tự node */}
        {mounted && selectedCategory && (
          <div>
            <p>
              Filtering by category:
              <strong> {selectedCategory}</strong>
            </p>
            <Image
              src={"/reset.png"}
              alt="reset-btn"
              width={32}
              height={32}
              onClick={() => setSelectedCategory(null)}
            />
          </div>
        )}
      </div>

      <div className="projects">
        {filteredProjects.map((item) => (
          <Project
            key={item.id}
            image={item.image}
            title={locale === "vi" ? item.titleVI : item.titleJP}
            description={locale === "vi" ? item.descriptionVI : item.descriptionJP}
            url={item.url}
            type={"main"}
          />
        ))}
      </div>
    </div>
  );
}
