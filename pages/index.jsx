import { PureComponent } from 'react';
import menuData from '../serverData/menu.js';
import knowledgeData from '../serverData/knowledge.js';
// import menuData from '../serverData/menu.json';

// import { fetchData } from '../utils/fetchData';
// import { fetchData } from './fetch';

// import LazyLoad from 'react-lazyload';
// import { useInView } from 'react-intersection-observer';

import Header from '../components/Header';
import MobileNav from '../components/MobileNavButton';
import styles from './index.module.scss';
import { allIcons } from '../components/Icon/Icon';
import classNames from 'classnames';

// const Footer = React.lazy(() => import('../components/Footer'));

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
});

import { Test } from '../components/Test';

import StartContainer from '../containers/StartContainer';

import React from 'react';

class index extends PureComponent {
  constructor() {
    super();

    // console.log(
    //   'OUTPUT ÄR ~ file: index.jsx ~ line 35 ~ index ~ constructor ~ menu',
    //   menu
    // );
    state: {
      openNav: false;
      menu: [];
    }
  }

  // let {menu} = this.props;

  render() {
    let { menu, knowledgeData } = this.props;

    return (
      <div>
        <Header />
        <div className={styles['StickyContainer']}>
          <MobileNav
            // onClick={handleMobileNav}
            // openNav={this.state.openNav}
            // setOpenNav={setOpenNav}
            data={menu}
          />
        </div>
        <StartContainer knowledge={knowledgeData} />
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
  // console.log('OUTPUT ÄR ~ file: index.jsx ~ line 4 ~ menuData', menuData);

  // let resp = await fetch('https://jsonplaceholder.typicode.com/todos/');
  // let data = await resp.json();

  // const menuData = await fetch('http://localhost:3000/api/menu/');

  // let menuResp = await menuData.json();
  // console.log(
  //   'OUTPUT ÄR ~ file: index.jsx ~ line 161 ~ getStaticProps ~ menuResp',
  //   menuResp
  // );
  // const menuResp = await fetchData('/menu/');
  // console.log(
  //   'OUTPUT ÄR ~ file: index.jsx ~ line 160 ~ getStaticProps ~ menuResp',
  //   menuResp
  // );

  // const host = process.env.HOST;
  // let data2 = await fetch(`http://${host}/api/menu/`);
  // let resp2 = await data2.json();
  // console.log('RESPPP', resp2);
  // try {
  //   // let menu = await fetchData(`/menu/`);
  //   let menu = await fetch(`http://${host}/api/menu/`);
  //   console.log(
  //     'OUTPUT ÄR ~ file: index.jsx ~ line 173 ~ getStaticProps ~ menu',
  //     menu
  //   );
  //   menu = await menu.json();
  //   console.log(
  //     'OUTPUT ÄR ~ file: index.jsx ~ line 175 ~ getStaticProps ~ menu',
  //     menu
  //   );
  // } catch (err) {
  //   console.error(err);
  // }

  // menu ? menu : (menu = []);
  // menuData = JSON.stringify(menuData);
  // const menu = menuData.json();
  // console.log('menyn', menuData);

  return {
    props: {
      // data: data,
      menu: menuData,
      knowledgeData,
    },
  };
}

export default index;
