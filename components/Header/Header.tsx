import Image from '../Image';


import styles from './Header.module.scss';
import classNames from 'classnames';

import { IImageProps, IMediaQueries } from '../../types/types';

const Header: React.FC = () => {

  console.log('HEADER');

  const bgImage: IImageProps = {
    // src: '/images/goldenGateSmall.jpg',
    // src: '/images/glassOptXl.webp',
    src: '/images/tuscany1.jpg',
    alt: 'Cool ljus glaskula',
    width: 640,
    height: 960,
    loading: 'lazy',
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 768,
      src: '/images/tuscany1.jpg',
    },
  ];



  return (
    <div className={styles['Header']}>
      <div
        className={classNames(styles['Header__ImageWrapper'])}>
        <Image
          {...bgImage}
          mediaQueries={mediaQueries}
          focal={{ x: '0', y: '50%' }}
          onLoadFade
          loading="lazy"
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
