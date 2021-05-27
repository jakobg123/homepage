import styles from "./ConstructionPage.module.scss";
import CodeBox from "../../components/CodeBox";
import ContentCard from "../../components/ContentCard";
// import Video from "../../components/Video";
import VideoCard from "../../components/VideoCard";
// import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
// import { useRef, useEffect } from "react";
import CardArticle from "../../components/CardArticle";

// import {constructionPageData} from "../../data/ConstructionPage/ConstructionPageData";
// console.log("🚀 ~ file: ConstructionPage.tsx ~ line 11 ~ constructionPageData", constructionPageData)

interface IConstructionPageProps {
    // pageData: object;
}

const ConstructionPage: React.FC<IConstructionPageProps> = ({accessibility, design, performance}) => {
// console.log("🚀 ~ file: ConstructionPage.tsx ~ line 18 ~ propps", props)
    // const {accessibility, design, performance} = pageData;

  //   const ref = useRef(0);
  //   console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 11 ~ ref", ref)

  //   useEffect(() => {
  //     let scrollable = isScrollable(ref.current);
  //     console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 14 ~ useEffect ~ scrollable", scrollable)

  //   }, [])


  const imageCode = `import styles from './Image.module.scss';
import classNames from "classnames";
import { IImageProps, IMediaQueries } from '../../types/types';

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

  //   const isScrollable = function (ele) {
  //     // Compare the height to see if the element has scrollable content
  //     const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

  //     // It's not enough because the element's `overflow-y` style can be set as
  //     // * `hidden`
  //     // * `hidden !important`
  //     // In those cases, the scrollbar isn't shown
  //     const overflowYStyle = window.getComputedStyle(ele).overflowY;
  //     const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

  //     return hasScrollableContent && !isOverflowHidden;
  //   };

  //   const scrollFunction = (e) => {
  //     console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 63 ~ scrollFunction ~ e", e.target.parentNode);
  //     e.target.parentNode.scrollBy(0, 100);

  //     const res = isScrollable(e.target.parentNode);
  //     console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 82 ~ scrollFunction ~ res", res)
  //   }

  return (
    <div className={styles["ConstructionPage"]}>
      <div className={styles['ConstructionPage__Grid']}>

        <h1 className={styles['ConstructionPage__Title']}>sadasdas</h1>

        <div className={styles['ConstructionPage__EntryWrapper']}>
          <em className={styles['ConstructionPage__Em']}>greeting</em>
          <div
            className={styles['ConstructionPage__Preamble']}
          >dssfdsfdsfsd preamlbe</div>
          <CardArticle>
              <ContentCard code={performance.code.image}/>
          </CardArticle>
          {/* <ContentCard /> */}
          {/* <Video containerWidth={50} width={704} height={644} /> */}
          {/* <VideoCard /> */}
          {/* <CodeBox code={imageCode} /> */}

          {/* <div id="codeScroll" className={styles["ConstructionPage__CodeWrapper"]}> */}
          {/* <button onClick={scrollFunction}>scrolla</button> */}
          {/* <pre>
              <code>
                {imageCode}
              </code>
            </pre> */}
          {/* <CodeBlock
              text={imageCode}
              language={"jsx"}
              showLineNumbers={true}
              theme={tomorrowNightBlue}
              wrapLines
            /> */}
          {/* </div> */}

          <div className={styles['ConstructionPage__ParagraphPres']}>
            {/* <div className={styles['StartContainer__PresImageWrapper']}>
              <Image {...presImage} mediaQueries={mediaQueries} round />
            </div> */}
            <h2>Om webbsidan</h2>
            <p>Webbsidan har jag byggt för att showcase:a lite av det jag har lärt mig under den 2-åriga YH-utbildningen, som bl.a. består av en lärorik 6 månaders LIA(praktik) på{' '}<a href="https://www.frojd.se">digitalbyrån Fröjd</a>.
        </p>
            <p>Sajten är fortfarande under uppbyggnad, men kommer snart ha mer innehåll så att du kan läsa om <em>hur</em> jag byggt den.
        </p>
            <p>Jag kan redan nu avslöja att den är skriven i Typescript i Next.js och jag arbetar även med tillgänglighetsanpassning och prestandaoptimering. Jag har också ansträngt mig för att få ett bra Lighthouse-resultat av sajten.
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps(props){
//     console.log("🚀 ~ file: ConstructionPage.tsx ~ line 160 ~ getStaticProps ~ props", props)
//     console.log("körs den ens");
//     return {
//         props:{
//             constructionPageData
//             // pageData: {
//             // }
//         }
//     }
// }

export default ConstructionPage;
