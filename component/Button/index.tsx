import Link from "next/link";
import "./button.css";

interface ButtonProps {
  text: string;
  type: string;
  url: string;
}
function Button(props: ButtonProps) {
  const { text, type, url } = props;

  return (
    <Link href={url}>
      <button className={type}>{text}</button>
    </Link>
  );
}

export default Button;
