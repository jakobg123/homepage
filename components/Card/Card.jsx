import React from 'react';
import Image from '../Image';
import styles from './Card.module.scss';
import classNames from 'classnames';

import { useInView } from 'react-intersection-observer';

const Card = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      className={classNames(styles['Card'], { [styles['Card--Show']]: inView })}
      ref={ref}>
      <Image src={'/images/green1.jpg'} />
      <div className={styles['Card__TextWrapper']}>
        <h3 className={styles['Card__Title']}>{inView.toString()}</h3>
        <h3 className={styles['Card__Title']}>Title</h3>
        <p className={styles['Card__Text']}>Paragraf</p>
      </div>
    </div>
  );
};

export default Card;
