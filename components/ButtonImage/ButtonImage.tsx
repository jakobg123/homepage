import styles from "./ButtonImage.module.scss";
import Image from "../Image";
import Icon from "../Icon";
import classNames from "classnames";
import Link from "next/link";
import {useSpring, animated, config, to} from "react-spring";
import {useEffect, useState} from "react";

interface IButtonImageProps {
  imageArray?: any[];
  href?: string;
}

const tempImage = {
  // src: '/images/temp/temp.jpg',
  src: '/images/temp/ctaImage13.jpg',
  alt: 'Ljus, vit bild av flaska och växt.',
  width: 700,
  height: 400,
  caption: "Foto: Deanna Alys, från unsplash.com",
  mediaQueries: [
  ],
};
const tempImage2 = {
  src: '/images/temp/ctaImage22.jpg',
  // src: '/images/temp/temp2.jpg',
  alt: 'Ljus, vit bild av flaska och växt.',
  width: 1920,
  height: 1280,
  caption: "Foto: Deanna Alys, från unsplash.com",
  mediaQueries: [
  ],
};
const tempImage3 = {
  src: '/images/temp/ctaImage33.jpg',
  // src: '/images/temp/ctaImage32.jpg',
  // src: '/images/temp/ctaImage1.jpg',
  // src: '/images/temp/temp3.jpg',
  alt: 'Ljus, vit bild av flaska och växt.',
  width: 1920,
  height: 1280,
  caption: "Foto: Deanna Alys, från unsplash.com",
  mediaQueries: [
  ],
};

const array = [
tempImage, tempImage2, tempImage3
];

const ButtonImage: React.FC<IButtonImageProps> = ({imageArray = array, href="/sajtbygget"}) => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(1);

    useEffect(() => {
      setTimeout(() => {
        if(active === imageArray.length - 1){
          setActive(0);
        } else {
          setActive(active + 1);
        }
      }, 5000)
    }, [active]);

    

      const props = useSpring({
          to: {r: 0, posX: -2, posY: 0},
          from: {r: 540, posX: -1, posY: .5},
          reverse: hovered,
          // config: config.wobbly,
          config: {tension: 220, friction: 100},
      });

      const transform = to([props.r, props.posX, props.posY], (r, posX, posY) => `translate(${posX}rem, ${posY}rem) rotateX(${r}deg)` );

      // const props = useSpring({
      //   from: {scale: 1.2, rotation: 10},
      //   to: {scale: 1, rotation: 50},
      //   reverse: hovered,
      //   // // config: { tension: 160, friction: 80 },
      //   // config: config.wobbly,
      //   config: config.gentle,
      //   // config: config.wobbly,
      //   // config: {duration: 300}

      // })
      const {scale, rotateX, arrowScale} = useSpring({
        from: {scale: 1.2, rotateX: 720, arrowScale: 4.5},
        to: {scale: 1, rotateX: 0, arrowScale: 1},
        reverse: hovered,
        // // config: { tension: 160, friction: 80 },
        // config: config.wobbly,
        config: config.gentle,
        // config: config.wobbly,
        // config: {duration: 300}

      })

  return (
    <div className={styles["ButtonImage"]}
      // onFocus={() => setHovered(true)}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      >
      
      
      <animated.div
          style={{scale}}
          className={styles["ButtonImage__Content"] + " " + styles["ButtonImage__Content--Desktop"]}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          >
            <Link href={href}>
              <a className={styles["ButtonImage__Link"]}>

                <span className={styles["ButtonImage__LinkTextWrapper"]}>
                  <span className={styles["ButtonImage__LinkText"]}>Sajtbygget</span>
                  <span className={styles["ButtonImage__LinkText--Active"]}>Läs mer om hur jag har tänkt och gjort när jag byggt sajten.</span>
                </span>
              </a>
            </Link>
            {!!imageArray?.length && imageArray.map((image, idx)  => (
              <div key={idx} aria-hidden="true" className={classNames(styles["ButtonImage__ImageWrapper"], {[styles["ButtonImage__ImageWrapper--Active"]] : active === idx })}>
                <Image {...image} />
              </div>
            ))}
            {/* <animated.div aria-hidden="true" className={styles["ButtonImage__Arrow"]} style={{transform: arrowScale.to(x => `scale(${x})`)}}> */}
            <div className={styles["ButtonImage__Arrow"]}>
              <animated.div aria-hidden="true" style={{transform}}>
                <Icon type={'arrowNext'} color={'Primary'} />
              </animated.div>
            </div>
      </animated.div>

      <div
          // style={{scale}}
          className={styles["ButtonImage__Content"] + " " + styles["ButtonImage__Content--Mobile"]}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          >
            <Link href={href}>
              <a className={styles["ButtonImage__Link"]}>

                <span className={styles["ButtonImage__LinkTextWrapper"]}>
                  <span className={styles["ButtonImage__LinkText"]}>Sajtbygget</span>
                  <span className={styles["ButtonImage__LinkText--Active"]}>Läs mer om hur jag har tänkt och gjort när jag byggt sajten.</span>
                </span>
              </a>
            </Link>
            {!!imageArray?.length && imageArray.map((image, idx)  => (
              <div aria-hidden="true" className={classNames(styles["ButtonImage__ImageWrapper"], {[styles["ButtonImage__ImageWrapper--Active"]] : active === idx })}>
                <Image {...image} />
              </div>
            ))}
            {/* <div aria-hidden="true" className={styles["ButtonImage__Arrow"]} style={{transform: arrowScale.to(x => `scale(${x})`)}}> */}
            <div className={styles["ButtonImage__Arrow"]}>
              <div aria-hidden="true">
                <Icon type={'arrowNext'} color={'Primary'} />
              </div>
            </div>
      </div>
    </div>
  );
};

export default ButtonImage;
