export default {
    heroImage: {
        src: '/images/temp/construction_hero_445x300-min.jpg',
        alt: 'Målarpenslar, målarduk och palett starka turkosa färger.',
        width: 1442,
        height: 1038,
        loading: 'eager',
        modifierClass: 'Construction',
        x: '50',
        y: '28',
        // modifierClass: 'Hero__FocalPoint--Construction',
        mediaQueries: [
            {
                minWidth: 768,
                src: '/images/temp/construction_hero_1442x700-min.jpg',
            },
            {
                minWidth: 460,
                src: '/images/temp/construction_hero_754x366-min.jpg',
            },
        ],
    },
};

// export default {
//     heroImage: {
//         src: '/images/temp/hero_xss-min.jpg',
//         alt: 'Skog och sjö en sommarmorgon.',
//         width: 1440,
//         height: 1092,
//         loading: 'eager',
//         modifierClass: 'Hero__FocalPoint',
//         mediaQueries: [
//             {
//                 minWidth: 768,
//                 src: '/images/temp/hero_orginal-min.jpg',
//             },
//             {
//                 minWidth: 460,
//                 src: '/images/temp/hero_s-min.jpg',
//             },
//         ],
//     },
// };
