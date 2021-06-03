import { useState, useEffect } from "react";
import styles from "./CardCode.module.scss";
import classNames from "classnames";
import dynamic from "next/dynamic";
const CodeBox = dynamic(() => import("../CodeBox"));
import { useInView } from "react-intersection-observer";

interface ICardCodeProps {
  reverse?: boolean;
  reverseWrap?: boolean;
  code?: any;
  html?: string;
}

const CardCode: React.FC<ICardCodeProps> = ({ reverse, reverseWrap, code, html }) => {
  const [fadeIn, setFadeIn] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  useEffect(() => {
    inView && setFadeIn(true);
    return () => setFadeIn(false);
  }, [inView])

  console.log("OUTPUT ÄR ~ file: CardCode.tsx ~ line 16 ~ inView", inView)
  return (
    <div ref={ref} className={classNames(styles["CardCode"], {
      [styles["CardCode--Reverse"]]: reverse,
      [styles["CardCode--ReverseWrap"]]: reverseWrap
    })}>
      <div className={styles["CardCode__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
      </div>
      <div className={styles["CardCode__VideoWrapper"]} >
        {!!inView && (
          // <div className={classNames(styles["CardCode__FadeContainer"], { [styles["CardCode__FadeContainer--Show"]]: !!fadeIn })} >
          // div className={classNames(styles["CardCode__FadeContainer"], { [styles["CardCode__FadeContainer--Show"]]: !!fadeIn })} >
          < CodeBox code={code.text} height={code.height} fadeIn />

          // </div>
        )}
      </div>
    </div >
  );
};

export default CardCode;
