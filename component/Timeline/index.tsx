import "./timeline.css";

interface TimeLineProps {
  title: string;
  quater: 1 | 2 | 3 | 4;
}

const dataQuarter = {
  1: ["January", "February", "March"],
  2: ["April", "May", "June"],
  3: ["July", "August", "September"],
  4: ["October", "November", "December"],
};

const TimeLine: React.FC<TimeLineProps> = ({ title, quater }) => {
  console.log(dataQuarter[quater]);

  return (
    <div className="timeLineFrame">
      <h3 className="timeLineTitle">{title}</h3>
      <div className="timeLineItems">
        <div className="timeLineCol">
          <span>{dataQuarter[quater][2]}</span>
        </div>
        <div className="timeLineCol">
          <span>{dataQuarter[quater][1]}</span>
        </div>
        <div className="timeLineCol">
          <span>{dataQuarter[quater][0]}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
