import styles from "./ModalContent.module.scss";
import Image from "../Image";
import Icon from "../Icon";
import { IImageProps } from "../../types/types";
import { IIconProps } from "../../types/types";
import useWindowSize from "../../utils/Hooks/useWindowSize";
import classNames from "classnames";

interface IModalContentProps {
  image?: IImageProps;
  text?: string;
  title?: string;
  fullSize?: boolean;
  html?: string;
  icon?: IIconProps["type"];
}

const ModalContent: React.FC<IModalContentProps> = ({ image, text, title, fullSize = false, html, icon, }) => {
  const [screenWidth] = useWindowSize();
  // let imageWidth = image.width > image.height ? { width: "55%" } : { width: "30%" };
  let imageWidthAndPosition = {};

  if (image && (title || text) && screenWidth >= 768) {
    imageWidthAndPosition = image.width > image.height ? { width: "55%" } : { width: "30%", left: "25%" }
  } else {
    imageWidthAndPosition = { width: "90%" }
  }

  const portrait: boolean = image && image.width < image.height;

  const styling = image && { paddingTop: `${image.height / image.width * 100}%` };

  // let bothTextAndImage = title || text ? styles["ModalContent--TextAndImage"] : "";
  // const styling = (!title || !text) ? { paddingTop: `95%` } : { paddingTop: `${image.height / image.width * 100}%` }

  return (
    <div className={classNames(styles["ModalContent"],
      { [styles["ModalContent--TextAndImage"]]: !!title || !!text },
      { [styles["ModalContent--Portrait"]]: portrait },
      { [styles["ModalContent--FullSize"]]: fullSize }
    )
    }>
      <div className={styles["ModalContent__OuterWrapper"]}
      // style={imageWidthAndPosition}
      >
        {image && (
          <div className={styles["ModalContent__ImageWrapper"]}
            style={styling}
            >
              <Image {...image} />
          </div>
        )}
        {icon && (
          <div className={styles["ModalContent__IconWrapper"]}
          >
            <Icon type={icon} color="Black" />
          </div>
        )}
      </div >
      {(!!title || !!text || !!html) && <div className={styles["ModalContent__TextWrapper"]}>
        <div className={styles["ModalContent__InnerTextWrapper"]}>
          {!!title && <h2 className={styles["ModalContent__Title"]}>{title}</h2>}
          {!!text && <p className={styles["ModalContent__Text"]}>{text}</p>}
          {!!html && <div className={styles["ModalContent__Text"]} dangerouslySetInnerHTML={{__html: html}}></div>}
        </div>
      </div>}
    </div >
  );
};

export default ModalContent;
