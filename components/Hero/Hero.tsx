import { useContext } from "react";
import PageContext from "../../utils/Page.context";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Image from "../Image";
import { IImageProps } from '../../types/types';

interface IHeroProps {
    heroImage: IImageProps,
}

const Hero: React.FC<IHeroProps> = ({ heroImage }) => {
    const pageContext = useContext(PageContext);
    console.log("🚀 ~ file: Hero.tsx ~ line 14 ~ PageContext", pageContext)
    const classes = "Hero";

    return (
        <div className={styles["Hero"] + " " + styles[`Hero--${heroImage.modifierClass}`]}>
            {/* <div className={styles["Hero"] + " " + styles[`Hero--${heroImagePageContext}`]}> */}
            {/* <div className={styles["Hero--" + heroImagePageContext]}> */}
            {/* <div className={classNames(styles["Hero"], {heroImagePageContext &&
            [styles["Hero--Construction"]]: heroImagePageContext === "Construction"})}> */}
            <Image
                {...heroImage}
            //  modifier={[styles[heroImage.modifierClass]]}
            />
        </div>
    );
};

export default Hero;
