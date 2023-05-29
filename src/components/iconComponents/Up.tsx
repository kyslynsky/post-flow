import { SVGProps } from "react";
export const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 13"
    {...props}
  >
    <rect
      width={14}
      height={3}
      y={9.9}
      fill="#fff"
      rx={1.5}
      transform="rotate(-45 0 9.9)"
    />
    <path
      fill="#fff"
      d="M9.06 1.232a1.5 1.5 0 0 1 2.122 0L18.96 9.01a1.5 1.5 0 1 1-2.121 2.122L9.06 3.354a1.5 1.5 0 0 1 0-2.122Z"
    />
  </svg>
);
