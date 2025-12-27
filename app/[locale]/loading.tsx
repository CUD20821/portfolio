import "@/app/styles/loading.css"

export default function Loading() {
  return (
    <div className="spinner-box">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>
    </div>
  );
}
