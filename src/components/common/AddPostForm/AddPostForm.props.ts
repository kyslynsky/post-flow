import { FormHTMLAttributes, DetailedHTMLProps } from "react";

export interface ContactFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  setOpen: (arg: boolean) => void;
}
