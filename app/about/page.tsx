import { dataAbout } from "../constants";
import TimeLine from "@/component/Timeline";
import "@/app/about/about.css";

export default function About() {
  return (
    <div className="timeline">
      <div className="title">
        <h1>History</h1>
      </div>
      <ul className="body">
        {dataAbout.map((item) => (
          <TimeLine 
          key={item.id}
          date={item.date}
          title={item.title}
          description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}
