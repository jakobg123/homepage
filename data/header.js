export default {
    heroImage: {
        src: '/images/temp/hero_xss-min.jpg',
        alt: 'Vacker naturbild',
        width: 1440,
        height: 1092,
        loading: 'eager',
        mediaQueries: [
            {
                minWidth: 1440,
                src: '/images/temp/hero_l.jpg',
            },
            {
                minWidth: 1024,
                src: '/images/temp/hero_ml.jpg',
            },
            {
                minWidth: 768,
                src: '/images/temp/hero_m.jpg',
            },
            {
                minWidth: 420,
                src: '/images/temp/hero_s.jpg',
            },
        ],
    },
};
