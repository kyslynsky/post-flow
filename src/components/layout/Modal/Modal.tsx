import styles from "./Modal.module.css";
import Sheet from "react-modal-sheet";
import { ModalProps } from "./Modal.props";
import { ButtonIcon } from "../../common/ButtonIcon/ButtonIcon";
import { AddPostForm } from "../../common/AddPostForm";

export const Modal = ({ isOpen, setOpen }: ModalProps): JSX.Element => {
  return (
    <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ButtonIcon
            appearence="primary"
            icon="SvgClose"
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
          />
          <AddPostForm setOpen={setOpen} />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
