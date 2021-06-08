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
                height: 70,
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
                title: 'SVG:er',
                text: 'SVG - Scalable vector graphic - är ett uitmärkt grafikformat att använda för webb. Grafiken kan ta upp mycket yta och vara responsiv, samtidigt som filerna är minimala vilket är bra för snabba sidladdningar. Jag gjorde ett flertal SVG-element som jag senare fäste i pseudoelement med CSS:en som, för en nybörjare, är ganska svårt, speciellt med att få till en bra responsivitet.',
                image: {
                    src: '/images/temp/svgs.JPG',
                    alt: 'Fyra grafiska SVG-element jag använt på sajten.',
                    width: 669,
                    height: 835,
                    mediaQueries: [],
                },
            },
            {
                id: 2,
                title: 'Typografi',
                text: 'Jag fastnade för typsnittet “Quicksand”, som är ett sans-serif-typsnitt. Det har en hög “x-height” vilket gör den lättläst. Rubriknivåerna satte jag efter typskalorna: Perfect fifth för desktop-, och Perfect fourth för mobilläge.',
                image: {
                    src: '/images/temp/TypeScale.JPG',
                    alt: 'Typskala: "Perfect Fourth" för typsnittet Quicksand',
                    width: 1274,
                    height: 598,
                    mediaQueries: [],
                },
            },
            {
                id: 3,
                title: 'Bildkomprimering',
                text: 'Att ha lagom stora bilder är viktigt för att få en snabb sajt. Oftast är det just bilderna som tar upp merdelen av en hemsidas totala datamängd. Därav är alla bilder i jpeg-format, som ger relativt små filer. WebP är ett modernt alternativ, men browserstödet är inte lika brett som för jpeg, så jag har skippat WebP. Jag har komprimerat bilderna efter dess container-storlekar på hemsidan, både för hand, i programmet Gimp, men också automatiskt på compressjpeg.com. Bildernas filstorlekar har generellt reducerats med ca. 90%.',
                image: {
                    src: '/images/temp/compressjpg.JPG',
                    alt: 'Skärmdump från compressjpg där bilden har reducerats med 89%.',
                    width: 1298,
                    height: 828,
                    mediaQueries: [],
                },
            },
        ],
    },
    performance: {
        images: {
            kanban: {
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
            },
        },
        video: {
            desktopPerfEnh: {
                src: 'images/video/desktopPerfEnh.mp4',
                width: 704,
                height: 644,
                title: 'Efter',
            },
            desktopWithoutPerfEnh: {
                src: 'images/video/desktopWithoutPerfEnh.mp4',
                width: 744,
                height: 644,
                title: 'Före',
            },
        },
        dummyText:
            '<h2>Om webbsidan</h2><p>Webbsidan har jag byggt för att showcase:a lite av det jag har lärt mig under den 2-åriga YH-utbildningen, som bl.a. består av en lärorik 6 månaders LIA(praktik) på <a href="https://www.frojd.se" >digitalbyrån Fröjd</a>.</p><p>Sajten är fortfarande under uppbyggnad, men kommer snart ha mer innehåll så att du kan läsa om <em>hur</em> jag byggt den.</p><p>Jag kan redan nu avslöja att den är skriven i Typescript i Next.js och jag arbetar även med tillgänglighetsanpassning och prestandaoptimering. Jag har också ansträngt mig för att få en bra Lighthouse-audit av sajten.</p>',
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
`,
            },
        },
    },
};
