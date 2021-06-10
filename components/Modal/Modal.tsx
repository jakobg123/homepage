import { useEffect, useState, useContext } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { lockBody, unlockBody } from "../../utils/helpers/modal";
import Icon from "../Icon";
import ModalContext from "../../utils/context/Modal.context";

interface IModalProps {
  open: boolean;
  setOpen?: (boolean) => void;
  // handleClick: (open, setOpen) => void;
}

const Modal: React.FC<IModalProps> = ({ children, open, setOpen }) => {
  const [show, setShow] = useState(false);
  const [fadeInModal, setFadeInModal] = useState(false);
  const { modalOpen } = useContext(ModalContext);

  useEffect(() => {

    if (open) {
      lockBody();
      setShow(true);
      // toggleModalOpen(true);

      setTimeout(() => {
        setFadeInModal(true);
      }, 100)

    } else {
      setFadeInModal(false);
      // toggleModalOpen(false);
      unlockBody();
      setTimeout(() => {
        setShow(false);
      }, 400)
    }

    // return () => setShow(false);
  }, [open])

  // const myOwn = () => {
  //   setOpen(!open);
  //   // setFadeInModal(false);

  //   // setTimeout(() => {
  //   //   setShow(false);
  //   // }, 1500)
  // }


  return (
    <div className={classNames(styles["Modal"], { [styles["Modal--Display"]]: show }, { [styles["Modal--Active"]]: fadeInModal })}>
      <div className={styles["Modal__Content"]}>
        {children}
      </div>
      {/* <button className={styles["Modal__Close"]} onClick={() => toggleModalOpen(!open)}><Icon type={"close"} /><span className="sr-only">Stäng modalfönstret</span></button> */}
      <button className={styles["Modal__Close"]} onClick={() => setOpen(!open)}><Icon type={"close"} /></button>
    </div>
  );
};

export default Modal;
