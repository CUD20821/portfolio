import { getDataContentMD } from "@/app/utils";
import ReactMarkdown from "react-markdown";
import "./projects.css";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dataContent = await getDataContentMD(id);
  console.log("dataContent ", dataContent);
  if (!dataContent) return <div>nodata</div>;
  return (
    <div>
      <h1>Project Detail2</h1>
      <div className="markdown-content">
        <ReactMarkdown>{dataContent.content}</ReactMarkdown>
      </div>
    </div>
  );
}
