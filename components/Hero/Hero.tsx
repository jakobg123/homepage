import styles from "./Hero.module.scss";
import Image from "../Image";
import { IImageProps } from '../../types/types';

interface IHeroProps {
  heroImage: IImageProps,
}

const Hero: React.FC<IHeroProps> = ({ heroImage }) => {
  return (
    <div className={styles["Hero"]}>
      <Image
        {...heroImage}
      // modifier={[styles[heroImage.modifierClass]]}
      />
    </div>
  );
};

export default Hero;
