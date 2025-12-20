import SubProject from "@/component/Project/SubProject";
import Experience from "@/component/Experience";
import Button from "@/component/Button";
import { dataProjects, dataExperience } from "./constants";
import { formatExperienceDuration } from "./utils";

export default function Home() {
  const startYoe = new Date("2022-10-01");
  const today = new Date();

  let yoe = today.getFullYear() - startYoe.getFullYear();
  const monthDiff = today.getMonth() - startYoe.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < startYoe.getDate())
  ) {
    yoe--;
  }

  /*
  today = 2025/11/02 
  startYoe1 = 2022/10/01
  startYoe2 = 2022/12/01
  startYoe3 = 2022/11/01

  => yoe = 2025 - 2022 = 3
  => monthDiff1 = 11 - 10 = 1
  => monthDiff2 = 11 - 12 = -1 -> chưa được 3 năm
  => monthDiff3 = 11 - 11 = 0 && dateToday = 1 > dateStart = 2 => chưa được 3 năm
  */

  return (
    <div>
      <h1>Xin chào, mình tên là Đức</h1>
      <p>
        Mình hiện đang làm việc ở vị trí{" "}
        <span className="highlight">BrSE - Bridge Software Engineer</span>. Mình
        đã có <span>{yoe}</span>+ năm kinh nghiệm trong lĩnh vực offshore
        software development.
        <br />
        <span className="space-between-graph"></span>
        Mảng chủ yếu mình tham gia là{" "}
        <span className="highlight">Website Development</span> và business
        domain chủ yếu là <span className="highlight">Bảo hiểm</span>
        <br /> Với vai trò BrSE trong dự án, không chỉ mang nhiệm vụ truyền đạt
        thông tin đúng và đủ, mình còn phải là người hỗ trợ trong việc quản lý
        tiến độ công việc, đưa ra ý kiến về những vấn đề nhân sự trong team. Nói
        chung là làm thợ đụng(ngoài code 🥲)
        <span className="space-between-graph"></span>
        Mình <b>KHÔNG</b> phải xuất phát từ ngành CNTT, nhưng nhờ một vài sự
        tình cờ, mình được tham gia vào một công ty IT outsourc cho thị trường Nhật khi mới
        về Việt Nam, kể từ đó sự tò mò và hứng thú khi làm mảng Web Development
        luôn được duy trì đến hiện tại 😁.
        <span className="space-between-graph"></span>
        Vì luôn tò mò về công nghệ(vì không biết gì cả 😩), nên mình làm ra
        trang này để PR bản thân 🫣 nhưng cũng là nơi để ghi lại chặng đường của
        mình trong ngành này(sắp bị AI cho cook nhưng mà thôi kệ 😂).
        <div className="note">
          Nội dung do mình tự nghĩ, không phải do AI viết 😤
        </div>
      </p>
      <div className="content-parent">
        <div className="content-col-1">
          <div className="box">
            <div className="title">
              <span>Experience</span>
            </div>
            <div className="sub-items">
              {dataExperience.map((item) => (
                <Experience
                  key={item.id}
                  image={item.image}
                  position={item.position}
                  company={item.company}
                  duration={formatExperienceDuration(item.startDate, item.endDate)}
                  place={item.place}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="content-col-2">
          <div className="box">
            <div className="title">
              <span>Projects</span>
            </div>
            <div className="sub-items">
              <div className="sub-project-container">
                {dataProjects.map((item) => (
                  <SubProject
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <Button
                text={"See all projects"}
                type={"readmore"}
                url={"/projects"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
