export default {
    heroImage: {
        src: '/images/temp/hero_xss-min.jpg',
        alt: 'Skog och sjö en sommarmorgon.',
        width: 1440,
        height: 1092,
        loading: 'eager',
        modifierClass: 'Hero__FocalPoint',
        x: '33',
        y: '0',
        mediaQueries: [
            {
                minWidth: 768,
                src: '/images/temp/hero_orginal-min.jpg',
            },
            {
                minWidth: 460,
                src: '/images/temp/hero_s-min.jpg',
            },
        ],
    },
};
