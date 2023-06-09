import { IButtonIcon, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({ appearence, icon, className, ...props }: IButtonIcon): JSX.Element => {
  const IconComp = icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.white]: appearence === "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
