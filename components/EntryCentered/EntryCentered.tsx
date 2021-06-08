import styles from "./EntryCentered.module.scss";
import classNames from "classnames";

interface IEntryCenteredProps {
  title: string;
  text?: string;
  dark?: boolean;
}

const EntryCentered: React.FC<IEntryCenteredProps> = ({ title, text, dark = false }) => {
  return (
    <div className={classNames(styles["EntryCentered"], { [styles["EntryCentered--Dark"]]: dark })}>
      <h2 className={styles["EntryCentered__Title"]}>{title}</h2>
      <div className={styles["EntryCentered__Text"]} dangerouslySetInnerHTML={{ __html: text }} />
      {/* <p className={styles["EntryCentered__Text"]}>{text}</p> */}
    </div>
  );
};

export default EntryCentered;
