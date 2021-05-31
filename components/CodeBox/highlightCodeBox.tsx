export default {};
// import styles from "./CodeBox.module.scss";
// // import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
// import { CodeBlock, nord } from "react-code-blocks";
// import { useRef, useEffect } from "react";

// interface ICodeBoxProps {
//   code: string;
//   height?: number;
// }

// const CodeBox: React.FC<ICodeBoxProps> = ({ code, height = 35 }) => {
//   console.log("OUTPUT ÄR ~ file: CodeBox.tsx ~ line 12 ~ code", code)
//   // const ref = useRef(0);
//   // useEffect(() => {
//   //   let scrollable = isScrollable(ref.current);
//   //   console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 14 ~ useEffect ~ scrollable", scrollable)

//   // }, [])

//   // const isScrollable = function (ele) {
//   //   // Compare the height to see if the element has scrollable content
//   //   const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

//   //   // It's not enough because the element's `overflow-y` style can be set as
//   //   // * `hidden`
//   //   // * `hidden !important`
//   //   // In those cases, the scrollbar isn't shown
//   //   const overflowYStyle = window.getComputedStyle(ele).overflowY;
//   //   const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

//   //   return hasScrollableContent && !isOverflowHidden;
//   // };

//   // const scrollFunction = (e) => {
//   //   console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 63 ~ scrollFunction ~ e", e.target.parentNode);
//   //   e.target.parentNode.scrollBy(0, 100);

//   //   const res = isScrollable(e.target.parentNode);
//   //   console.log("OUTPUT ÄR ~ file: ConstructionPage.tsx ~ line 82 ~ scrollFunction ~ res", res)
//   // }

//   return (
//     <div className={styles["CodeBox"]} style={{ height: `${height}rem` }}>
//       <CodeBlock
//         text={code}
//         language={"tsx"}
//         showLineNumbers={true}
//         theme={nord}
//         wrapLines
//       // highlight="31,32,33,34,35,36"
//       />
//     </div>
//   );
// };

// export default CodeBox;
