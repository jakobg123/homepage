import { useContext } from "react";
import classNames from 'classnames';
import styles from './Internship.module.scss';
import Icon from "../Icon";
import ImageAndText from "../ImageAndText";

import { IInternshipData } from "../../types/typesData";
import { Theme } from "../../containers/StartPage/StartPage";

interface IInternship {
    data: IInternshipData;
}

const Internship: React.FC<IInternship> = ({ data }) => {
    const lightTheme = useContext(Theme);

    return (
        <div
            className={classNames(styles['Internship'], {
                [styles['Internship--Light']]: lightTheme
            })}>
            <div className={styles["Internship__Grid"]}>
                <h2 id="internship" className={styles['Internship__Subtitle']}>{data.heading}</h2>
                <div className={styles["Internship__ImageAndTextWrapper"] + " " + styles["Internship__ImageAndTextWrapper--Mobile"]}>
                    <div
                        className={styles['Internship__TextWrapper']}
                        dangerouslySetInnerHTML={{ __html: data.html }}></div>
                    <a href="https://www.frojd.se" className={styles["Internship__FrojdContainer"]}>
                        <span className="sr-only">Till Fröjds hemsida</span>
                        <span aria-hidden="true" className={styles["Internship__IconWrapper"]}>
                            <Icon type={"frojd"} color={"White"} modifier={[styles["Internship__Width"]]} />
                        </span>
                    </a>
                </div>
                <div className={styles["Internship__ImageAndTextWrapper"] + " " + styles["Internship__ImageAndTextWrapper--Desktop"]}>
                    <div
                        className={styles['Internship__TextWrapper']}
                        dangerouslySetInnerHTML={{ __html: data.html }}></div>
                    <a href="https://www.frojd.se" className={styles["Internship__FrojdContainer"]}>
                        <span className="sr-only">Till Fröjds hemsida</span>
                        <span aria-hidden="true" className={styles["Internship__IconWrapper"]}>
                            <Icon type={"frojd"} color={"White"} modifier={[styles["Internship__Width"]]} />
                        </span>
                    </a>
                </div>

                <ImageAndText html={data.html2 + data.html3} image={data.images[0]} imageToLeft />
                <ImageAndText html={data.html4} image={data.images[1]} />
            </div>
        </div>
    );
};

export default Internship;
