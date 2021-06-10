import styles from "./ModalContent.module.scss";
import Image from "../Image";
import { IImageProps } from "../../types/types";
import useWindowSize from "../../utils/Hooks/useWindowSize";

interface IModalContentProps {
  image?: IImageProps;
  text?: string;
  title?: string;
}

const ModalContent: React.FC<IModalContentProps> = ({ image, text, title }) => {
  const [screenWidth] = useWindowSize();
  console.log("🚀 ~ file: ModalContent.tsx ~ line 14 ~ screenWidth", screenWidth)
  // console.log("OUTPUT ÄR ~ file: ModalContent.tsx ~ line 14 ~ screenWidth", screenWidth)
  // let imageWidth = image.width > image.height ? { width: "55%" } : { width: "30%" };
  let imageWidthAndPosition = {};
  if ((title || text) && screenWidth >= 768) {
    imageWidthAndPosition = image.width > image.height ? { width: "55%" } : { width: "30%", left: "25%" }
  } else {
    imageWidthAndPosition = { width: "90%" }
  }

  const styling = { paddingTop: `${image.height / image.width * 100}%` };
  // const styling = (!title || !text) ? { paddingTop: `95%` } : { paddingTop: `${image.height / image.width * 100}%` }

  return (
    <div className={styles["ModalContent"]}>
      <div className={styles["ModalContent__OuterWrapper"]}
      // style={imageWidthAndPosition}
      >
        <div className={styles["ModalContent__ImageWrapper"]}
          style={styling}
        >
          <Image {...image} />
        </div>
      </div >
      {(!!title || !!text) && <div className={styles["ModalContent__TextWrapper"]}>
        {!!title && <h2 className={styles["ModalContent__Title"]}>{title}</h2>}
        {!!text && <p className={styles["ModalContent__Text"]}>{text}</p>}
      </div>}
    </div >
  );
};

export default ModalContent;
