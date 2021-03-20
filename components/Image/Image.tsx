import { DetailedHTMLProps, ImgHTMLAttributes, useState, useEffect } from 'react';

import styles from './Image.module.scss';
import classNames from "classnames";

import { IImageProps } from '../../types/types';

const Image: React.FC<IImageProps> = ({
    src,
    width,
    height,
    alt,
    mediaQueries,
    loading = 'lazy',
    focal = { x: '50%', y: '50%' },
    onLoadFade = false,
    height: string,
}) => {
    const [fade, setFade] = useState(false)

    // useEffect(() => {
    //     if (onLoadFade) {
    //         setFade(true)
    //     }
    // }, [])

    return (
        <picture className={styles['Image']}
            style={{ paddingTop: height }}
        >
            {!!mediaQueries?.length &&
                mediaQueries.map(({ src, minWidth }, index) => (
                    <source
                        key={index}
                        media={`(min-width: ${minWidth}px)`}
                        srcSet={src}
                    />
                ))}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                style={{ objectPosition: focal.x + ' ' + focal.y }}
                className={classNames(styles['Image__Image'], { [styles["Image__Image--Fade"]]: fade }, { [styles["Image__Image--NoFade"]]: !onLoadFade })
                }
            // onLoad={fadeImage}
            />
        </picture>
    );
};

export default Image;
