type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
    </div>
  );
  // ...
}
