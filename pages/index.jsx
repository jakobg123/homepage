import { PureComponent } from 'react';
import Head from 'next/head';

//Data for getStaticProps
import menuData from '../serverData/menu.js';
import knowledgeData from '../serverData/knowledge.js';
import startData from '../serverData/startData.js';

import Header from '../components/Header';
import MobileNav from '../components/MobileNavButton';
import Footer from '../components/Footer';
import styles from './index.module.scss';
import classNames from 'classnames';

// Dynamic import just for reference

// import dynamic from 'next/dynamic';
// const Footer = dynamic(() => import('../components/Footer'), {
//   ssr: false,
// });

import StartContainer from '../containers/StartContainer';

class index extends PureComponent {
  state = {};
  // constructor() {
  //   super();
  // }

  render() {
    let { menu, knowledgeData, startData } = this.props;

    return (
      <>
        <Head>
          <title>Frontend-utvecklare som vill bygga din webb: jakobg.se</title>
          <meta
            name="description"
            content="Snart är jag en nyexad junior Frontendutvecklare. Nu söker jag jobb där jag får arbeta med webbutveckling och programmering. Här är min portfolio-sajt."
            // content="I juni 2021 tar jag examen i Frontendutveckling på IT-Högskolan. Jag söker nu ett jobb där jag får arbeta med webbutveckling och växa inom programmering."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        </Head>
        <div className={styles['Base']}>
          <header className={styles['Base__Header']}>
            <Header />
          </header>
          <div className={styles['StickyContainer']}>
            <MobileNav data={menu} />
          </div>
          <main>
            <StartContainer knowledge={knowledgeData} data={startData} />
          </main>
          <footer className={styles['Base__Footer']}>
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

export async function getStaticProps(content) {
  return {
    props: {
      menu: menuData,
      knowledgeData,
      startData,
    },
  };
}

export default index;
