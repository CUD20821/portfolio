/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import "./now.css";
import TimeLine from "@/component/Timeline";
import TimeLineCard from "@/component/TimelineCard";

const MIN_DATE = "2022-12-01";
const MAX_DATE = new Date();
const dataTimeLineCard = [
  {
    title: "title1",
    description: "des1",
    start: "2022-10-01",
    end: "2024-05-01",
    index: 1,
  },
  {
    title: "title2",
    description: "des2",
    start: "2024-05-01",
    end: `${new Date()}`,
    index: 0,
  },
];

const Now: React.FC = () => {
  const [dataTimeLine, setDataTimeLine] = useState<any[]>([]);

  useEffect(() => {
    const generateQuarterlyTimeline = () => {
      const result = [];
      const current = new Date(MAX_DATE);
      const end = new Date(MIN_DATE);


      while (end <= current) {
        const year = current.getFullYear();
        const quarter = Math.floor(current.getMonth() / 3) + 1;

        result.push({ year, quarter });

        current.setMonth(current.getMonth() - 3);
      }
      return result;
    };

    //   while(current <= start) {
    //     const year = start.getFullYear();
    //     const quater = Math.floor(current.getMonth() / 3) + 1; // getMonth() => 0 ~ 11(zero based)

    //     result.push({year, quater})

    //     current.setMonth(current.getMonth() - 3)
    //   }
    // }

    const data = generateQuarterlyTimeline();
    console.log("data ", data);
    setDataTimeLine(data);
  }, []);

  // const generateX = (dateStr: string) => {
  //   const yearOfMIn = new Date(MIN_DATE).getFullYear() + 0;
  //   const subMonth =
  //     (new Date(dateStr).getFullYear() - yearOfMIn) * 12 +
  //     Number(new Date(dateStr).getMonth());
  //   return 120 * subMonth;
  // };

  const generateX1 = (dateStr: string) => {
    const yearOfMIn = new Date(MAX_DATE).getFullYear() + 0;
    const monthOfMax = new Date(MAX_DATE).getMonth() + 0;
    const monthOfCurrent = new Date(dateStr).getMonth() + 0;
    const subMonth =
      // (new Date(dateStr).getFullYear() - yearOfMIn) * 12 +
      // Number(new Date(dateStr).getMonth());
      (yearOfMIn - new Date(dateStr).getFullYear()) * 12 +
      (monthOfMax - monthOfCurrent);
    console.log("subMonth ", subMonth);
    return 120 * subMonth;
  };

  const generateY = (index: number) => {
    return 50 * index + 100;
  };

  return (
    <div>
      <h1 className="timeLineHeader">Time Line</h1>
      <div className="timeLineBody">
        {dataTimeLine.map((item, index) => (
          <TimeLine
            key={index}
            title={`${item.year} - Q${item.quarter}`}
            quater={item.quarter}
          />
        ))}
        {dataTimeLineCard.map((item) => (
          <TimeLineCard
            key={item.index}
            title={item.title}
            description={item.description}
            start={item.start}
            end={item.end}
            // x={generateX(item.start)}
            x={generateX1(item.end)}
            y={generateY(item.index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Now;
