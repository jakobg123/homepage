import styles from './Icon.module.scss';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

const ArrowNext = dynamic(() => import('./icons/minified/arrowNext.svg'));
const ArrowPrev = dynamic(() => import('./icons/minified/arrowPrev.svg'));
const ChevronNext = dynamic(() => import('./icons/minified/chevronNext.svg'));
const ChevronDown = dynamic(() => import('./icons/minified/chevronDown.svg'));
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

import {IIconProps} from "../../types/types";

export const allIcons = {
    arrowNext: ArrowNext,
    arrowPrev: ArrowPrev,
    chevronNext: ChevronNext,
    chevronDown: ChevronDown,
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
        <div className={classes}>
            <Svg />
        </div>
    );
};

export default Icon;
