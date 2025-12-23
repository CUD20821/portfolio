import { getDataContentMD } from "@/app/utils";
import ReactMarkdown from "react-markdown";
import "./projects.css";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const dataContent = await getDataContentMD(id);
  console.log("dataContent ", dataContent);
  if (!dataContent) return <div>nodata</div>;
  return (
    <div className="content-ctn">
      <h1 className="">{dataContent.titleVI}</h1>
      <p className="description">{dataContent.descriptionVI}</p>
      <div className="markdown-content">
        <ReactMarkdown>{dataContent.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Page;

