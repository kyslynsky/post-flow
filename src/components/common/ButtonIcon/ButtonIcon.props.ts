import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { SvgBurger } from "./../../iconComponents/Burger";
import { SvgUp } from "../../iconComponents/Up";
import { SvgClose } from "../../iconComponents/Close";

export const icons = {
  SvgUp,
  SvgClose,
  SvgBurger,
};

export type IconName = keyof typeof icons;

export interface IButtonIcon
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearence: "primary" | "white";
  icon: IconName;
}
