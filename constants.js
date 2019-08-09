import useWindowSize from "@rooks/use-window-size";

export const blurbTypes = [
  "imageBlurb",
  "textBlurb",
  "rabbitHoleBlurb",
  "linkBlurb",
  "tagBlurb"
];

export function useResponsiveMargin(compactMargins = "1em") {
  const { innerWidth } = useWindowSize();

  const n = Math.floor(Math.min(innerWidth, 1500) / 130);

  return n + "%";
}
