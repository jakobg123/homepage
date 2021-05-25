import styles from "./ConstructionPage.module.scss";

interface IConstructionPageProps {

}

const ConstructionPage: React.FC<IConstructionPageProps> = () => {
  return (
    <div className={styles["ConstructionPage"]}>
      <div className={styles['ConstructionPage__Grid']}>

        <h1 className={styles['ConstructionPage__Title']}>sadasdas</h1>

        <div className={styles['ConstructionPage__EntryWrapper']}>
          <em className={styles['ConstructionPage__Em']}>greeting</em>
          <div
            className={styles['ConstructionPage__Preamble']}
          >dssfdsfdsfsd preamlbe</div>
              <pre>
                  <span><</span>
                  <span>p</span>
                  <span>></span>
              </pre>

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
