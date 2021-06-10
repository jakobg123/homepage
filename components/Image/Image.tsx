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
    round = false,
    modifier = [],
    x = "50",
    y = "50",
    originalDimension = false,

}) => {
    const classes = !modifier.length || originalDimension
        ? styles["Image"]
        : classNames(modifier.map(x => (
            [x]
        )), styles["Image"]);

    // y = "35";
    // x = "10"

    let focal = !!modifier.length ? {} : { objectPosition: `${x}% ${y}%` };
    let imageStyles = {};

    if (round) {
        imageStyles = { ...focal, borderRadius: "50%" }
    }

    const dimension: { position: any, paddingTop: string } = !!originalDimension ? { position: `relative`, paddingTop: `${height / width * 100}%` } : { position: ``, paddingTop: `0` };

    return (
        <picture className={classes}
            style={dimension}
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
                style={!Object.keys(imageStyles).length && !modifier.length ? focal : imageStyles}
                className={styles['Image__Image']}
            />
        </picture >
    );
};

export default Image;
