import styles from "./CardCarousel.module.scss";
import Image from "../Image";
import { IImageProps } from "../../types/types";
import classNames from "classnames";

interface ICardCarouselProps {
  image: IImageProps,
  open: boolean;
  setOpen: (open) => void;
  onClick: (id, open, setOpen, setModalContent) => void;
  id: number;
  title: string;
  text: string;
  setModalContent: (id) => void;
  dark: boolean;
}

const CardCarousel: React.FC<ICardCarouselProps> = ({ id, title, text, image, onClick, open, setOpen, setModalContent, dark = false }) => {
  console.log("OUTPUT ÄR ~ file: CardCarousel.tsx ~ line 19 ~ text", text.length)
  const truncatedText = text.length > 150 ? text.slice(0, 150) : text;

  return (
    <div className={classNames(styles["CardCarousel"], { [styles["CardCarousel--Dark"]]: dark })}>
      <button className={styles["CardCarousel__Button"]} onClick={() => onClick(id, open, setOpen, setModalContent)}><span className="sr-only">Läs mer om + {title}</span>
      </button>
      <div className={styles["CardCarousel__ImageWrapper"]}>
        <Image {...image} />
      </div>
      <div className={styles["CardCarousel__TextWrapper"]}>
        <h4 className={styles["CardCarousel__Title"]}>{title}</h4>
        <p className={styles["CardCarousel__Text"]}>{truncatedText + "..."}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
