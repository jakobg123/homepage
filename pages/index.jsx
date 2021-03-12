import { PureComponent } from 'react';
import Head from 'next/head';

//Data for getStaticProps
import menuData from '../serverData/menu.js';
import knowledgeData from '../serverData/knowledge.js';

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
    let { menu, knowledgeData } = this.props;

    return (
      <>
        <Head>
          <title>SEO-lämplig titel</title>
          <link
            rel="preload"
            href="/_next/static/css/d0593b78b17e779e2eb2.css"
            as="style"
          />
        </Head>
        <div className={styles['Base']}>
          <header className={styles['Base__Header']}>
            <Header />
          </header>
          <div className={styles['StickyContainer']}>
            <MobileNav data={menu} />
          </div>
          <main>
            <StartContainer knowledge={knowledgeData} />
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
    },
  };
}

export default index;
