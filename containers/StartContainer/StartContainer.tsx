import React from "react";
import styles from './StartContainer.module.scss';
import classNames from 'classnames';

import { useState, useEffect } from 'react';

import Button from '../../components/Button';
import Internship from "../../components/Internship";

import Image from '../../components/Image';

import Knowledge from "../../components/Knowledge";

import { IImageProps, IMediaQueries } from '../../types/types';
import { IKnowledgeData, IStartContainerData } from "../../types/typesData";
import { useInView } from 'react-intersection-observer';

import TargetLinks from "../../utils/TargetLinks.context";

interface IStartContainerProps {
    knowledge: IKnowledgeData;
    data: IStartContainerData;
}

export const Theme = React.createContext<boolean>(false);

const StartContainer: React.FC<IStartContainerProps> = ({ data, knowledge }) => {
    const [ref, inView] = useInView({
        threshold: 0,
    });

    const [lightTheme, setLightTheme] = useState(false);

    useEffect(() => {
        inView ? setLightTheme(false) : setLightTheme(true);
        return (() => setLightTheme(false));
    }, [inView]);

    const {
        heading,
        greeting,
        preamble,
        entryText,
        ctaText,
        cta,
        technologies,
        internship,
    } = data;

    const presImage: IImageProps = {
        src: '/images/temp/xsmall120x120-min.jpg',
        alt: 'Jakob Gauffin, d.v.s han som gjort sajten.',
        width: 120,
        height: 120,
    };

    const mediaQueries: IMediaQueries[] = [
        {
            minWidth: 1280,
            src: '/images/temp/large350x350.jpg',
        },
        {
            minWidth: 640,
            src: '/images/temp/medium250x250.jpg',
        },
    ];

    return (
        <div className={styles['StartContainer']}>
            <div className={styles['StartContainer__Grid']}>
                {/* <button style={{ position: "relative", zIndex: 100000, border: "1px solid red" }} onClick={() => forceImportModules()}>ÄNDRA</button> */}
                <h1 className={styles['StartContainer__Title']}>{heading}</h1>

                <div className={styles['StartContainer__EntryWrapper']}>
                    <em className={styles['StartContainer__Em']}>{greeting}</em>
                    <div
                        className={styles['StartContainer__Preamble']}
                        dangerouslySetInnerHTML={{ __html: preamble }}></div>
                    <div className={styles['StartContainer__ParagraphPres']}>
                        <div className={styles['StartContainer__PresImageWrapper']}>
                            <Image {...presImage} mediaQueries={mediaQueries} round />
                        </div>
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

            <div
                ref={ref}
                className={classNames(
                    styles['StartContainer__Block'],
                    styles['StartContainer__Block--White']
                )}>
                <div className={styles['StartContainer__CtaWrapper']}>
                    <div
                        className={styles['StartContainer__Paragraph']}
                        dangerouslySetInnerHTML={{ __html: ctaText }}></div>
                    <div className={styles['StartContainer__ButtonWrapper']}>
                        <Button label={cta.label} icon={cta.icon} href={cta.href} />
                    </div>
                </div>
                <div
                    className={styles['StartContainer__TextWrapper']}>
                    <h2 id="technology" className={styles['StartContainer__Subtitle']}>
                        {technologies.heading}
                    </h2>
                    <div
                        className={styles['StartContainer__Paragraph']}
                        dangerouslySetInnerHTML={{ __html: technologies.html }}></div>
                    <div
                        className={styles['StartContainer__Paragraph']}
                        dangerouslySetInnerHTML={{ __html: technologies.html2 }}></div>
                </div>
                <div
                    className={classNames(styles['StartContainer__Background'], {
                        [styles['StartContainer__Background--White']]: !inView,
                    })}>

                    <div className={styles['StartContainer__KnowledgeWrapper']}>
                        <Knowledge knowledge={knowledge} />
                    </div>

                </div>
            </div>
            <div
                className={classNames(
                    styles['StartContainer__Block'],
                    styles['StartContainer__Block--Dark']
                )}>
                <div className={styles['StartContainer__InternshipWrapper']}>
                    <Theme.Provider value={lightTheme}>
                        <Internship
                            data={internship}
                        />
                    </Theme.Provider>
                </div>
            </div>
        </div >
    );
};

export default StartContainer;
