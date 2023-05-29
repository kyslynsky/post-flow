import { PTagProps } from "./PTag.props";
import styles from "./PTag.module.css";
import cn from "classnames";

export const PTag = ({
  size,
  color,
  texttransform,
  className,
  children,
  ...props
}: PTagProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.black]: color === "black",
        [styles.red]: color === "red",
        [styles.uppercase]: texttransform === "Uppercase",
        [styles.capitalize]: texttransform === "Capitalize",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
