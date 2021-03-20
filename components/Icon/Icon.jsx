import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

// const Code = dynamic(() =>
//   import('./icons/minified/code.svg').then((mod) => {
//     console.log(mod.default());
//     mod.default();
//   })
// );

// const Css = dynamic(() =>
//   import('./icons/minified/css.svg').then((mod) => mod.ReactComponent)
// );
// const Django = dynamic(() =>
//   import('./icons/minified/django.svg').then((mod) => mod.ReactComponent)
// );
// const Github = dynamic(() =>
//   import('./icons/minified/github.svg').then((mod) => mod.ReactComponent)
// );
// const Html = dynamic(() =>
//   import('./icons/minified/html.svg').then((mod) => mod.ReactComponent)
// );
// const Javascript = dynamic(() =>
//   import('./icons/minified/javascript.svg').then((mod) => mod.ReactComponent)
// );
// const Moon = dynamic(() =>
//   import('./icons/minified/moon.svg').then((mod) => mod.ReactComponent)
// );
// const MySql = dynamic(() =>
//   import('./icons/minified/mysql.svg').then((mod) => mod.ReactComponent)
// );
// const NextJs = dynamic(() =>
//   import('./icons/minified/nextjs.svg').then((mod) => mod.ReactComponent)
// );
// const NodeJs = dynamic(() =>
//   import('./icons/minified/nodejs.svg').then((mod) => mod.ReactComponent)
// );
// const Npm = dynamic(() =>
//   import('./icons/minified/npm.svg').then((mod) => mod.ReactComponent)
// );
// const Php = dynamic(() =>
//   import('./icons/minified/php.svg').then((mod) => mod.ReactComponent)
// );
// const PostgreSql = dynamic(() =>
//   import('./icons/minified/postgresql.svg').then((mod) => mod.ReactComponent)
// );
// const Python = dynamic(() =>
//   import('./icons/minified/Python.svg').then((mod) => mod.ReactComponent)
// );
// const ReactIcon = dynamic(() =>
//   import('./icons/minified/react.svg').then((mod) => mod.ReactComponent)
// );
// const ReactSpring = dynamic(() =>
//   import('./icons/minified/reactSpring.svg').then((mod) => mod.ReactComponent)
// );
// const Redux = dynamic(() =>
//   import('./icons/minified/redux.svg').then((mod) => mod.ReactComponent)
// );
// const Sass = dynamic(() =>
//   import('./icons/minified/Sass.svg').then((mod) => mod.ReactComponent)
// );
// const Typescript = dynamic(() =>
//   import('./icons/minified/typescript.svg').then((mod) => mod.ReactComponent)
// );
// const Wagtail = dynamic(() =>
//   import('./icons/minified/wagtail.svg').then((mod) => mod.ReactComponent)
// );
// const Wordpress = dynamic(() =>
//   import('./icons/minified/wordpress.svg').then((mod) => mod.ReactComponent)
// );

import ArrowNext from './icons/minified/arrowNext.svg';
import ChevronNext from './icons/minified/chevronNext.svg';
import ChevronDown from './icons/minified/chevronDown.svg';
import Code from './icons/minified/code.svg';
import Css from './icons/minified/css.svg';
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
  chevronNext: ChevronNext,
  chevronDown: ChevronDown,
  code: Code,
  css: Css,
  django: Django,
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
  // const classes = classNames(
  //   modifier.map((x) => styles[x] + ' '),
  //   styles['Icon'],
  //   {
  //     [styles['Icon--' + color]]: color,
  //   },
  //   modifier.map((x) => styles[x])
  // );

  return (
    // <div className={styles['Icon'] + ' ' + styles[modifier]}>
    //   <Svg />
    // </div>
    <div className={classes}>
      <Svg />
    </div>
    // <div
    //   className={classNames(styles['Icon'], [styles['Tab__Height']], {
    //     [styles['Icon--' + color]]: color,
    //   })}>
    //   <Svg />
    // </div>
  );
};

export default Icon;
