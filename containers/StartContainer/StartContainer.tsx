import React from 'react';
import styles from './StartContainer.module.scss';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
// import Tab from '../../components/Tab';
import TabList from '../../components/TabList';
import Button from '../../components/Button';
import classNames from 'classnames';

import { useInView } from 'react-intersection-observer';

import { allIcons } from '../../components/Icon/Icon';

import { Test } from '../../components/Test';

const StartContainer = ({ knowledge }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
    // triggerOnce: true,
  });

  // console.log(
  //   'OUTPUT ÄR ~ file: StartContainer.tsx ~ line 17 ~ StartContainer ~ inView',
  //   inView
  // );

  return (
    <article className={styles['StartContainer']}>
      <span className={styles["ButtonGrej"]} role="link" onClick={() => console.log("klickad")} data-href="https://www.duckduckgo.com">
        <div className={styles["ButtonGrej__Knapp"]} >KLICCKK</div>
      </span>
      {/* <Tab /> */}
      {/* <section className={styles['TextWrapper']}> */}
      <h1 className={styles['StartContainer__Title']}>
        Frontend-utecklare som vill bygga din webb.
      </h1>
      <div className={classNames(styles['StartContainer__Grid'], styles['StartContainer__BgImage'])}>
        <strong className={styles['StartContainer__Strong']}>
          Vad kul att du är här!
        </strong>
        <section className={styles['StartContainer__Row']}>
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
          {/* </div> */}
          <div className={styles['StartContainer__ButtonWrapper']}>
            <Button label={'Hur sidan är byggd'} href="/projects/" onClick={() => { }} icon={"arrowNext"} />
          </div>
        </section>
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
              Även här skriver jag mer text som är relevant till ämnet. Får ta en funderare när jag fyller sidan med content
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
          <div className={styles['StartContainer__Grid']}>
            <TabList knowledge={knowledge.frontend} title={'Frontend'} />

            <div
              ref={ref}
              className={styles['StartContainer__TabListWrapper--Backend']}>
              <TabList
                knowledge={knowledge.backend}
                title={'Backend'}
                dark={true}
              />
            </div>
          </div>
        </div>
      </article>
      {/* <div className={styles['Padding']}>
          {Object.keys(allIcons).map((x, index) => (
            <div className={styles['IconWrapper']} key={index}>
              <Icon type={x} />
            </div>
          ))}
        </div> */}
      <Test text="okidoki" />
      indexsidan
      {/* <ul>
            {this.props.data.slice(0, 10).map((x) => (
              <li key={x.id}>
                <h3>{x.title}</h3>
              </li>
            ))}
          </ul> */}
      {/* <LazyLoad once offset={100}> */}
      <Card />
      {/* </LazyLoad> */}
      {/* <Suspense fallback={<div>Laddar...</div>}>
        </Suspense> */}
      {/* </section> */}
    </article>
  );
};

export default StartContainer;
