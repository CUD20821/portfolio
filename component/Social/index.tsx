import Link from "next/link";
import Image from "next/image";
import "./social.css";

const Social = ({ img, url }: { img: string; url: string }) => {
  return (
    <div className="contact-icon">
      <Link href={url} className="contact-ctn">
        <Image src={img} alt={img} width={32} height={32}></Image>
      </Link>
    </div>
  );
};

export default Social;
