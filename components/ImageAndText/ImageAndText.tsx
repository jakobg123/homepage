import { useContext } from "react";
import classNames from 'classnames';
import styles from "./ImageAndText.module.scss";
import Image from "../Image";
import { Theme } from "../../containers/StartPage/StartPage";
import { IImageProps } from "../../types/types";

interface IImageAndText {
    html: string;
    imageToLeft?: boolean;
    image: IImageProps;
    dark?: boolean;
    light?: boolean;
    reverseWrap?: boolean;
}

const ImageAndText: React.FC<IImageAndText> = ({ html, imageToLeft = false, image, dark = false, light = false, reverseWrap = false }) => {
    console.log("OUTPUT ÄR ~ file: ImageAndText.tsx ~ line 17 ~ light", light)
    const lightTheme = useContext(Theme);

    return (
        <div className={classNames(styles["ImageAndText"], { [styles["ImageAndText--Left"]]: imageToLeft }, { [styles["ImageAndText--ReverseWrap"]]: reverseWrap }, { [styles["ImageAndText--Light"]]: lightTheme || light }, { [styles["ImageAndText--Dark"]]: dark })}>
            <div
                className={styles['ImageAndText__TextWrapper']}
                dangerouslySetInnerHTML={{ __html: html }}></div>
            <figure className={styles["ImageAndText__Figure"]}>

                <Image
                    {...image}
                    modifier={[styles['ImageAndText__ImageWrapper']]} />

                <figcaption className={styles['ImageAndText__Caption']}>{image.caption}</figcaption>
            </figure>
        </div>
    )
};
export default ImageAndText;
