import { useContext } from "react";
import styles from './ContentCard.module.scss';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
const Image = dynamic(() => import('../Image'));
const Video = dynamic(() => import('../Video'));
import ModalContext from "../../utils/context/Modal.context";

import { IVideoProps } from '../Video/Video';
import { IImageProps } from '../../types/types';
import { ICodeBoxProps } from '../CodeBox/CodeBox';
// import context from "../"

interface IContentCardProps {
  reverse?: boolean;
  reverseWrap?: boolean;
  html?: string;
  image?: IImageProps;
  video?: IVideoProps;
  code?: ICodeBoxProps;
}

const ContentCard: React.FC<IContentCardProps> = ({
  html,
  image,
  video,
  reverse = false,
  reverseWrap = false,
}) => {
  const { setModalContent } = useContext(ModalContext);

  return (
    <div
      className={classNames(styles['ContentCard'], {
        [styles['ContentCard--Reverse']]: reverse,
        [styles['ContentCard--ReverseWrap']]: reverseWrap,
      })}>
      <div
        className={styles['ContentCard__Text']}
        dangerouslySetInnerHTML={{ __html: html }}></div>

      {(!!video || !!image) && (
        <div className={styles['ContentCard__MediaWrapper']} >
          {!!video && (
            <>
              {!!video.title && (
                <span className={styles['ContentCard__VideoTitleWrapper']}>
                  <h3 className={styles['ContentCard__VideoTitle']}>
                    {video.title}
                  </h3>
                </span>
              )}
              <Video {...video} />
            </>
          )}
          {!!image && (
            <div className={styles['ContentCard__ImageWrapper']} onClick={() => setModalContent({ image: image })}>
              {!!image.title && (
                <span className={styles['ContentCard__VideoTitleWrapper']}>
                  <h3 className={styles['ContentCard__VideoTitle']}>
                    {image.title}
                  </h3>
                </span>
              )}
              <Image {...image} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentCard;
