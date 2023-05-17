import { dateDiffInDays } from "./date";

export function getDeadlineCss(deadline: Date) {
  const daysDiff = dateDiffInDays(new Date(), deadline);

  if (daysDiff <= 2) {
    return "bg-red text-white";
  } else if (daysDiff <= 5) {
    return "bg-orange text-white";
  } else {
    return "bg-green text-white";
  }
}
