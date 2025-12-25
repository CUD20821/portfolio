/* eslint-disable import/no-anonymous-default-export */
const dataProjects = [
  {
    id: 1,
    image: "/personal.png",
    title: "Bảo hiểm trường học",
    description:
      "Dự án bảo hiểm dành cho học sinh, dùng để đăng ký và quản lý hợp đồng bảo hiểm và đối tượng của sản phẩm trải dài từ cấp từ mẫu giáo đến đại học.",
    // long-description:" Dự án được triển khai trước năm học chính thức bên Nhật, được dùng đăng ký và quản lý bảo hiểm tổng hợp dành cho học sinh và trẻ em của Mitsui Sumitomo Kaijo.\n Dự án này đã được phát triển ở 1 bên khác, sau đó được bên mình tiếp nhận và phát triển tiếp.\n Dự án đã sang phase 3 và sẽ được triển khai hằng năm",
    url: "/projects/insurance-school1",
  },
  {
    id: 2,
    image: "/personal.png",
    title: "Bảo hiểm thiết bị",
    description:
      "Dự án bảo hiểm dành cho thiết bị điện tử(điện thoại, tablet, camera,...), dùng để đăng ký và quản lý hợp đồng bảo hiểm và yêu cầu thanh toán bảo hiểm khi gặp sự cố",
    // long-description: "",
    url: "/projects/insurance-school2",
  },
  {
    id: 3,
    image: "/personal.png",
    title: "Bảo hiểm thiết bị",
    description:
      "Dự án bảo hiểm dành cho thiết bị điện tử(điện thoại, tablet, camera,...), dùng để đăng ký và quản lý hợp đồng bảo hiểm và yêu cầu thanh toán bảo hiểm khi gặp sự cố",
    // long-description: "",
    url: "/projects/insurance-school3",
  },
];

const dataExperience = [
  {
    id: 1,
    image: "/personal.png",
    position: "BrSE",
    company: "Teqnological Asia",
    startDate: "2024-05-01",
    endDate: null,
    place: "Thành phố Hồ Chí Minh, Việt Nam",
    description:
      "Với vai trò là BrSE, trách nhiệm chính của mình là truyền đạt thông tin dự án một cách rõ ràng với đối tác Nhật Bản để phần mềm được phát triển theo đúng yêu cầu của khách hàng.\n Đồng thời, mình cũng phải là người tạo ra các tài liệu chi tiết để nhóm phát triển có thể triển khai chính xác; quản lý tình trạng dự án để cả hai nhóm có thể thấy rõ tiến độ của nhau.",
  },
  {
    id: 2,
    image: "/personal.png",
    position: "BrSE",
    company: "IT comtor / BrSE",
    startDate: "2022-10-01",
    endDate: "2024-04-01",
    place: "Thành phố Đà Nẵng, Việt Nam",
    description:
      "Với vai trò là IT comtor, trách nhiệm chính của mình là dịch các cuộc trao đổi giữa bên team Việt Nam và khách hàng Nhật Bản. Thêm nữa, mình cũng phải chuẩn bị tài liệu đặc tả chi tiết để team dev có thể phát triển.\n Qua thời gian, mình được tham gia 2 dự án với tư cách BrSE, đảm nhiệm chính trong việc quản lý và báo cáo tiến độ dự án trực tiếp cho khách hàng Nhật và cấp trên ở Việt Nam",
  },
];

// const dataProjects = [
//   {
//     id: 1,
//     image: "/personal.png",
//     title: "Main project 1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     url: "/projects/1",
//   },
//   {
//     id: 2,
//     image: "/personal.png",
//     title: "Main project 2",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     url: "/projects/2",
//   },
// ];

const dataAbout = [
  {
    id: 1,
    date: "2022",
    title: "Sample1",
    description: "Sample1",
  },
  {
    id: 2,
    date: "2023",
    title: "Sample2",
    description: "Sample2",
  },
  {
    id: 3,
    date: "2024",
    title: "Sample3",
    description: "Sample1",
  },
  {
    id: 4,
    date: "2025",
    title: "Sample4",
    description: "Sample4",
  },
  {
    id: 5,
    date: "2026",
    title: "Sample5",
    description: "Sample5",
  },
];

const dataSkill = [
  { id: 1, name: "Miro" },
  { id: 2, name: "Google Workspace" },
  { id: 3, name: "Figma" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
  { id: 6, name: "Postman" },
  { id: 7, name: "Backlog" },
  { id: 8, name: "Japanese" },
  { id: 9, name: "English" },
];

// const SUPPORTED_LOCALES = ['vi', 'ja'];

export { dataProjects, dataExperience, dataAbout, dataSkill };
