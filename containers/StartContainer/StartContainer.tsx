import styles from './StartContainer.module.scss';
import classNames from 'classnames';

import { useState } from "react";

import Card from '../../components/Card';
import TabList from '../../components/TabList';
import Button from '../../components/Button';
import Knowledge from "../../components/Knowledge";

import { useInView } from 'react-intersection-observer';

const StartContainer = ({ knowledge }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  return (
    <div className={styles['StartContainer']}>
      <div className={styles['StartContainer__Grid']}>

        <h1 className={styles['StartContainer__Title']}>
          Frontend-utecklare som <em className={styles['StartContainer__Em']}>vill bygga din webb.</em>
        </h1>

        <div
          className={classNames(
            // styles['StartContainer__Grid'],
            styles['StartContainer__EntryWrapper']
          )}>
          <strong className={styles['StartContainer__Strong']}>
            Vad kul att du är här!
          </strong>
          <div className={styles['StartContainer__Row']}>
            <h2 className={styles['StartContainer__SubTitle']}>
              Till sommar blir jag en färdigutbildad frontendutvecklare, och letar
              nu jobb på en kreativ och trevlig webbyrå.
            </h2>
            <p className={styles['StartContainer__Paragraph']}>
              Här på min hemsida showcase:ar jag lite av det jag har lärt mig i
              programmering och webbutveckling efter 2 års YH-utbildning.
            </p>
            <p className={styles['StartContainer__Paragraph']}>
              Den här sidan är bl.a. gjord med Next.js och Typescript. Jag har
              också jobbat med prestandaoptimering och tillgänglighet.
            </p>
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
          styles['StartContainer__KnowledgeSection'],
          styles['StartContainer__KnowledgeSection--Dark']
        )}>
        <div
          className={classNames(
            styles['StartContainer__TextWrapper'],
            styles['StartContainer__TextWrapper--Light']
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
      </div>

      <div
        className={classNames(
          styles['StartContainer__Line'],
          styles['StartContainer__Line--Dark']
        )}></div>
      <article
        className={classNames(
          styles['StartContainer__Row'],
          styles['StartContainer__Row--Dark']
        )}>
        <div className={styles['StartContainer__Grid']}>
          <div
            className={classNames(
              styles['StartContainer__TextWrapper'],
              styles['StartContainer__TextWrapper--Dark']
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
        </div>

        <div
          className={classNames(
            styles['StartContainer__Padding'],
            { [styles['StartContainer__Padding--White']]: !inView },
            {
              [styles['StartContainer__Padding--Black']]: inView,
            }
          )}>
          <Knowledge knowledge={knowledge} inViewRef={ref} />
        </div>

        <section className={styles['StartContainer__Row']}>
          <h2 className={styles['StartContainer__SubTitle']}>
            Om praktik på Fröjd
          </h2>
          <p className={styles['StartContainer__Paragraph']}>
            Här är det text om Fröjd. Lite om det jag har gjort och vilka typ av projekt och sammansättningar jag arbetat i.
          </p>
          <p className={styles['StartContainer__Paragraph']}>
            Nån kommentar från Micke, kanske ett blockquote.
          </p>

        </section>

      </article>
      {/* <Card /> */}
    </div>
  );
};

export default StartContainer;
