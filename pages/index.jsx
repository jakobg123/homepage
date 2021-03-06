import { PureComponent } from 'react';

// import LazyLoad from 'react-lazyload';
// import { useInView } from 'react-intersection-observer';

import Card from '../components/Card';

import Header from '../components/Header';
import Icon from '../components/Icon';
import MobileNav from '../components/MobileNavButton';
import styles from './index.module.scss';
import { allIcons } from '../components/Icon/Icon';
// import Footer from '../components/Footer';
import classNames from 'classnames';

// const Footer = React.lazy(() => import('../components/Footer'));

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
});

import { Test } from '../components/Test';

import React from 'react';

class index extends PureComponent {
  constructor() {
    super();
    state: {
      openNav: false;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {/* <MobileNav
        // onClick={handleMobileNav}
        // openNav={this.state.openNav}
        // setOpenNav={setOpenNav}
        /> */}
        <section className={styles['TextWrapper']}>
          <h1 className={styles['Title']}>
            Frontend-utecklare som vill bygga din webb.
          </h1>
          <div className={styles['Grid']}>
            <h2 className={styles['SubTitle']}>
              Till sommar blir jag en färdigutbildad frontendutvecklare, och
              letar nu jobb på en utvecklande webbyrå.
            </h2>
            <p className={styles['Paragraph']}>
              <strong>Varmt välkommen till min hemsida!</strong>
              Här showcase:ar jag lite av det jag har lärt mig i programmering
              och webbutveckling efter 2 års studier.
            </p>
            <p className={styles['Paragraph']}>
              Den här sidan är bl.a. gjord med Next.js och Typescript. Jag har
              också jobbat med prestandaoptimering och tillgänglighet.
            </p>
          </div>
          <button>Läs mer om hur sidan är byggd</button>
          <div className={styles['Padding']}>
            {Object.keys(allIcons).map((x, index) => (
              <div className={styles['IconWrapper']} key={index}>
                <Icon type={x} />
              </div>
            ))}
          </div>
          <Test text="okidoki" />
          indexsidan
          <ul>
            {this.props.data.slice(0, 10).map((x) => (
              <li key={x.id}>
                <h3>{x.title}</h3>
              </li>
            ))}
          </ul>
          {/* <LazyLoad once offset={100}> */}
          <Card />
          {/* </LazyLoad> */}
          {/* <Suspense fallback={<div>Laddar...</div>}>
        </Suspense> */}
        </section>
        <Footer />
      </div>
    );
  }
}

// const index = ({ data }) => {
//   const [openNav, setOpenNav] = useState(false);

//   const handleMobileNav = () => {
//     setOpenNav(!openNav);
//     openNav
//       ? (document.body.style.overflow = 'scroll')
//       : (document.body.style.overflow = 'hidden');
//   };

//   return (
//     <div>
//       {/* {memo(Header)} */}
//       <Header />
//       <MobileNav
//         onClick={handleMobileNav}
//         openNav={openNav}
//         setOpenNav={setOpenNav}
//       />
//       {Object.keys(allIcons).map((x, index) => (
//         <div className={styles['IconWrapper']} key={index}>
//           <Icon type={x} />
//         </div>
//       ))}
//       <Test text="okidoki" />
//       indexsidan
//       <ul>
//         {data.slice(0, 10).map((x) => (
//           <li key={x.id}>
//             <h3>{x.title}</h3>
//           </li>
//         ))}
//       </ul>
//       {/* <Suspense fallback={<div>Laddar...</div>}>
//       </Suspense> */}
//       <Footer />
//     </div>
//   );
// };

export async function getStaticProps(content) {
  let resp = await fetch('https://jsonplaceholder.typicode.com/todos/');
  let data = await resp.json();

  return {
    props: {
      data: data,
    },
  };
}

export default index;
