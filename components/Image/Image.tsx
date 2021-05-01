import styles from './Image.module.scss';
import classNames from "classnames";

import { IImageProps, IMediaQueries } from '../../types/types';

const Image: React.FC<IImageProps> = ({
    src,
    width,
    height,
    alt,
    mediaQueries,
    loading = 'lazy',
    focal = { x: '50%', y: '50%' },
    round = false,
    modifier = [],
}) => {
    const classes = !modifier.length ? styles["Image"] : classNames(modifier.map(x => (
        [x]
    )), styles["Image"])

    return (
        <picture className={classes}
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
                style={{ objectPosition: focal.x + ' ' + focal.y, borderRadius: round && "50%" }}
                className={styles['Image__Image']}
            />
        </picture >
    );
};

export default Image;
