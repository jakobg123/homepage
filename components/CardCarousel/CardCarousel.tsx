import styles from "./CardCarousel.module.scss";
import Image from "../Image";
import { IImageProps } from "../../types/types";

interface ICardCarouselProps {
  image: IImageProps,
  open: boolean;
  setOpen: (open) => void;
  onClick: (id, open, setOpen, setModalContent) => void;
  id: number;
  title: string;
  text: string;
  setModalContent: (id) => void;
}

const CardCarousel: React.FC<ICardCarouselProps> = ({ id, title, text, image, onClick, open, setOpen, setModalContent }) => {
  return (
    <div className={styles["CardCarousel"]}>
      <button className={styles["CardCarousel__Button"]} onClick={() => onClick(id, open, setOpen, setModalContent)}>
      </button>
      <div className={styles["CardCarousel__ImageWrapper"]}>
        <Image {...image} />
      </div>
      <div className={styles["CardCarousel__TextWrapper"]}>
        <h3 className={styles["CardCarousel__Title"]}>{title}</h3>
        <p className={styles["CardCarousel__Text"]}>{text}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
