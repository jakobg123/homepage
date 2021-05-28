import styles from "./Modal.module.scss";

interface IModalProps {

}

const Modal: React.FC<IModalProps> = ({children}) => {
  return (
    <div className={styles["Modal"]}>
    <div className={styles["Modal__Content"]}>

      {children}
    </div>
    </div>
  );
};

export default Modal;
