import Image from '../Image';
import MainNav from "../MainNav";

import styles from './Header.module.scss';
import classNames from 'classnames';

import { IImageProps, IMediaQueries } from '../../types/types';

const Header: React.FC = () => {
  const bgImage: IImageProps = {
    src: '/images/temp/hero_xs.jpg',
    alt: 'Vacker naturbild',
    width: 1440,
    height: 700,
    loading: 'eager',
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 1440,
      src: '/images/temp/hero_l.jpg',
    },
    {
      minWidth: 1024,
      src: '/images/temp/hero_ml.jpg',
    },
    {
      minWidth: 768,
      src: '/images/temp/hero_m.jpg',
    },
    {
      minWidth: 420,
      src: '/images/temp/hero_s.jpg',
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
          focal={{ x: '5%', y: '0%' }}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Header;


