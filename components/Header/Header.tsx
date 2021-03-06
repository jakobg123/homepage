import Image from '../Image';

import styles from './Header.module.scss';
import classNames from 'classnames';
import MobileNav from '../MobileNavButton';

import { IImageProps, IMediaQueries } from '../../types/types';

const Header: React.FC = () => {
  console.log('HEADER');

  const bgImage: IImageProps = {
    src: '/images/glass.jpg',
    alt: 'Cool ljus glaskula',
    width: 640,
    height: 960,
    loading: 'lazy',
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 1024,
      src: '/images/goldenGateLarge.jpg',
    },
    {
      minWidth: 640,
      src: '/images/goldenGateMedium.jpg',
    },
  ];

  return (
    <div className={styles['Header']}>
      <div
        className={classNames(styles['Header__ImageWrapper'], {
          [styles['Header__ImageWrapper--Overlay']]: true,
        })}>
        <Image
          {...bgImage}
          mediaQueries={mediaQueries}
          focal={{ x: '60%', y: '0%' }}
          onLoadFade
        />

        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
