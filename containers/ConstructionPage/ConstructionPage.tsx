import styles from "./ConstructionPage.module.scss";
import {CodeBlock, tomorrowNightBlue} from "react-code-blocks";

interface IConstructionPageProps {

}

const ConstructionPage: React.FC<IConstructionPageProps> = () => {
    const code = "<div><h1>hejsan</h1></div>";

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
        const classes = !modifier.length ? styles["Image"] : classNames(modifier.map(x => (
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
  return (
    <div className={styles["ConstructionPage"]}>
      <div className={styles['ConstructionPage__Grid']}>

        <h1 className={styles['ConstructionPage__Title']}>sadasdas</h1>

        <div className={styles['ConstructionPage__EntryWrapper']}>
          <em className={styles['ConstructionPage__Em']}>greeting</em>
          <div
            className={styles['ConstructionPage__Preamble']}
          >dssfdsfdsfsd preamlbe</div>
          <div className={styles["ConstructionPage__CodeWrapper"]}>
              <CodeBlock
                  text={imageCode}
                  language={"jsx"}
                  showLineNumbers={true}
                  theme={tomorrowNightBlue}
                  wrapLines
              />
          </div>

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

export default ConstructionPage;
