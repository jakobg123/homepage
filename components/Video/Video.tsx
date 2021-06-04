import styles from "./Video.module.scss";

export interface IVideoProps {
  width: number;
  height: number;
  src: string;
  title?: string;
}

const Video: React.FC<IVideoProps> = ({ width, height, src }) => {
  const paddingTop = (height / width) * 100;

  return (
    <div className={styles["Video"]} style={{ paddingTop: `${paddingTop}%` }}>
      <div className={styles["Video__Wrapper"]}>
        <video className={styles["Video__Content"]} src={src}
          playsInline={true}
          //   autoPlay={true}
          muted={true}
          loop={true}
          controls={true}
        // onChange={() => console.log("!Nåt hände")}
        // onEnded={() => console.log("jeppppp")}
        ></video>
      </div>
    </div >
  );
};

export default Video;
