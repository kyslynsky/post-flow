import { useState } from "react";
import { Button } from "../../common/Button";
import styles from "./Header.module.css";
import { Modal } from "../Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <nav>
        <a href="/" className={styles.logo}>
          Post Flow
        </a>
      </nav>
      <Button
        aria-label="Add Post"
        appearence="blue"
        type="button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Add Post
      </Button>

      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        aria-modal={isModalOpen}
      />
    </header>
  );
};
