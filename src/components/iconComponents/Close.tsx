import { SVGProps } from "react";
export const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <rect
      width={23}
      height={3}
      y={16.51}
      fill="#48c9b0"
      rx={1.5}
      transform="rotate(-45 0 16.51)"
    />
    <rect
      width={23}
      height={3}
      x={2.253}
      fill="#48c9b0"
      rx={1.5}
      transform="rotate(45 2.253 0)"
    />
  </svg>
);
