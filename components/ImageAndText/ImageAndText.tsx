import { useContext } from "react";
import classNames from 'classnames';
import styles from "./ImageAndText.module.scss";
import Image from "../Image";
import { Theme } from "../../containers/StartContainer/StartContainer";

interface IImageAndText {
    html: string;
    imageToLeft?: boolean;
}

const ImageAndText: React.FC<IImageAndText> = ({ html, imageToLeft = false }) => {
    const lightTheme = useContext(Theme);

    return (
        <div>
            <div className={classNames(styles["ImageAndText"], { [styles["ImageAndText--Left"]]: imageToLeft }, { [styles["ImageAndText--Light"]]: lightTheme })}>
                <div
                    className={styles['ImageAndText__TextWrapper']}
                    dangerouslySetInnerHTML={{ __html: html }}></div>
                <figure className={styles["ImageAndText__Figure"]}>

                    <Image src={"./images/temp/code.jpg"}

                        modifier={[styles['ImageAndText__ImageWrapper']]} />

                    <figcaption className={styles['ImageAndText__Caption']}>Foto: Nån från Unsplash.com</figcaption>
                </figure>
            </div>
        </div>
    )
};
export default ImageAndText;