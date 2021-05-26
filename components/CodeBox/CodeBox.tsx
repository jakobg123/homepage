import styles from "./CodeBox.module.scss";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

interface ICodeBoxProps {
    code: string;
}

const CodeBox: React.FC<ICodeBoxProps> = ({code}) => {


  return (
      <>
                <div className={styles["CodeBox"]}>
            <Swiper
                direction="vertical"
                mousewheel
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={styles["CodeBox__CodeWrapper"]}>
                            <pre>
                                <code>
                                    {code}
                                </code>
                            </pre>
                            {/* <CodeBlock
                                text={code}
                                language={"jsx"}
                                showLineNumbers={true}
                                theme={tomorrowNightBlue}
                                wrapLines
                            /> */}
                        </div>
                    </SwiperSlide>
            </Swiper>
                    </div>
      </>
  );
};

export default CodeBox;
