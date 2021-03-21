import React from 'react';

import { useInView } from 'react-intersection-observer';
import styles from './Internship.module.scss';
import classNames from 'classnames';

const Internship = ({ data, inView }) => {
  console.log("OUTPUT ÄR ~ file: Internship.tsx ~ line 8 ~ Internship ~ inView", inView)
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.01,
  //   // triggerOnce: true,
  // });
  // console.log("OUTPUT ÄR ~ file: Internship.tsx ~ line 9 ~ Internship ~ inView", inView)


  return (
    <div
      className={classNames(styles['Internship'], {
        [styles['Internship--Primary']]: !inView
      })}>
      <h2 className={styles['Internship__Subtitle']}>{data.heading}</h2>
      <div
        className={styles['Internship__Paragraph']}
        dangerouslySetInnerHTML={{ __html: data.html }}></div>
      <div

        className={styles['Internship__Paragraph']}
        dangerouslySetInnerHTML={{ __html: data.html2 }}></div>
    </div>
  );
};

export default Internship;
