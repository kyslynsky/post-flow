import { SVGProps } from "react";
export const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 17"
    {...props}
  >
    <rect width={20} height={3} fill="#48c9b0" rx={1.5} />
    <rect width={20} height={3} y={7} fill="#48c9b0" rx={1.5} />
    <rect width={20} height={3} y={14} fill="#48c9b0" rx={1.5} />
  </svg>
);
