export default {
    accessibility: {
        code: {
            headings: {
                height: 50,
                text: `<h1>Huvudrubrik</h1>

    <h2>Underrubrik</h2>

        <h3>Underrubrik till h2</h3>

            <h4>Underrubrik till h3</h4>

                <h5>Underrubrik till h4</h5>

    <h2>Underrubrik</h2>

        <h3>Underrubrik till h2</h3>
        
            <h4>Underrubrik till h3</h4>
    
    <h2>Underrubrik</h2>

        <h3>Underrubrik till h2</h3>
`,
            },
            burger: {
                height: 60,
                text: `<button 
    aria-expanded={openNav ? 'true' : 'false'}
    aria-controls="menu"
    onClick={handleMobileNav}
        className={classNames(
            styles['MobileNav__Button'],
            { [styles['MobileNav__Button--Active']]: openNav },
        )}>
        <span className="sr-only">
            {openNav
                ? 'Stäng meny'
                : 'Öppna meny'
            }
        </span>
        <span
            className={classNames(
                styles['MobileNav__Line'])}>...</span>
</button>
<div
    id="menu"
    aria-hidden={openNav ? 'false' : 'true'}
    className={classNames(styles['MobileNav__Menu'],
        {
            [styles['MobileNav__Menu--Active']]: openNav,
            [styles['MobileNav__Menu--Hide']]: !showOverlay,
        })}>
    <nav className={styles['MobileNav__Nav']} aria-label="huvudnavigation-mobil">
        ...
    </nav>
</div>
`,
            },
        },
    },
    design: {
        carouselData: [
            {
                id: 1,
                title: 'Figma',
                text: 'Eftersom sidan är tänkt att demonstrera mina kunskaper inom webb, var det viktigt att ha med vanligt förekommande moduler, såsom bilder, knappar, text och grafiska element. Jag har arbetat i designprogrammet Figma (fantastiskt program) med att skissa upp design, layout och grafik.',
                image: {
                    src: '/images/temp/figma_370-460_small-min.JPG',
                    alt: 'Fyra grafiska SVG-element jag använt på sajten.',
                    width: 370,
                    height: 200,
                    mediaQueries: [
                        {
                            minWidth: 1280,
                            src: '/images/temp/figma_900-1280_large-min.JPG',
                        },
                        {
                            minWidth: 1024,
                            src: '/images/temp/figma_680-768_mediumSmall-min.JPG',
                        },
                        {
                            minWidth: 768,
                            src: '/images/temp/figma_435-1024_medium-min.JPG',
                        },
                        {
                            minWidth: 460,
                            src: '/images/temp/figma_680-768_mediumSmall-min.JPG',
                        },
                    ],
                },
            },
            {
                id: 2,
                title: 'SVG:er',
                text: 'SVG - Scalable vector graphic - är ett uitmärkt grafikformat att använda för webb. Grafiken kan ta upp mycket yta och vara responsiv, samtidigt som filerna är minimala vilket är bra för snabba sidladdningar. Jag gjorde ett flertal SVG-element som jag senare fäste i pseudoelement med CSS:en som, för en nybörjare, är ganska svårt, speciellt med att få till en bra responsivitet.',
                image: {
                    src: '/images/temp/svgs_360_270x340-min.webp',
                    alt: 'Fyra grafiska SVG-element jag använt på sajten.',
                    width: 669,
                    height: 835,
                    mediaQueries: [
                        {
                            minWidth: 460,
                            src: '/images/temp/svgs_768_630x790-min.webp',
                        },
                ],
                },
            },
            {
                id: 3,
                title: 'Typografi',
                text: 'Jag fastnade för typsnittet “Quicksand”, som är ett sans-serif-typsnitt. Det har en hög “x-height” vilket gör den lättläst. Rubriknivåerna satte jag efter typskalorna: Perfect fifth för desktop-, och Perfect fourth för mobilläge.',
                image: {
                    src: '/images/temp/TypeScale_360_435x-min.webp',
                    alt: 'Typskala: "Perfect Fourth" för typsnittet Quicksand',
                    width: 1274,
                    height: 598,
                    mediaQueries: [
                        {
                            minWidth: 460,
                            src: '/images/temp/TypeScale_460_740x-min.webp',
                        },
                ],
                },
            },
            {
                id: 4,
                title: 'Bildkomprimering',
                text: 'Att ha lagom stora bilder är viktigt för att få en snabb sajt. Oftast är det just bilderna som tar upp merdelen av en hemsidas totala datamängd. Därav är alla bilder i jpeg-format, som ger relativt små filer. WebP är ett modernt alternativ, men browserstödet är inte lika brett som för jpeg, så jag har skippat WebP. Jag har komprimerat bilderna efter dess container-storlekar på hemsidan, både för hand, i programmet Gimp, men också automatiskt på compressjpeg.com. Bildernas filstorlekar har generellt reducerats med ca. 90%.',
                image: {
                    src: '/images/temp/compressjpg_411x400-min.jpg',
                    alt: 'Skärmdump från compressjpg där bilden har reducerats i storlek med 89%.',
                    width: 627,
                    height: 400,
                    mediaQueries: [
                        {
                            minWidth: 768,
                            src: '/images/temp/compressjpg_618x500-min.jpg',
                        },
                        {
                            minWidth: 460,
                            src: '/images/temp/compressjpg_720x400-min.jpg',
                        },
                    ],
                },
            },
        ],
    },
    performance: {
        images: {
            bundleBefore: {
                src: '/images/temp/bundleBeforePerfEnh_411x400-min.jpg',
                alt: 'Javascript-bundlarna innan optimering. Sajtbyggets totala JS är 145kb.',
                width: 760,
                height: 400,
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/bundleBeforePerfEnh_618x500-min.jpg',
                    },
                    {
                        minWidth: 460,
                        src: '/images/temp/bundleBeforePerfEnh_720x400-min.jpg',
                    },
                ],
                title: 'Före',
                x: 0,
                y: 0,
            },
            bundleAfter: {
                src: '/images/temp/bundleAfterPerfEnh_411x400-min.jpg',
                alt: 'Javascript-bundlarna efter optimering. Sajtbyggets totala JS är 78.1kb',
                width: 810,
                height: 400,
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/bundleAfterPerfEnh_618x500-min.jpg',
                    },
                    {
                        minWidth: 460,
                        src: '/images/temp/bundleAfterPerfEnh_720x400-min.jpg',
                    },
                ],
                x: 0,
                y: 0,
                title: 'Efter',
            },
            webpackBefore: {
                src: '/images/temp/webpackBefore_411x400-min.jpg',
                alt: 'Webpack Bundle Analyzers visuella representation av sidans js innan optimering. Ett fåtal stora paket står för majoriteten av den totala datamängden.',
                width: 795,
                height: 400,
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/webpackBefore_618x500-min.jpg',
                    },
                    {
                        minWidth: 460,
                        src: '/images/temp/webpackBefore_720x400-min.jpg',
                    },
                ],
                x: 0,
                y: 0,
                title: 'Före',
            },
            webpackAfter: {
                src: '/images/temp/webpackAfter_411x400-min.jpg',
                alt: 'Webpack Bundle Analyzers visuella representation av sidans js efter optimering. Stora paket som tidigare låg i huvudbundlen är nu isolerade.',
                width: 792,
                height: 400,
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/webpackAfter_618x500-min.jpg',
                    },
                    {
                        minWidth: 460,
                        src: '/images/temp/webpackAfter_720x400-min.jpg',
                    },
                ],
                x: 0,
                y: 0,
                title: 'Efter',
            },
            lighthouse: {
                src: '/images/temp/lighthouseAnkraMobile_411x400-min.jpg',
                alt: 'Ett ganska dåligt Lighthouseresultat.',
                width: 411,
                height: 450,
                y: '0',
                x: '50',
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/lighthouseAnkraMobile_618x500-min.jpg',
                    },
                    {
                        minWidth: 460,
                        src: '/images/temp/lighthouseAnkraMobile_720x400-min.jpg',
                    },
                ],
            },
        },
        video: {
            desktopPerfEnh: {
                src: 'images/video/desktopPerfEnh2.mp4',
                width: 728,
                height: 680,
                title: 'Efter',
            },
            desktopWithoutPerfEnh: {
                src: 'images/video/desktopWithoutPerfEnh.mp4',
                width: 744,
                height: 644,
                title: 'Före',
            },
        },
        text: {
            html1: `<h3 class="h2_size">Hur jag arbetat med optimering</h3><p>Jag har arbetat med sajtens prestanda genomgående under projektet och har kontinuerligt gjort mätningar i Lighthouse för att se hur koden påverkar resultatvärdena.</p><p>Lighthoue är ett inbyggt verktyg i Chrome som ger poäng i hur bra CWV-värdet är. Dock är mätresultatet bara giltigt när granskningen gjorts i incognito-läge då browsertilläggen inte påverkar.</p>`,
            imageHtml: `<h3 class="h2_size">Bildkomponenten</h3><p>Förutom att jag komprimerat bilderna, så har jag även utformat Image, till att ta en array med source-värden för att kunna byta bild beroende på användarenhetens skärmstorlek. Dessutom skickas bildens orginalmått in med width och height, vilket gör att browsern kalkylerar ut bildstorleken som förhindrar CLS (cumulative layout shift - att sidan hoppar under laddning) vilket är ett av CWV-värdena. Dessutom laddas bilden “lazy”, d.v.s. när användaren scrollar till bilden. Alla dessa optimeringar påverkar Lighthouseresultatet.</p>`,
            perfHtml1:
                '<h3 class="h2_size">Onödiga uppdateringar</h3><p>I React-DevTool ser man hur ofta komponenten uppdateras genom “blinkningar”. Komponenten "Tablist" och alla dess barn uppdateras varje gång man klickar på någon Tab-knapp vilket är onödigt.</p><p>Anledningen till detta är att varje klick orsakar en state-ändring högt upp i komponentträdet.</p>',
            perfHtml2:
                '<p>Det här kan man lösa genom att använda React.memo, som gör en shallow copy på propsen och uppdaterar därmed bara när props-värdena inte är dem samma som de förra. Dessutom nyttjar jag hookarna useCallback och useMemo som cachar funktioner och funktionsreturer.</p><p>Efter optimeringen har de onödiga blinkningarna försvunnit, och renderingstiden i profiler (React DevTools) har gått ner från ett genomsnitt på 2,03 ms till 1,28 ms, vilket är 37% snabbare.</p><p>Just denna optimering har dock ingen inverkan på sajtens Lighthouseresultat.</p>',
            perfHtml3:
                '<h3 class="h2_size">Dynamiska importer</h3><p>Dynamic import är ett intressant koncept som finns inbyggt i Next.js och liknar React.lazy. Funktionaliteten möjliggör "chunkning" av javascriptet och inladdning av komponenten <b>om och när</b> sajten behöver den.</p><p>Jag har laborerat en hel del med dynamiska importer och märkt en skillnad på hur mycket js som sidan “sajtbygget” kräver.</p>',
            perfHtml4:
                '<p>Det är primärt komponenter som har tyngre tredjepartsbibliotek som ger en positiv effekt av att importeras dynamiskt. Sajtbyggets js-laddning har minskat med 46,2% efter optimeringen.</p><p>Däremot ger inte flera mindre chunkar alltid bäst effekt, eftersom kompileringen och exekveringen kan ta längre tid om en chunk använder sig av en annan chunk.</p>',
            perfHtml5:
                '<h3 class="h2_size">Webpack bundle analyzer</h3><p>För att få inblick i vad chunkarna innehåller används analysverktyget Webpack bundle analyzer.</p><p>Det ger en visuell representation över innehållet och dess storlek i förhållande till andra paket, bibliotek, komponenter och annat.</p>',
            perfHtml6:
                '<p>Tack vare WBA förstod jag att det inte är smart att bygga in stöd för komponenter med tunga dependancies i wrapperkomponenter, även när de inte används och importeras dynamiskt.</p><p>Efter en refaktorering av dessa komponenter ser man att "react-syntax-highlighter" (gulgrön) och "Carousel"-komponenten (grön) har egna bundles. Detta har lett till snabbare laddningstider då dessa paket orsakade onödigt stora bundles.</p>',
        },

        code: {
            image: {
                height: 60,
                text: `import styles from './Image.module.scss';
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
    x = "50",
    y = "50",

}) => {
    const classes = !modifier.length
        ? styles["Image"]
        : classNames(modifier.map(x => (
            [x]
        )), styles["Image"]);

    const focal = { objectPosition: \`\${x}% \${y}%\` };
    let imageStyles = {};

    if (round) {
        imageStyles = { ...focal, borderRadius: "50%" }
    }

    return (
        <picture className={classes}>
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
                style={!!Object.keys(imageStyles).length ? imageStyles : focal}
                className={styles['Image__Image']}
            />
        </picture >
    );
};

export default Image;
`,
            },
        },
    },
};
