import { getDataContentMD } from "@/app/utils";
import ReactMarkdown from "react-markdown";
import "./projects.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const ids = ["insurance-school", "insurance-influenza", "insurance-school3"];

  return routing.locales.flatMap((locale) => ids.map((id) => ({ locale, id })));
}

const Page = async ({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) => {
  const { id, locale } = await params;
  const dataContent = await getDataContentMD(id);
  if (!dataContent) return notFound();

  //   const meta = dataContent.i18n?.[locale] ?? dataContent.i18n?.vi;
  //   console.log("meta ", meta);

  //   const markdown =
  //     dataContent.contentByLocale?.[locale] ??
  //     dataContent.contentByLocale?.vi ??
  //     "Nội dung đang được cập nhật.";

  //   return (
  //     <div className="content-ctn">
  //       <h1 className="title">{meta?.title}</h1>
  //       <p className="description">{meta?.description}</p>
  //       <div className="markdown-content">
  //         <ReactMarkdown>{markdown}</ReactMarkdown>
  //       </div>
  //     </div>
  //   );
  // };
  const contentVi = dataContent.content
    .split("<---vi--->")[1]
    .split("<---ja--->")[0];
  const contentJa = dataContent.content.split("<---ja--->")[1];

  return (
    <div className="content-ctn">
      {locale === "vi" ? (
        <>
          <h1 className="">{dataContent.titleVI}</h1>
          <p className="description">{dataContent.descriptionVI}</p>
        </>
      ) : (
        <>
          <h1 className="">{dataContent.titleJP}</h1>
          <p className="description">{dataContent.descriptionJP}</p>
        </>
      )}

      <div className="markdown-content">
        {locale === "vi" ? (
          <ReactMarkdown>{contentVi}</ReactMarkdown>
        ) : (
          <ReactMarkdown>{contentJa}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default Page;
