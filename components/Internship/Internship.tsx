import React from 'react';

import { useInView } from 'react-intersection-observer';
import styles from './Internship.module.scss';
import classNames from 'classnames';

const Internship = ({ data, inView }) => {



  return (
    <div
      className={classNames(styles['Internship'], {
        [styles['Internship--Primary']]: !inView
      })}>
      <div className={styles["Internship__Grid"]}>
        <h2 className={styles['Internship__Subtitle']}>{data.heading}</h2>
        <div
          className={styles['Internship__Paragraph']}
          dangerouslySetInnerHTML={{ __html: data.html }}></div>
        <div

          className={styles['Internship__Paragraph']}
          dangerouslySetInnerHTML={{ __html: data.html2 }}></div>
      </div>
    </div>
  );
};

export default Internship;
