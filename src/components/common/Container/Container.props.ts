import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
