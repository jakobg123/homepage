import styles from "./Hero.module.scss";
import Image from "../Image";
import { IImageProps } from '../../types/types';

interface IHeroProps {
    heroImage: IImageProps,
}

const Hero: React.FC<IHeroProps> = ({ heroImage }) => {

    return (
        <div className={styles["Hero"] + " " + styles[`Hero--${heroImage.modifierClass}`]}>
            <Image
                {...heroImage}
            />
        </div>
    );
};

export default Hero;
