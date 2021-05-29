import styles from "./ModalContent.module.scss";
import Image from "../Image";
import { IImageProps } from "../../types/types";
import useWindowSize from "../../utils/Hooks/useWindowSize";

interface IModalContentProps {
  image: IImageProps;
  text: string;
  title: string;
}

const ModalContent: React.FC<IModalContentProps> = ({ image, text, title }) => {
  const [screenWidth] = useWindowSize();
  // console.log("OUTPUT ÄR ~ file: ModalContent.tsx ~ line 14 ~ screenWidth", screenWidth)
  // let imageWidth = image.width > image.height ? { width: "55%" } : { width: "30%" };
  let imageWidth = {};
  if (screenWidth >= 768) {
    imageWidth = image.width > image.height ? { width: "55%" } : { width: "30%" }
  } else {
    imageWidth = { width: "100%" }
  }

  return (
    <div className={styles["ModalContent"]}>
      <div className={styles["ModalContent__OuterWrapper"]} style={imageWidth}>
        <div className={styles["ModalContent__ImageWrapper"]}
          style={{ paddingTop: `${image.height / image.width * 100}%` }}
        >
          <Image {...image} />
        </div>
      </div >
      <div className={styles["ModalContent__TextWrapper"]}>
        <h2 className={styles["ModalContent__Title"]}>{title}</h2>
        <p className={styles["ModalContent__Text"]}>{text}</p>
      </div>
    </div >
  );
};

export default ModalContent;
