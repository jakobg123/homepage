import styles from './Image.module.scss';

import { IImageProps } from '../../types/types';

const Image: React.FC<IImageProps> = ({
    src,
    width,
    height,
    alt,
    mediaQueries,
    loading = 'lazy',
    focal = { x: '50%', y: '50%' },
    round = false,
    pTHeight = null,
}) => {
    return (
        <picture className={styles['Image']}
            style={{ paddingTop: !!pTHeight && pTHeight }}
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
        </picture>
    );
};

export default Image;
