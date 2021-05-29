import {useEffect, useState} from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";

interface IModalProps {
    open: boolean;
    setOpen: (boolean) => void;
    handleClick: (open, setOpen) => void;
}

const Modal: React.FC<IModalProps> = ({children, open, setOpen, handleClick}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
      if(open){
          setShow(true);
      } else {
          setShow(false);
      }

      return () => setShow(false);
  }, [open])


  return (
    <div className={classNames(styles["Modal"], {[styles["Modal--Active"]]: open})}>
        <div className={styles["Modal__Content"]}>
          {children}
        </div>
        <button onClick={() => handleClick(open, setOpen)}>Stäng</button>
    </div>
  );
};

export default Modal;
