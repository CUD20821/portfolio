import Image from "next/image";

interface ExperienceProps {
  image: string;
  position: string;
  company: string;
  duration: string;
  place?: string;
  description: string;
}

function Experience(props:ExperienceProps) {
  const {image, position, company, duration, place, description } = props;

  return (
    <div className="card-experience">
      <Image 
      src={image} alt="logo" width={42} height={42}
      />
      <div className="content">
        <div>{position}</div>
        <div>{company}</div>
        <div>{duration}</div>
        <div>{place}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}