import { useContext, useEffect, useState } from "react";
import classNames from 'classnames';
import styles from './Internship.module.scss';
import Icon from "../Icon";
import ImageAndText from "../ImageAndText";

import { IInternshipData } from "../../types/typesData";
import { Theme } from "../../containers/StartPage/StartPage";
import {useInView} from "react-intersection-observer";

interface IInternship {
    data: IInternshipData;
}

const Internship: React.FC<IInternship> = ({ data }) => {
    // const [internshipHasShown, setInternshipHasShown] = useState(false);
    // console.log("🚀 ~ file: Internship.tsx ~ line 17 ~ internshipHasShown", internshipHasShown)
    const lightTheme = useContext(Theme);
    // const [ref, inView] = useInView({
    //     threshold: 0,
    //     // triggerOnce: true,
    // });
    // useEffect(() => {
    //     if(inView && !internshipHasShown){
    //         setInternshipHasShown(true)
    //     }
    // }, [inView])

    return (
        <div id="internship"
            className={classNames(styles['Internship'], {
                // [styles['Internship--Light']]: !inView
                [styles['Internship--Light']]: lightTheme
            }
            // , {
            //     [styles['Internship--StartDark']]: !internshipHasShown 
            //     // [styles['Internship--Light']]: lightTheme
            // }
            
            )}>
            <div 
            // ref={ref} 
            className={styles["Internship__BackgroundRef"]}></div>
            <div className={styles["Internship__Grid"]}>
                {/* <h2 id="internship" className={styles['Internship__Subtitle']}>{data.heading}</h2> */}
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
