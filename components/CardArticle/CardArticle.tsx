import styles from "./CardArticle.module.scss";
interface ICardArticleProps {

}

const CardArticle: React.FC<ICardArticleProps> = ({ children }) => {
  return (
    <div className={styles["CardArticle"]}>
      {children}
    </div>
  );
};

export default CardArticle;
