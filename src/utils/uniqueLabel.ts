import { Option } from "../components/dropdownbox";

export function removeDuplicateLabels(options: Option[]) {
  const uniqueOptions = [];

  const seenLabels = new Set();

  for (const option of options) {
    if (!seenLabels.has(option.label)) {
      uniqueOptions.push(option);
      seenLabels.add(option.label);
    }
  }

  return uniqueOptions;
}
