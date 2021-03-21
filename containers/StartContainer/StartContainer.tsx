import styles from './StartContainer.module.scss';
import classNames from 'classnames';

import React, { useState, useEffect } from "react";

import Card from '../../components/Card';
import TabList from '../../components/TabList';
import Button from '../../components/Button';
import Internship from "../../components/Internship";
import Image from "../../components/Image";

import dynamic from "next/dynamic";
const Knowledge = dynamic(() => import("../../components/Knowledge"));
// const Knowledge = dynamic(() => import("../../components/Knowledge"));


import { useInView } from 'react-intersection-observer';

const StartContainer = ({ data, knowledge }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

  const [showKnowledge, setShowKnowledge] = useState(false)
  let x = 0;
  useEffect(() => {
    if (inView && x === 0) {
      setShowKnowledge(true)
      x++;
    }
    return
  }, [inView])

  const { heading, greeting, preamble, entryText, ctaText, cta, technologies, internship } = data;

  const presImage: IImageProps = {
    src: '/images/temp/small150x150.jpg',
    alt: 'Jakob Gauffin, d.v.s han som gjort sidan.',
    width: 150,
    height: 150,
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 1280,
      src: '/images/temp/large350x350.jpg',
    },
    {
      minWidth: 768,
      src: '/images/temp/medium250x250.jpg',
    },
  ];

  return (
    <div className={styles['StartContainer']}>
      <div className={styles['StartContainer__Grid']}>

        <h1 className={styles['StartContainer__Title']}>
          {heading}
        </h1>

        <div
          className={classNames(
            // styles['StartContainer__Grid'],
            styles['StartContainer__EntryWrapper']
          )}>
          <strong className={styles['StartContainer__Strong']}>
            {greeting}
          </strong>
          <div className={styles['StartContainer__Row']}>
            {/* <h2 className={styles['StartContainer__SubTitle']}>
              {preamble}
            </h2> */}
            <div className={styles['StartContainer__Preamble']} dangerouslySetInnerHTML={{ __html: preamble }}>
            </div>
            {/* <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: entryText }}> */}
            <div className={styles['StartContainer__ParagraphPres']} >
              <div className={styles['StartContainer__PresImageWrapper']}>
                <Image {...presImage} mediaQueries={mediaQueries} round />
                {/* <Image src={"/images/temp/small150x150.jpg"} width={"13rem"} height={"13rem"} alt={"Jakob Gauffin, han som gjort sidan."} round mediaQueries={[]} /> */}
              </div>
              {/* <img src="/images/temp/medium500x500.jpg" className={styles['StartContainer__PresImage']} /> */}
              <p>Sidan har jag byggt för att showcase:a lite av det jag har lärt mig under den 2-åriga YH-utbildningen, som bl.a. består av en lärorik <strong>6 månaders LIA (praktik)</strong> på <a href="https://www.frojd.se" >digitalbyrån Fröjd Interactive</a>.</p>
              <p>Sajten är fortfarande under uppbyggnad, men kommer snart ha mer innehåll så att du kan läsa om <em>hur</em> jag byggt den.</p>
              <p>Jag kan redan nu avslöja att den är gjord i Next.js och jag arbetar även med tillgänglighetsanpassning och prestandaoptimering.</p>
            </div>
            {/* </div> */}


            {/* <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: entryText }}>
            </div> */}
            {/* <p className={styles['StartContainer__Paragraph']}>
              Den här sidan är bl.a. gjord med Next.js och Typescript. Jag har
              också jobbat med prestandaoptimering och tillgänglighet.
            </p> */}
          </div>
        </div>
      </div>
      {/* <div className={styles['StartContainer__ButtonWave']}>
        <div className={styles['StartContainer__ButtonWrapper']}>
          <Button
            label={'Hur sidan är byggd'}
            href="/projects/"
            onClick={() => { }}
            icon={'arrowNext'}
          />
        </div>
      </div> */}

      <div
        ref={ref}
        className={classNames(
          styles['StartContainer__Block'],
          styles['StartContainer__Block--White']
        )}>
        <div className={styles['StartContainer__CtaWrapper']}>
          <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: ctaText }}>
          </div>
          <div className={styles['StartContainer__ButtonWrapper']}>
            <Button label={cta.label} icon={cta.icon} href={cta.href} />
          </div>
        </div>
        <div
          className={classNames(
            styles['StartContainer__TextWrapper'],
            styles['StartContainer__TextWrapper--White']
          )}>
          {/* <div className={styles['StartContainer__Preamble']} dangerouslySetInnerHTML={{ __html: technologies }}>
          </div> */}
          <h2 id="technology" className={styles['StartContainer__Subtitle']} >
            {technologies.heading}
          </h2>
          <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: technologies.html }}>
          </div>
        </div>
        <div
          className={classNames(
            styles['StartContainer__Background'],
            { [styles['StartContainer__Background--White']]: !inView },
          )}>
          {!!showKnowledge && (<div className={styles["StartContainer__KnowledgeWrapper"]}>
            <Knowledge knowledge={knowledge} />
          </div>)}
        </div>
        {/* <div
        className={classNames(
          styles['StartContainer__Background'],
          { [styles['StartContainer__Background--White']]: !inView },
          {
            [styles['StartContainer__Background--Black']]: inView,
          }
        )}>
        <div className={styles["StartContainer__KnowledgeWrapper"]}>
          <Knowledge knowledge={knowledge} inViewRef={ref} />
        </div>
      </div> */}

      </div>
      <div
        className={classNames(
          styles['StartContainer__Block'],
          styles['StartContainer__Block--Dark']
        )}>
        {/* <div className={styles['StartContainer__Grid']}>
          <div
            className={classNames(
              styles['StartContainer__TextWrapper'],
              styles['StartContainer__TextWrapper--White']
            )}>
            <h2 className={styles['StartContainer__SubTitle']}>
              Tekniker jag jobbat mest med hittills
            </h2>
            <p className={styles['StartContainer__Paragraph']}>
              <strong>Här är det mer text. </strong>
              Även här skriver jag mer text som är relevant till ämnet. Får ta
              en funderare när jag fyller sidan med content
            </p>
          </div>
        </div> */}

        {/* <div
          className={classNames(
            styles['StartContainer__Padding'],
            { [styles['StartContainer__Padding--White']]: !inView },
            {
              [styles['StartContainer__Padding--Black']]: inView,
            }
          )}>
          <Knowledge knowledge={knowledge} inViewRef={ref} />
        </div> */}
        {/* 
        {!!comp && <Example />}

        <button onClick={handleImport} >ankjdnmas</button> */}


        <div id="internship" className={styles['StartContainer__InternshipWrapper']}>
          <Internship data={internship} inView={inView && showKnowledge ? true : false} />
        </div>
      </div>
      {/* <Card /> */}
    </div >
  );
};



export default StartContainer;
