import classNames from 'classnames';

import styles from './Internship.module.scss';
import Icon from "../Icon";

const Internship = ({ data, inView }) => {

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
          <a href="https://www.frojd.se" className={styles["Internship__FrojdContainer"]}>
            <span aria-hidden="true" className={styles["Internship__IconWrapper"]}>
              <Icon type={"frojd"} color={"White"} modifier={[styles["Internship__Width"]]} />
            </span>
          </a>
          <div
            className={styles['Internship__Paragraph']}
            dangerouslySetInnerHTML={{ __html: data.html2 }}></div>
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
        </div>
        <div
          className={styles['Internship__Paragraph']}
          dangerouslySetInnerHTML={{ __html: data.html3 + data.html4 }}></div>
      </div>
    </div>
  );
};

export default Internship;
