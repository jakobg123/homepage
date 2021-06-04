import styles from './ContentCard.module.scss';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
const CodeBox = dynamic(() => import('../CodeBox'));
const Image = dynamic(() => import('../Image'));
const Video = dynamic(() => import('../Video'));

import { IVideoProps } from '../Video/Video';
import { IImageProps } from '../../types/types';
import { ICodeBoxProps } from '../CodeBox/CodeBox';

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
  code,
}) => {
  return (
    <div
      className={classNames(styles['ContentCard'], {
        [styles['ContentCard--Reverse']]: reverse,
        [styles['ContentCard--ReverseWrap']]: reverseWrap,
      })}>
      <div
        className={styles['ContentCard__Text']}
        dangerouslySetInnerHTML={{ __html: html }}></div>

      {(!!video || !!code || !!image) && (
        <div className={styles['ContentCard__MediaWrapper']}>
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
          {!!code && <CodeBox {...code} />}
          {!!image && (
            <div className={styles['ContentCard__ImageWrapper']}>
              <Image {...image} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentCard;
