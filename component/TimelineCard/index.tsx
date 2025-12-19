import "./timeLineCard.css";

interface TimeLineCardProps {
  title: string;
  description: string;
  start: string;
  end: string;
  x: number;
  y: number;
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({
  title,
  description,
  start,
  end,
  x,
  y,
}) => {
  const width = () => {
    const yearOfMIn = new Date(start).getFullYear() + 0;
    // const subMonth =
    //   (new Date(end).getFullYear() - yearOfMIn) * 12 +
    //   Number(new Date(end).getMonth());
    // const yearOfMin = new Date(end).getFullYear() + 0;
    const subMonth = (yearOfMIn - new Date(start).getFullYear()) * 12 + Number(new Date(end).getMonth());

    return 120 * subMonth;
  };

  return (
    <div
      className="timelineCard"
      style={{ top: y, left: x, width: width() }}
    >
      <p>{title} </p>
      <p>{description}</p>
    </div>
  );
};

export default TimeLineCard;
