import React from 'react';
import styles from './StartContainer.module.scss';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import Tab from '../../components/Tab';
import TabList from '../../components/TabList';
import classNames from 'classnames';

import { useInView } from 'react-intersection-observer';

import { allIcons } from '../../components/Icon/Icon';

import { Test } from '../../components/Test';

const StartContainer = ({ knowledge }) => {
  const { ref, inView, entry } = useInView({

    /* Optional options */
    threshold: 0.05,
    // triggerOnce: true,
  });

  console.log("OUTPUT ÄR ~ file: StartContainer.tsx ~ line 17 ~ StartContainer ~ inView", inView)


  return (
    <div className={styles['StartContainer']}>
      {/* <Tab /> */}
      <section className={styles['TextWrapper']}>
        <h1 className={styles['Title']}>
          Frontend-utecklare som vill bygga din webb.
        </h1>
        <div className={styles['Grid']}>
          <h2 className={styles['SubTitle']}>
            Till sommar blir jag en färdigutbildad frontendutvecklare, och letar
            nu jobb på en utvecklande webbyrå.
          </h2>
          <p className={styles['Paragraph']}>
            <strong>Varmt välkommen till min hemsida!</strong>
            Här showcase:ar jag lite av det jag har lärt mig i programmering och
            webbutveckling efter 2 års studier.
          </p>
          <p className={styles['Paragraph']}>
            Den här sidan är bl.a. gjord med Next.js och Typescript. Jag har
            också jobbat med prestandaoptimering och tillgänglighet.
          </p>
        </div>
        <button>Läs mer om hur sidan är byggd</button>
        <div
          className={classNames(styles['Padding'], { [styles['Padding--Black']]: !inView }, {
            [styles["Padding--White"]]: inView
          })}>
          <div className={styles['StartContainer__TabListWrapper']}>
            <TabList knowledge={knowledge.frontend} title={'Frontend'} />

            <div
              ref={ref}
              className={styles['StartContainer__TabListWrapper--Backend']}>

              <TabList knowledge={knowledge.backend} title={'Backend'} dark={true} />

            </div>
          </div>
        </div>
        <div className={styles['Padding']}>
          {Object.keys(allIcons).map((x, index) => (
            <div className={styles['IconWrapper']} key={index}>
              <Icon type={x} />
            </div>
          ))}
        </div>
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
      </section>
    </div>
  );
};

export default StartContainer;
