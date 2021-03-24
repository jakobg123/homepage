import React from 'react';

import { useInView } from 'react-intersection-observer';
import styles from './Internship.module.scss';
import classNames from 'classnames';
import { IImageProps, IMediaQueries } from '../../types/types';
import Image from "../Image";
import Icon from "../Icon";

const Internship = ({ data, inView }) => {
  const image: IImageProps = {
    // src: '/images/goldenGateSmall.jpg',
    src: '/images/temp/frojd_orginal.jpg',
    // src: '/images/tuscany1.jpg',
    alt: 'Personer som arbetar på Fröjd',
    width: 1000,
    height: 555,
    // src: '/images/glassOptXl.webp',
    // // src: '/images/tuscany1.jpg',
    // alt: 'Cool ljus glaskula',
    // width: 640,
    // height: 960,
    // loading: 'lazy',
  };

  return (
    <div
      className={classNames(styles['Internship'], {
        [styles['Internship--Primary']]: !inView
      })}>
      <div className={styles["Internship__Grid"]}>
        <h2 id="internship" className={styles['Internship__Subtitle']}>{data.heading}</h2>
        <div className={styles["Internship__ImageAndTextWrapper"] + " " + styles["Internship__ImageAndTextWrapper--Mobile"]}>
          <div
            className={styles['Internship__Paragraph']}
            dangerouslySetInnerHTML={{ __html: data.html }}></div>
          <div aria-hidden="true" className={styles["Internship__FrojdContainer"]}>
            <div className={styles["Internship__IconWrapper"]}>
              <Icon type={"frojd"} color={"White"} modifier={[styles["Internship__Width"]]} />
            </div>
          </div>
          <div
            className={styles['Internship__Paragraph']}
            dangerouslySetInnerHTML={{ __html: data.html2 }}></div>
          {/* <div className={styles["Internship__Outer"]}>
            <div className={styles["Internship__ImageWrapper"]}>
              <Image {...image} />
            </div>
          </div> */}
        </div>
        <div className={styles["Internship__ImageAndTextWrapper"] + " " + styles["Internship__ImageAndTextWrapper--Desktop"]}>
          <div
            className={styles['Internship__Paragraph']}
            dangerouslySetInnerHTML={{ __html: data.html + data.html2 }}></div>
          <div aria-hidden="true" className={styles["Internship__FrojdContainer"]}>
            <div className={styles["Internship__IconWrapper"]}>
              <Icon type={"frojd"} color={"White"} modifier={[styles["Internship__Width"]]} />
            </div>
          </div>
          {/* <div className={styles["Internship__Outer"]}>
            <div className={styles["Internship__ImageWrapper"]}>
              <Image {...image} />
            </div>
          </div> */}
        </div>
        <div
          className={styles['Internship__Paragraph']}
          dangerouslySetInnerHTML={{ __html: data.html3 + data.html4 }}></div>
      </div>
    </div>
  );
};

export default Internship;
