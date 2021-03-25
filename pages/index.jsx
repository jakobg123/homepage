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

import StartContainer from '../containers/StartContainer';

class index extends PureComponent {
  state = {};

  render() {
    let { menu, knowledgeData, startData } = this.props;

    return (
      <>
        <Head>
          <title>Frontend-utvecklare som vill bygga din webb: jakobg.se</title>
          <meta
            name="description"
            content="Snart är jag en nyexad junior Frontendutvecklare. Nu söker jag jobb där jag får arbeta med webbutveckling och programmering. Här är min portfolio-sajt."
          />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="favicon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="favicon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="favicon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="favicon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="favicon/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon/favicon-128.png"
            sizes="128x128"
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta
            name="msapplication-square70x70logo"
            content="mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="mstile-310x310.png"
          />
        </Head>
        <div className={styles['Base']}>
          <header className={styles['Base__Header']}>
            <figure className={styles['Base__Logo']}>
              <img
                src="/logoPrimary.svg"
                alt="Sidans logotyp med texten: Jakob Gauffin"
                width="140px"
                height="30px"
              />
            </figure>
            <Header />
            <div className={styles['Base__StickyContainer']}>
              <MobileNav data={menu} />
            </div>
          </header>
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
