import styles from "./CodeBox.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

// import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
// import { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// import highlight from "highlight.js/lib/core";

// import hljs from 'highlight.js';
// import hljs from "highlight.js/lib/core";

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import dark from 'react-syntax-highlighter/dist/esm/styles/prism/dark';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { vscDarkPlus as nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { synthwave84 as nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { duotoneSea as nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
SyntaxHighlighter.registerLanguage('tsx', tsx);
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
// console.log("OUTPUT ÄR ~ file: CodeBox.tsx ~ line 17 ~ hljs", hljs)

export interface ICodeBoxProps {
    code: string;
    height?: number;
    fadeIn?: boolean;
    noBorder?: boolean;
}

const CodeBox: React.FC<ICodeBoxProps> = ({ code, height = 35, fadeIn }) => {
    const [fadeInCodeBox, setFadeInCodeBox] = useState(false);
    useEffect(() => {
        if (fadeIn) {
            setFadeInCodeBox(true);
        }

    }, [fadeIn])
    return (
        <div className={classNames(styles["CodeBox"], { [styles["CodeBox--FadeIn"]]: fadeInCodeBox })} style={{
            height: `${height}rem`
        }}>
            <SyntaxHighlighter language="tsx" style={nord}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBox;
