import styles from "./ConstructionPage.module.scss";
import dynamic from "next/dynamic";
// import CodeBox from "../../components/CodeBox";
// import ContentCard from "../../components/ContentCard";
const ContentCard = dynamic(() => import("../../components/ContentCard"));
const CardCode = dynamic(() => import("../../components/CardCode"));
// import Video from "../../components/Video";
// import VideoCard from "../../components/VideoCard";
// import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
// import { useRef, useEffect } from "react";
import CardArticle from "../../components/CardArticle";
const Carousel = dynamic(() => import("../../components/Carousel"));
// import Carousel from "../../components/Carousel";

// import {constructionPageData} from "../../data/ConstructionPage/ConstructionPageData";
// console.log("🚀 ~ file: ConstructionPage.tsx ~ line 11 ~ constructionPageData", constructionPageData)

interface IConstructionPageProps {
  // pageData: object;
  accessibility: any;
  design: any;
  performance: any;

}

const ConstructionPage: React.FC<IConstructionPageProps> = ({ accessibility, design, performance }) => {
  // console.log("🚀 ~ file: ConstructionPage.tsx ~ line 18 ~ propps", props)
  // const {accessibility, design, performance} = pageData;

  //   const ref = useRef(0);
  //   console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 11 ~ ref", ref)

  //   useEffect(() => {
  //     let scrollable = isScrollable(ref.current);
  //     console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 14 ~ useEffect ~ scrollable", scrollable)

  //   }, [])




  return (
    <div className={styles["ConstructionPage"]}>
      <div className={styles['ConstructionPage__Grid']}>

        <h1 className={styles['ConstructionPage__Title']}>sadasdas</h1>

        <div className={styles['ConstructionPage__EntryWrapper']}>
          <em className={styles['ConstructionPage__Em']}>greeting</em>
          <div
            className={styles['ConstructionPage__Preamble']}
          >dssfdsfdsfsd preamlbe</div>
          <Carousel carouselData={design.carouselData} />

          <CardArticle>
            {true && (
              <CardCode code={performance.code.image} html={performance.dummyText} />
            )}
            {true && (
              <CardCode code={performance.code.image} html={performance.dummyText} reverse reverseWrap />
            )}
            {true && (
              <ContentCard video={performance.video.desktopWithoutPerfEnh} html={performance.dummyText} />
            )}
            {true && (
              <ContentCard video={performance.video.desktopPerfEnh} html={performance.dummyText} reverse />
            )}
            {true && (
              <ContentCard image={performance.images.kanban} html={performance.dummyText} />
            )}
          </CardArticle>

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
