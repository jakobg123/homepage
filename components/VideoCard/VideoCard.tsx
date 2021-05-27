import styles from "./VideoCard.module.scss";
import Video from "../Video";

interface IVideoCardProps {

}

const VideoCard: React.FC<IVideoCardProps> = () => {
  return (
    <div className={styles["VideoCard"]}>
      <div className={styles["VideoCard__Wrapper"]}>
        <Video width={704} height={644} src={"images/video/desktopWithoutPerfEnh.mp4"} />
      </div>
      <div className={styles["VideoCard__Wrapper"]}>
        <Video width={704} height={644} src={"images/video/desktopPerfEnh.mp4"} />
      </div>
    </div>
  );
};

export default VideoCard;
