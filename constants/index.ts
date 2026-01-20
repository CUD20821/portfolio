export const dataSkill = [
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

export const dataContact = [
  { id: 1, img: "/contacts/github.png", url: "https://github.com/CUD20821" },
  {
    id: 2,
    img: "/contacts/linkedin.png",
    url: "https://www.linkedin.com/in/duc-le-trung-313012203/",
  },
  {
    id: 3,
    img: "/contacts/gmail.png",
    url: "mailto:letrungducshizuoka@gmail.com",
  },
];

export type SupportedLocale = "vi" | "ja";

export interface LocaleLables {
  current: string;
  year: string;
  month: string;
}

export const localeLabels: Record<SupportedLocale, LocaleLables> = {
  vi: { current: "Hiện tại", year: "năm", month: "tháng" },
  ja: { current: "現在", year: "年", month: "ヶ月" },
};

export const dataMenu = [
  {
    id: "projects",
    nameVN: "Projects",
    nameJP: "プロジェクト",
    path: "/projects",
  },
];
