import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}
