import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

const ArrowNext = dynamic(() => import('./icons/minified/arrowNext.svg'));
const ArrowPrev = dynamic(() => import('./icons/minified/arrowPrev.svg'));
const ChevronNext = dynamic(() => import('./icons/minified/chevronNext.svg'));
const ChevronDown = dynamic(() => import('./icons/minified/chevronDown.svg'));
const Code = dynamic(() => import('./icons/minified/code.svg'));
const Css = dynamic(() => import('./icons/minified/css.svg'));
const Frojd = dynamic(() => import('./icons/minified/frojd.svg'));
import Django from './icons/minified/django.svg';
import Github from './icons/minified/github.svg';
import Html from './icons/minified/html.svg';
import Javascript from './icons/minified/javascript.svg';
import LinkedIn from './icons/minified/linkedIn.svg';
import Menu from './icons/minified/menu2.svg';
import Moon from './icons/minified/moon.svg';
import MySql from './icons/minified/mysql.svg';
import NextJs from './icons/minified/nextjs.svg';
import NodeJs from './icons/minified/nodejs.svg';
import Npm from './icons/minified/npm.svg';
import Php from './icons/minified/php.svg';
import PostgreSql from './icons/minified/postgresql.svg';
import Python from './icons/minified/Python.svg';
import ReactIcon from './icons/minified/react.svg';
import ReactSpring from './icons/minified/reactSpring.svg';
import Redux from './icons/minified/redux.svg';
import Sass from './icons/minified/Sass.svg';
import Typescript from './icons/minified/typescript.svg';
import Wagtail from './icons/minified/wagtail.svg';
import Wordpress from './icons/minified/wordpress.svg';

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

const Icon = ({
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
