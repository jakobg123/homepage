import styles from './StartContainer.module.scss';
import classNames from 'classnames';

import { useState } from "react";

import Card from '../../components/Card';
import TabList from '../../components/TabList';
import Button from '../../components/Button';
import Knowledge from "../../components/Knowledge";

import { useInView } from 'react-intersection-observer';

const StartContainer = ({ data, knowledge }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const { heading, greeting, preamble, entryText, ctaText, cta, technologies, internship } = data;

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
            <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: entryText }}>
            </div>
            <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: ctaText }}>
            </div>

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
        className={classNames(
          styles['StartContainer__Block'],
          styles['StartContainer__Block--White']
        )}>
        <div className={styles['StartContainer__CtaWrapper']}>
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
          <h2 id="technology" className={styles['StartContainer__Subtitle']}>
            {technologies.heading}
          </h2>
          <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: technologies.html }}>
          </div>
        </div>

        <div className={styles["StartContainer__KnowledgeWrapper"]}>
          <Knowledge knowledge={knowledge} inViewRef={ref} />
        </div>

      </div>

      <div
        className={classNames(
          styles['StartContainer__Row'],
          styles['StartContainer__Row--Dark']
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

        <div id="internship" className={styles['StartContainer__Row']}>
          <h2 className={styles['StartContainer__Subtitle']}>
            {internship.heading}
          </h2>
          <div className={styles['StartContainer__Paragraph']} dangerouslySetInnerHTML={{ __html: internship.html }}>
          </div>

        </div>

      </div>
      {/* <Card /> */}
    </div>
  );
};

export default StartContainer;
