import styles from "./TestStuff.module.scss";

import dynamic from "next/dynamic";
const Karusell = dynamic(
  () => import("../../components/Karusell"));

interface ITestStuffProps {

}

const TestStuff: React.FC<ITestStuffProps> = () => {
  return (
    <div className={styles["TestStuff"]}>
      <Karusell />
    </div>
  );
};

export default TestStuff;
