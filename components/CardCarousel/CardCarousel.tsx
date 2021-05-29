import styles from "./CardCarousel.module.scss";
import Image from "../Image";
import { IImageProps } from "../../types/types";

interface ICardCarouselProps {
  image: IImageProps,
  handleClick: () => boolean;
  open: boolean;
  setOpen: () => void;
}

const CardCarousel: React.FC<ICardCarouselProps> = ({ image, handleClick, open, setOpen }) => {
  // image = {
  //   src: '/images/temp/kanban2_small-min.jpg',
  //   alt: 'Anlagstavla med todo-lappar.',
  //   caption: 'Foto: Paul Hanaoka, unsplash.com',
  //   width: 640,
  //   height: 960,
  //   mediaQueries: [
  //     {
  //       minWidth: 580,
  //       src: '/images/temp/kanban2_medium-min.jpg',
  //     },
  //   ],
  // };

  return (
    <div className={styles["CardCarousel"]}>
      <button className={styles["CardCarousel__Button"]} onClick={() => handleClick(open, setOpen)}>

      </button>
      <div className={styles["CardCarousel__ImageWrapper"]}>
        <Image {...image} />
      </div>
      <div className={styles["CardCarousel__TextWrapper"]}>
        <h3 className={styles["CardCarousel__Title"]}>Nån title</h3>
        <p className={styles["CardCarousel__Text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem qui dolor ut similique, sequi voluptatibus itaque a reprehenderit neque delectus facilis facere iure consequatur nihil quo porro explicabo enim velit inventore. Provident perferendis quae vitae natus blanditiis voluptatem est hic.</p>
      </div>

    </div>
  );
};

export default CardCarousel;
