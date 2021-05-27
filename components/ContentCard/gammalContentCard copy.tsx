import styles from "./ContentCard.module.scss";
import classNames from "classnames";
import CodeBox from "../CodeBox";
import Image from "../Image";
import Video from "../Video";

import {IVideoProps} from "../Video/Video";
import {IImageProps} from "../../types/types";

interface IContentCardProps {
  reverse?: boolean;
  html?: string;
  code?: string;
  image?: IImageProps;
  video?: IVideoProps;
}

const ContentCard: React.FC<IContentCardProps> = ({ html, code, image, video, reverse = false }) => {
  code = `import styles from './Image.module.scss';
import classNames from "classnames";
import { IImageProps } from '../../types/types';

const Image: React.FC<IImageProps> = ({
    src,
    width,
    height,
    alt,
    mediaQueries,
    loading = 'lazy',
    round = false,
    modifier = [],
}) => {
    const classes = !modifier.length
      ? styles["Image"]
      : classNames(modifier.map(x => (
        [x]
    )), styles["Image"]);

    let imageStyles = {};

    if (round) {
        imageStyles = { borderRadius: "50%" }
    }

    return (
        <picture className={classes}
        >
            {!!mediaQueries?.length &&
                mediaQueries.map(({ src, minWidth }, index) => (
                    <source
                        key={index}
                        media={\`(min-width: \${minWidth}px)\`}
                        srcSet={src}
                    />
                ))}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                style={imageStyles}
                className={styles['Image__Image']}
            />
        </picture >
    );
};

export default Image;
`;

  html = '<h2>Om webbsidan</h2><p>Webbsidan har jag byggt för att showcase:a lite av det jag har lärt mig under den 2-åriga YH-utbildningen, som bl.a. består av en lärorik 6 månaders LIA(praktik) på <a href="https://www.frojd.se" >digitalbyrån Fröjd</a>.</p><p>Sajten är fortfarande under uppbyggnad, men kommer snart ha mer innehåll så att du kan läsa om <em>hur</em> jag byggt den.</p><p>Jag kan redan nu avslöja att den är skriven i Typescript i Next.js och jag arbetar även med tillgänglighetsanpassning och prestandaoptimering. Jag har också ansträngt mig för att få en bra Lighthouse-audit av sajten.</p>';

  image = {
      src: '/images/temp/kanban2_small-min.jpg',
      alt: 'Anlagstavla med todo-lappar.',
      caption: 'Foto: Paul Hanaoka, unsplash.com',
      width: 640,
      height: 960,
      mediaQueries: [
        {
          minWidth: 580,
          src: '/images/temp/kanban2_medium-min.jpg',
        },
      ],
    };

  reverse = true;

  return (
    <>
      <div className={classNames(styles["ContentCard"], { [styles["ContentCard--Reverse"]]: false })}>
        <div className={styles["ContentCard__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        {/* {!!code && (
        <div className={styles["ContentCard__CodeWrapper"]}>
          <CodeBox code={code} height={50} />
        </div>
      )} */}
        {/* {!!video && ( */}
        <div className={styles["ContentCard__VideoWrapper"]}>
            <span className={styles["ContentCard__VideoTitleWrapper"]}>
                <h3 className={styles["ContentCard__VideoTitle"]}>Före</h3>
            </span>
          <Video width={704} height={644} src={"images/video/desktopPerfEnh.mp4"} />
        </div>
        {/* )} */}
        {/* {!!image && (
          <div className={styles["ContentCard__ImageWrapper"]}>
            <Image {...image[0]} />
          </div>
        )} */}

      </div>
      <div className={classNames(styles["ContentCard"], { [styles["ContentCard--Reverse"]]: false })}>

        <div className={styles["ContentCard__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        {!!code && (
          <div className={styles["ContentCard__VideoWrapper"]}>

            {/* <div className={styles["ContentCard__CodeWrapper"]}> */}
            <CodeBox code={code} height={60} />
          </div>
        )}
      </div>
      <div className={classNames(styles["ContentCard"], { [styles["ContentCard--Reverse"]]: reverse })}>
        <div className={styles["ContentCard__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        {/* {!!code && (
        <div className={styles["ContentCard__CodeWrapper"]}>
          <CodeBox code={code} height={50} />
        </div>
      )} */}
        {!!image && (

          <div className={styles["ContentCard__VideoWrapper"]}>
          <div className={styles["ContentCard__ImageWrapper"]}>
            {/* <div className={styles["ContentCard__ImageWrapper"]}> */}
            <Image {...image} />
          </div>
          </div>
        )}

      </div>
      <div className={classNames(styles["ContentCard"], { [styles["ContentCard--Reverse"]]: reverse })}>

        <div className={styles["ContentCard__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        {!!code && (
          <div className={styles["ContentCard__CodeWrapper"]}>
            <CodeBox code={code} height={60} />
          </div>
        )}
      </div>
      <div className={classNames(styles["ContentCard"], { [styles["ContentCard--Reverse"]]: reverse })}>

        <div className={styles["ContentCard__Text"]} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        <div className={styles["ContentCard__VideoWrapper"]}>
            <span className={styles["ContentCard__VideoTitleWrapper"]}>
                <h3 className={styles["ContentCard__VideoTitle"]}>Efter</h3>
            </span>
          <Video width={704} height={644} src={"images/video/desktopPerfEnh.mp4"} />
        </div>
      </div>
    </>
  );
};

export default ContentCard;
