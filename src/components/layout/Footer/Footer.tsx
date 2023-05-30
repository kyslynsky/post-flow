
import styles from "./Footer.module.css";

import { PTag } from "../../common/PTag";
import { format } from "date-fns";

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <a href="/" className={styles.logo}>
          Post Flow
        </a>
        <PTag size="s">{format(Date.now(), "yyyy")}</PTag>
      </div>
    </footer>
  );
};
