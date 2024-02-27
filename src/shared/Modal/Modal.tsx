import React from "react";
import { createPortal } from "react-dom";
import Styles from "./Modal.module.css";
interface ModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}
export const Modal = ({ isModalOpen, onCloseModal, children }: ModalProps) => {
  return createPortal(
    <div>
      <div className={Styles.Overlay}></div>
      <div className={Styles.Modal}>
        <div className={Styles.CloseModalButton} onClick={onCloseModal}>
          X
        </div>
        <div className={Styles.ModalContent}>{children}</div>
      </div>
    </div>,

    document.getElementById("modal") as HTMLInputElement
  );
};
