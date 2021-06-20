import styles from "./ButtonImage.module.scss";
import Image from "../Image";
import {useSpring, animated, config, to} from "react-spring";
import {useState} from "react";

interface IButtonImageProps {

}

const ButtonImage: React.FC<IButtonImageProps> = () => {
    const [hovered, setHovered] = useState(false);
    const tempImage = {
        src: '/images/temp/temp.jpg',
        alt: 'Ljus, vit bild av flaska och växt.',
        width: 1920,
        height: 1280,
        caption: "Foto: Deanna Alys, från unsplash.com",
        mediaQueries: [
        ],
      };

    //   const props = useSpring({
    //       to: {opacity: 1},
    //       from: {opacity: 0.5},
    //       reverse: hovered,
    //       config: config.molasses,
    //       onRest: () => setHovered(!hovered),
    //   });

      const props = useSpring({
        x: hovered ? 1 : .8,
        config: { mass: 3, tension: 80, friction: 10 },
      })

  return (
    <animated.a
        href={"/sajtbygget"}
        style={{transform: props.x.to(x => `scale(${x})`)}}
        className={styles["ButtonImage"]}
        onFocus={() => setHovered(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <Image {...tempImage} />
    </animated.a>
  );
};

export default ButtonImage;
