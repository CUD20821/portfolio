const formatExperienceDuration = (
  startDate: string,
  endDate: string | null
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Format display
  const formatMonthYear = (date: Date) =>
    date.toLocaleDateString("vi-VN", { month: "long", year: "numeric" });

  const startDisplay = formatMonthYear(start);
  const endDisplay = endDate ? formatMonthYear(end) : "Hiện tại";

  /* Calculate yoe(kể cả tháng hiện tại)
  const totalMonth = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  example:
  end = 2025-08
  start = 2022-10
  totalMonth = (2025 - 2022) * 12 + (7 - 9) +1 = 3 * 12 - 2 + 1 = 35
  */

  // Calculate yoe(tính khoảng cách)
  const totalMonth =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonth / 12);
  const months = totalMonth % 12;

  let durationText = "";

  if (years > 0) durationText += `${years} năm`;
  if (months > 0) durationText += ` ${months} tháng`;

  return `${startDisplay} - ${endDisplay} ・ ${durationText.trim()}`;
};

export { formatExperienceDuration };
