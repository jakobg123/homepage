import Image from '../Image';
import MainNav from "../MainNav";


import styles from './Header.module.scss';
import classNames from 'classnames';

import { IImageProps, IMediaQueries } from '../../types/types';

const Header: React.FC = () => {

  console.log('HEADER');

  const bgImage: IImageProps = {
    // src: '/images/goldenGateSmall.jpg',
    src: '/images/hero_small.jpg',
    // src: '/images/tuscany1.jpg',
    alt: 'Vacker naturbild',
    width: 640,
    height: 450,
    loading: 'lazy',
    // src: '/images/glassOptXl.webp',
    // // src: '/images/tuscany1.jpg',
    // alt: 'Cool ljus glaskula',
    // width: 640,
    // height: 960,
    // loading: 'lazy',
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 1280,
      src: '/images/hero_large.jpg',
    },
    {
      minWidth: 768,
      src: '/images/hero_medium.jpg',
    },
  ];



  return (
    <div className={styles['Header']}>
      <div className={styles['Header__MainNavWrapper']}>
        <MainNav />
      </div>
      <div
        className={classNames(styles['Header__ImageWrapper'])}>
        <Image
          {...bgImage}
          mediaQueries={mediaQueries}
          focal={{ x: '0%', y: '0%' }}
          // onLoadFade
          loading="eager"
        />
        <div
          className={classNames(styles['Header__Overlay'], {
            [styles['Header__TESTOverlay']]: true,
          })}></div>
      </div>
    </div>
  );
};

export default Header;


