export default {
    heading: 'Frontend-utvecklare som vill bygga webb.',
    greeting: 'Vad kul att du har hittat hit!',
    preamble:
        // '<p>Nu till sommaren 2021 tar jag examen i Frontendutveckling på IT-Högskolan i Stockholm.</p><p><strong>Jag söker nu ett jobb</strong> där jag får tillämpa mina kunskaper i webbutveckling, samtidigt som jag fortsätter växa och får arbetslivserfarenhet inom IT-branschen.</p>',
        `<p>Den här sajten är ett sidoprojekt som jag påbörjade i Februari 2021. Idéen var att ha ett större projekt som lärde mig mer webbutveckling och samtidigt öka min chans att få jobb efter <a href="https://www.iths.se/courses/frontend/">frontendutbildningen på IT-Högskolan</a>.</p><p>Som tur var fungerade det! Jag har både lärt mig mer och fått ett jobb. 🤓🔥🚀</p>`,
    entryText:
        '<h2>Det som finns här på sajten</h2><p>Här får man se lite av det jag har lärt mig under den 2-åriga YH-utbildningen, som bl.a. bestått av en mycket lärorik 6 månaders LIA(praktik) på <a href="https://www.frojd.se" >digitalbyrån Fröjd</a>.</p><p>På sajten lägger jag löpande upp moduler och funktionalitet som jag tycker är kul att koda ihop, och förhoppningsvis kommer sajten aldrig bli helt klar.</p><p>Ta gärna en titt på "Sajtbygget", där du får en översiktsbild av hur jag gått tillväga när jag byggt hemsidan.</p>',
    ctaText:
        '<h2>Vart finns koden då?!</h2><p>Koden till webbsidan finns här på <a href="https://github.com/jakobg123/homepage">sajtens git-repo</a>, där jag också har mer aktuella kodprojekt.</p><p>På <a href="https://github.com/iths-jakob-gauffin">mitt skol-repo</a> finns annars en mängd gamla projekt i olika språk och av "varierande kvalitet".</p>',
    cta: {
        label: 'Sajtens git-repo',
        icon: 'arrowNext',
        href: 'https://github.com/jakobg123/homepage',
    },
    cta2: {
        label: 'Mitt skol-repo',
        icon: 'arrowNext',
        href: 'https://github.com/iths-jakob-gauffin',
        type: 'Secondary',
    },
    technologies: {
        heading: 'Teknologier jag arbetat med',
        html: '<p>Under utbildningen har jag arbetat med många olika verktyg, vars primära användningsområden har varit Frontend. Huvudsakligen kan jag HTML, CSS, JS och React. <p>Jag har också jobbat en del med Backend och kan även Wordpress, PHP och grundläggande Node.js.</p><p> Givetvis är jag ännu inte fullärd i alla språk och tekniker. Men jag gillar verkligen programmering och att lära mig nya saker, så jag ser det enbart som en tidsfråga innan jag behärskar ett nytt ramverk eller språk för den delen.</p>',
        html2: '<h3>Betygsättning av mina kunskaper</h3><p>Nedan har jag listat de större teknologier jag jobbat med.</p><p>Min kunskapsgrad i ämnet har jag sedan partiskt rankat från <span>1 till 10</span>, där 10 är bäst.</p>',
    },
    internship: {
        html: '<h2>Praktik på Fröjd</h2><p>Jag har haft turen och nöjet att få genomföra hela min 6 månaders LIA-period på <a href="https://www.frojd.se">Fröjd</a>.</p><p>Det är en eftertrakad digitalbyrå med stor kunskap inom hela ekosystemet kring webb.</p><p>De är experter på koncept, UX-design, teknisk utveckling och underhåll av webbsajter.</p>',
        html2: '<p>På Fröjd har jag fått en god uppfattning om hur det är att arbeta professionellt som webbutvecklare. </p>',
        html3: '<p>Från att ha daglig standup, till att jobba agilt tillsammans med projektledare, designers och andra utvecklare.</p><p>Fröjds val av CMS är Wagtail, som har varit roligt att sätta sig in i, och på köpet har jag lärt mig en del Python och Django.</p>',
        html4: '<p>Övergripande har jag arbetat i Next.js och Wordpress. Mycket tonvikt i Next har legat på komponenters utformning (flexibilitet och styling) gentemot Wagtail. Samt att eftersträva en lättläst och underhållningsbar kod.</p><p> Semantik och tillgänglighet har varit ledord och jag har även jobbat en del med prestandaoptimering.</p><p>På sistone har jag gått vidare från Next-, till olika Wordpressprojekt i Bedrock och Sage vilket är jättekul.</p><p>Det är verkligen en inspirerande och lärorik tid!</p>',
        images: [
            {
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
            {
                src: '/images/temp/code_small-min.jpg',
                alt: 'Laptop med programmeringskod.',
                caption: 'Foto: James Harrison, unsplash.com',
                width: 1920,
                height: 1080,
                mediaQueries: [
                    {
                        minWidth: 768,
                        src: '/images/temp/code_large-min.jpg',
                    },
                    {
                        minWidth: 580,
                        src: '/images/temp/code_medium-min.jpg',
                    },
                ],
            },
        ],
    },
};
