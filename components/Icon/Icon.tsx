import styles from './Icon.module.scss';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

// import ArrowNext from './icons/minified/arrowNext.svg';
// const ArrowPrev = dynamic(() => import('./icons/minified/arrowPrev.svg'));
// // import ArrowPrev from './icons/minified/arrowPrev.svg';
// // import ChevronNext from './icons/minified/chevronNext.svg';
// const ChevronNext = dynamic(() => import('./icons/minified/chevronNext.svg'));
// import ChevronDown from './icons/minified/chevronDown.svg';
// // import Close from './icons/minified/close.svg';
// import Close from './icons/minified/close.svg';
// // import Code from './icons/minified/code.svg';
// const Code = dynamic(() => import('./icons/minified/code.svg'));
// import Css from './icons/minified/css.svg';
// import Django from './icons/minified/django.svg';
// import Frojd from './icons/minified/frojd.svg';
// import Github from './icons/minified/github.svg';
// import Html from './icons/minified/html.svg';
// import Javascript from './icons/minified/javascript.svg';
// import LinkedIn from './icons/minified/linkedIn.svg';
// import Menu from './icons/minified/menu2.svg';
// // import Moon from './icons/minified/moon.svg';
// const Moon = dynamic(() => import('./icons/minified/moon.svg'));
// import MySql from './icons/minified/mysql.svg';
// import NextJs from './icons/minified/nextjs.svg';
// import NodeJs from './icons/minified/nodejs.svg';
// const Npm = dynamic(() => import('./icons/minified/npm.svg'));
// // import Npm from './icons/minified/npm.svg';
// import Php from './icons/minified/php.svg';
// // import PostgreSql from './icons/minified/postgresql.svg';
// const PostgreSql = dynamic(() => import('./icons/minified/postgresql.svg'));
// import Python from './icons/minified/python.svg';
// import ReactIcon from './icons/minified/react.svg';
// import ReactSpring from './icons/minified/reactSpring.svg';
// import Redux from './icons/minified/redux.svg';
// import Sass from './icons/minified/sass.svg';
// import Typescript from './icons/minified/typescript.svg';
// import Wagtail from './icons/minified/wagtail.svg';
// import Wordpress from './icons/minified/wordpress.svg';
const ArrowNext = dynamic(() => import('./icons/minified/arrowNext.svg'));
const ArrowPrev = dynamic(() => import('./icons/minified/arrowPrev.svg'));
const ChevronNext = dynamic(() => import('./icons/minified/chevronNext.svg'));
const ChevronDown = dynamic(() => import('./icons/minified/chevronDown.svg'));
// const Close = dynamic(() => import('./icons/minified/close.svg'));
const Close = dynamic(() => import('./icons/minified/close.svg'));
const Code = dynamic(() => import('./icons/minified/code.svg'));
const Css = dynamic(() => import('./icons/minified/css.svg'));
const Django = dynamic(() => import('./icons/minified/django.svg'));
const Frojd = dynamic(() => import('./icons/minified/frojd.svg'));
const Github = dynamic(() => import('./icons/minified/github.svg'));
const Html = dynamic(() => import('./icons/minified/html.svg'));
const Javascript = dynamic(() => import('./icons/minified/javascript.svg'));
const LinkedIn = dynamic(() => import('./icons/minified/linkedIn.svg'));
const Menu = dynamic(() => import('./icons/minified/menu2.svg'));
const Moon = dynamic(() => import('./icons/minified/moon.svg'));
const MySql = dynamic(() => import('./icons/minified/mysql.svg'));
const NextJs = dynamic(() => import('./icons/minified/nextjs.svg'));
const NodeJs = dynamic(() => import('./icons/minified/nodejs.svg'));
const Npm = dynamic(() => import('./icons/minified/npm.svg'));
const Php = dynamic(() => import('./icons/minified/php.svg'));
const PostgreSql = dynamic(() => import('./icons/minified/postgresql.svg'));
const Python = dynamic(() => import('./icons/minified/python.svg'));
const ReactIcon = dynamic(() => import('./icons/minified/react.svg'));
const ReactSpring = dynamic(() => import('./icons/minified/reactSpring.svg'));
const Redux = dynamic(() => import('./icons/minified/redux.svg'));
const Sass = dynamic(() => import('./icons/minified/sass.svg'));
const Typescript = dynamic(() => import('./icons/minified/typescript.svg'));
const Wagtail = dynamic(() => import('./icons/minified/wagtail.svg'));
const Wordpress = dynamic(() => import('./icons/minified/wordpress.svg'));

import { IIconProps } from "../../types/types";

export const allIcons = {
    arrowNext: ArrowNext,
    arrowPrev: ArrowPrev,
    chevronNext: ChevronNext,
    chevronDown: ChevronDown,
    close: Close,
    code: Code,
    css: Css,
    django: Django,
    frojd: Frojd,
    github: Github,
    html: Html,
    javascript: Javascript,
    linkedIn: LinkedIn,
    menu: Menu,
    moon: Moon,
    mysql: MySql,
    nextjs: NextJs,
    nodejs: NodeJs,
    npm: Npm,
    php: Php,
    postgresql: PostgreSql,
    python: Python,
    react: ReactIcon,
    reactSpring: ReactSpring,
    redux: Redux,
    sass: Sass,
    typescript: Typescript,
    wagtail: Wagtail,
    wordpress: Wordpress,
};

const Icon: React.FC<IIconProps> = ({
    type,
    color = 'White',
    modifier = [],
    hoverEffect = false,
}) => {
    const Svg = allIcons[type];

    if (!type) {
        return null;
    }

    const classes = classNames(
        !!modifier.length && modifier.map((x) => x),
        styles['Icon'],
        {
            [styles['Icon--' + color]]: color,
            [styles['Icon--Hover']]: hoverEffect,
        }
    );

    return (
        <span aria-hidden={true} className={classes}>
            <Svg />
        </span>
    );
};

export default Icon;
