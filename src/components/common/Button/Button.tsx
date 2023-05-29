import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  appearence,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearence === "primary",
        [styles.green]: appearence === "green",
        [styles.blue]: appearence === "blue",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
