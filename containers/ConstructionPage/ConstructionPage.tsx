import styles from "./ConstructionPage.module.scss";
import dynamic from "next/dynamic";
// import CodeBox from "../../components/CodeBox";
// import ContentCard from "../../components/ContentCard";
const ContentCard = dynamic(() => import("../../components/ContentCard"));
const CardCode = dynamic(() => import("../../components/CardCode"));
import ImageAndText from "../../components/ImageAndText";
// import Video from "../../components/Video";
// import VideoCard from "../../components/VideoCard";
// import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
// import { useRef, useEffect } from "react";
import CardArticle from "../../components/CardArticle";
const Carousel = dynamic(() => import("../../components/Carousel"));
import EntryCentered from "../../components/EntryCentered";
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
  const imagesDesign = [
    {
      src: '/images/temp/design_1_original.jpg',
      alt: 'Ljus, vit bild av flaska och växt.',
      width: 1920,
      height: 1280,
      caption: "Foto: Deanna Alys, från unsplash.com"
    },
    {
      src: '/images/temp/colors.JPG',
      alt: 'De slutgiltiga färgvalen: Primär, Sekundär, Vit, Svart, Hover med ljus bakgrund, Hover med mörk bakgrund.',
      width: 606,
      height: 137,
    },
    {
      src: '/images/temp/contrastPrimaryBlack_original.JPG',
      alt: 'Kontroll av kontrast mellan primär och mörk färg. Kontrastratiot är 12:67:1 vilket uppfyller WCAG:s krav.',
      width: 725,
      height: 654,
    },
  ]
  const imagesAccessibility = [
    {
      src: '/images/temp/accessibility_original.jpg',
      alt: 'En person som använder hjälpmedel för datorn.',
      width: 1920,
      height: 1440,
      caption: "Foto: Sigmund, från unsplash.com"
    },
    {
      src: '/images/temp/burgerInDOM.JPG',
      alt: 'Hamburgerknappen i DOM:en i browsern. Man ser att sr-onlyklassen har "Öppna meny" i sig.',
      width: 460,
      height: 315,
      x: "20",
      y: "50"
    },
    {
      src: '/images/temp/reactSrOnly.jpg',
      alt: 'Kontroll av kontrast mellan primär och mörk färg. Kontrastratiot är 12:67:1 vilket uppfyller WCAG:s krav.',
      width: 725,
      height: 654,
    },
  ]




  return (
    <div className={styles["ConstructionPage"]}>
      <div className={styles['ConstructionPage__Grid']}>

        <h1 className={styles['ConstructionPage__Title']}>Sajtbygget</h1>

        <div className={styles['ConstructionPage__EntryWrapper']}>
          <em className={styles['ConstructionPage__Em']}>Bakgrund</em>
          <div
            className={styles['ConstructionPage__Preamble']}
          ><p>Hemsidan är ett sidoprojekt som påbörjades Februari 2021. Idéen var att ha ett större projekt som lärde mig mer webbutveckling och samtidigt öka chansen att få jobb efter utbildningen. Som tur är fungerade det! Jag har både lärt mig mer och fått ett jobb. 🤓🔥🚀</p></div>
          <div className={styles['ConstructionPage__ParagraphPres']}>

            <h2>Så här gjordes sajten</h2>
            <p>Jag har valt att göra sajten i ramverket Next.js. Det är ett fullstack-ramverk med många fördelar. Bl.a. kodar man vanlig React, men Next renderar koden på servern, istället för på klienten som en SPA gör. All markup i HTML-dokumentet är alltså redan med när det når klienten, som gör att browsern direkt kan ladda in CSS och JS vilket ger snabbare initiala sidladdningar som bl.a. är bra för sidans SEO.</p>
            <p>Typescript ville jag lära mig så därför är sajten mestadels skriven i det. Dessutom underlättar TS för framtida utveckling då kodbasen blir lättare att sätta sig in i när man ser vilka typer och strukturer som används.</p>
            <p>
              Stylingen är gjord med preprocessorn SCSS och är skriven enligt Block__Element--Modifier-praxis (BEM).</p>
          </div>

        </div>
      </div>
      <div className={styles['ConstructionPage__Block'] + " " + styles['ConstructionPage__Block--Dark']}>

        <div className={styles['ConstructionPage__DesignWrapper']}>
          <EntryCentered dark text={`<p>För att pusha mina kunskaper i styling valde jag tidigt att bryta med den mer traditionella, fyrkantiga layouten.</p><p>Därför har bl.a. text puttats utanför dess “container”, gradienter lagts ovanpå bilder och vågiga SVG-element placerats över kanter.</p><p>Designen kanske bara är världens näst snyggaste, men till mitt försvar - jag är ingen designer.</p>`} title={"Design"} />

          <div className={styles['ConstructionPage__Paragraph']}>
            {/* <h2>Design</h2>
            <p>Jag ville ha en färgprofil med rena, matchande och naturliga färger. Därför sökte jag efter bilder med bra färgpaletter på <a href="https://www.unsplash.com">unsplash.com</a> som har en stor bildbank man kan använda sig av.</p>
            <p>Jag fastnade för denna bild och extraherade fram ett första färgtema med hjälp av <a href="https://color.adobe.com/sv/create/image">Adobe Color</a></p> */}
            <ImageAndText html={`<h2>Design</h2>
            <p>Jag ville ha en färgprofil med rena, matchande och naturliga färger. Därför sökte jag efter bilder med bra färgpaletter på <a href="https://www.unsplash.com">unsplash.com</a> som har en stor bildbank man kan använda sig av.</p><p>Jag fastnade för den här ljusa bilden och extraherade sedan fram ett  färgtema med hjälp av <a href="https://color.adobe.com/sv/create/image">Adobe Color</a>.</p><img src="${imagesDesign[1].src}" width="${imagesDesign[1].width}" height="${imagesDesign[1].height}" alt="${imagesDesign[1].alt}" />`} image={imagesDesign[0]} />
            <ImageAndText imageToLeft html={`<h3 class="h2_size">Kontraster</h3>
            <p>För att uppfylla WCAG:s direktiv om tillgänglighet på webben, skall färger minst ha en kontrastratio på 3:1, men den generella rekommendationen är minst 4.5:1.</p><p>Därför kontrollerade jag att huvudfärgerna uppfyllde detta, vilket de gör med råge.</p>`} image={imagesDesign[2]} />
          </div>
          {/* <div className={styles['ConstructionPage__Grid']}> */}
          <div className={styles['ConstructionPage__CarouselWrapper']}>

            <h3 className={styles['ConstructionPage__CarouselTitle']}>Mer om stylingen</h3>
            <Carousel dark carouselData={design.carouselData} />
          </div>
          {/* </div> */}
        </div>

      </div>
      <div className={styles['ConstructionPage__Block'] + " " + styles['ConstructionPage__Block--White'] + " " + styles['ConstructionPage__Block--Accessibility']}>


        <div className={styles['ConstructionPage__DesignWrapper']}>
          <EntryCentered text={`Tillgänglighetsanpassning är ett omfattande arbete och jag har haft det i åtanke när jag byggt sajten. Med det sagt så finns det ännu en del anpassningar att göra, nedan är ett axplock av det jag har gjort.`} title={"Tillgänglighet"} />


          <div className={styles['ConstructionPage__Paragraph']}>
            {/* <h2>Tillgänglighet</h2>
            <p>Tillgänglighetsanpassning är ett omfattande arbete och jag har haft det i åtanke när jag byggt sajten. Med det sagt så finns det ännu en del anpassningar att göra, nedan är ett axplock av det jag har gjort.</p> */}

            <ImageAndText light html={`<h3 class="h2_size">Semantik</h3>
            <p>Alla HTML-element (förutom &lt;div&gt; och &lt;span&gt;) har en semantisk betydelse, vilket innebär att de berättar vad för betydelse i sammanhanget dess innehåll har. Det är viktigt att skriva semantisk korrekt HTML, delvis för personer som förlitar sig på skärmläsare, men också för SEO:n då sökmotorers indexering utgår ifrån den semantiska uppmärkningen.</p><p>Jag har sett till att alla sidor har en &lt;header&gt;, &lt;main&gt; och &lt;footer&gt; eftersom de elementen beskriver basstrukturen på sidan.</p>`}
              image={imagesAccessibility[0]}
            />
            <CardCode noBorder reverse code={accessibility.code.headings} html={`<h3 class="h2_size">Rubriknivåer</h3>
            <p>Varje sida har ett h1-element (högsta rubriknivån) sedan ligger följande rubriker i hierarkisk ordning, som baseras på om rubriken är en underrubrik till ett annat stycke eller bör vara en ny rubrik. Man hoppar aldrig över en nivå, d.v.s. går från h1 till h3. Bilden illustrerar hur rubrikhierarkin bör märkas upp för en sida.</p><p>I övrigt har allt innehåll en adekvat HTML-tagg, d.v.s. en &lt;p&gt;- innehåller löptext, &lt;img&gt; innehåller en bild o.s.v.</p>`} />
            <CardCode noBorder code={accessibility.code.burger} html={`<h3 class="h2_size">Markup för hamburgaren</h3>
            <p>Eftersom vissa användare förlitar sig helt på skärmläsare är det viktigt att knappar som styr flikar och dolda element har kopplad markup. 
            Ett sådant exempel är “hamburgaren” - knappen som öppnar menyn i mobilläge.
            I koden för knappen, framgår det i aria-controls vilket element som triggas. Knappen styr elementet med id=”menu”. Markupen anger också om knappen är aktiverad eller ej via aria-expanded, som sätts huruvida statevariabeln openNav är true eller false. Elementet med id=”menu” är också gömd för skärmläsaren, så länge värdet aria-hidden är true. Elementet bör vara gömt eftersom användaren inte skall höra/få tillgång till menyalternativen när menyn inte är öppnad.</p>`} />
            <ImageAndText light imageToLeft html={`<h3 class="h2_size">Sr-only</h3>
            <p>En annan viktig detalj är klassen “sr-only”, vars CSS visuellt döljer innehållet, men skärmläsaren kommer fortfarande läsa upp det. Eftersom hamburgerknappen inte anger vad som sker när man klickar på den, måste dess roll förtydligas med en sr-only-text - “Öppna meny”/”Stäng meny”.</p><p>En ikon ger bara en mening för den som kan se den, därför måste ikonens betydelse alltid finnas med i text, för att vara tillgänglig för alla.</p>`}
              image={imagesAccessibility[1]}
            />
            {/* <CardCode noBorder reverse code={accessibility.code.burger} html={`<h3>SR-only</h3>
            <p>En annan viktig detalj är klassen “sr-only”, vars CSS gömmer dess innehåll från skärmen, men skärmläsaren kommer fortfarande läsa upp innehållet. Eftersom hamburgerknappen inte anger vad som sker när man klickar på den, måste dess roll förtydligas med en sr-only-text - “Öppna meny”/”Stäng meny”. 
            För personer utan funktionsnedsättning är det tydligt vad den fyrkantiga rutan med tre streck har för funktion, då man ser den i sin kontext. En blind person får dock bara veta att det är en knapp, men inte vad den gör. Därför är sr-only-elementen viktiga och de finns ofta med där jag använder mig av ikoner. En ikon ger bara en mening för den som kan se den, därför måste ikonens betydelse alltid finnas med i text, för att vara tillgänglig för alla.</p>`} /> */}
            {/* <ImageAndText light imageToLeft html={`<h3>Rubriknivåer</h3>
            <p>Varje sida har ett h1-element (högsta rubriknivån) sedan ligger följande rubriker i hierarkisk ordning, som baseras på om rubriken är en underrubrik till ett annat stycke eller bör vara en ny rubrik. Man hoppar aldrig över en nivå, d.v.s. går från h1 till h3. Bilden illustrerar hur rubrikhierarkin bör märkas upp för en sida.</p><p>I övrigt har allt innehåll en adekvat HTML-tagg, d.v.s. en &lt;p&gt;- innehåller löptext, &lt;img&gt; innehåller en bild o.s.v.</p>`} image={imagesDesign[2]} /> */}
          </div>
          {/* <div className={styles['ConstructionPage__Grid']}> */}
          {/* <div className={styles['ConstructionPage__CarouselWrapper']}>

            <h3 className={styles['ConstructionPage__CarouselTitle']}>Mer om stylingen</h3>
            <Carousel carouselData={design.carouselData} />
          </div> */}
          {/* </div> */}
        </div>

      </div>
      <div className={styles['ConstructionPage__Block'] + " " + styles['ConstructionPage__Block--Optimization']}>
        <div className={styles['ConstructionPage__DesignWrapper']}>
          <EntryCentered text={`<p>Core Web Vitals är ett kvalitetsinitiativ från Google som mäter hur väl en sajt presterar utifrån olika parametrar.</p><p>Fr.o.m. mitten av juni 2021 kommer CWV-värdet vägas in i sajtens SEO-ranking.</p><p>Därför är det extra viktigt att sajten har bra prestanda.</p>`} title={"Optimering"} />
          {/* <div className={styles['ConstructionPage__Grid']}> */}
          <CardArticle>
            {/* <CardCode code={performance.code.image} html={performance.text.html1} /> */}
            <ContentCard image={performance.images.lighthouse} html={performance.text.html1} />
            {true && (
              <CardCode reverse code={performance.code.image} html={performance.text.imageHtml} />
            )}
            {/* {true && (
              <CardCode code={performance.code.image} html={performance.dummyText} reverse reverseWrap />
            )} */}
            {true && (
              <ContentCard video={performance.video.desktopWithoutPerfEnh} html={performance.text.perfHtml1} />
            )}
            {true && (
              <ContentCard video={performance.video.desktopPerfEnh} html={performance.text.perfHtml2} reverse />
            )}
            {true && (
              <ContentCard image={performance.images.bundleBefore} html={performance.text.perfHtml3} />

            )}
            <ContentCard reverse image={performance.images.bundleAfter} html={performance.text.perfHtml4} />
            <ContentCard image={performance.images.webpackBefore} html={performance.text.perfHtml5} />
            <ContentCard reverse image={performance.images.webpackAfter} html={performance.text.perfHtml6} />

          </CardArticle>
          {/* </div> */}
        </div>
      </div>
      <div className={styles['ConstructionPage__Grid']}>
        <EntryCentered text={"<p>sadasas</p>"} title={"...och om planeterna står rätt och vädret tillåter..."} />
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
