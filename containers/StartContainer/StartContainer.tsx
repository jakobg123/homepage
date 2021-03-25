import styles from './StartContainer.module.scss';
import classNames from 'classnames';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Button from '../../components/Button';
import Internship from '../../components/Internship';
import Image from '../../components/Image';
const Knowledge = dynamic(() => import('../../components/Knowledge'));

import { IImageProps, IMediaQueries } from '../../types/types';
import { useInView } from 'react-intersection-observer';

const StartContainer = ({ data, knowledge }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const [showKnowledge, setShowKnowledge] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowKnowledge(true);
    }
    return;
  }, [inView]);

  const {
    heading,
    greeting,
    preamble,
    entryText,
    ctaText,
    cta,
    technologies,
    internship,
  } = data;

  const presImage: IImageProps = {
    src: '/images/temp/small150x150.jpg',
    alt: 'Jakob Gauffin, d.v.s han som gjort sidan.',
    width: 150,
    height: 150,
  };

  const mediaQueries: IMediaQueries[] = [
    {
      minWidth: 1280,
      src: '/images/temp/large350x350.jpg',
    },
    {
      minWidth: 768,
      src: '/images/temp/medium250x250.jpg',
    },
  ];

  return (
    <div className={styles['StartContainer']}>
      <div className={styles['StartContainer__Grid']}>
        <h1 className={styles['StartContainer__Title']}>{heading}</h1>

        <div className={styles['StartContainer__EntryWrapper']}>
          <em className={styles['StartContainer__Em']}>{greeting}</em>
          <div
            className={styles['StartContainer__Preamble']}
            dangerouslySetInnerHTML={{ __html: preamble }}></div>
          <div className={styles['StartContainer__ParagraphPres']}>
            <div className={styles['StartContainer__PresImageWrapper']}>
              <Image {...presImage} mediaQueries={mediaQueries} round />
            </div>
            <h2>Om sidan</h2>
            <p>
              Sidan har jag byggt för att showcase:a lite av det jag har lärt
              mig under den 2-åriga YH-utbildningen, som bl.a. består av en
                lärorik <strong>6 månaders LIA (praktik)</strong> på{' '}
              <a href="https://www.frojd.se">
                digitalbyrån Fröjd</a>.
              </p>
            <p>
              Sajten är fortfarande under uppbyggnad, men kommer snart ha mer
                innehåll så att du kan läsa om <em>hur</em> jag byggt den.
              </p>
            <p>
              Jag kan redan nu avslöja att den är gjord i Next.js och jag
              arbetar även med tillgänglighetsanpassning och
              prestandaoptimering.
              </p>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={classNames(
          styles['StartContainer__Block'],
          styles['StartContainer__Block--White']
        )}>
        <div className={styles['StartContainer__CtaWrapper']}>
          <div
            className={styles['StartContainer__Paragraph']}
            dangerouslySetInnerHTML={{ __html: ctaText }}></div>
          <div className={styles['StartContainer__ButtonWrapper']}>
            <Button label={cta.label} icon={cta.icon} href={cta.href} />
          </div>
        </div>
        <div
          className={styles['StartContainer__TextWrapper']}>
          <h2 id="technology" className={styles['StartContainer__Subtitle']}>
            {technologies.heading}
          </h2>
          <div
            className={styles['StartContainer__Paragraph']}
            dangerouslySetInnerHTML={{ __html: technologies.html }}></div>
          <div
            className={styles['StartContainer__Paragraph']}
            dangerouslySetInnerHTML={{ __html: technologies.html2 }}></div>
        </div>
        <div
          className={classNames(styles['StartContainer__Background'], {
            [styles['StartContainer__Background--White']]: !inView,
          })}>
          {!!showKnowledge && (
            <div className={styles['StartContainer__KnowledgeWrapper']}>
              <Knowledge knowledge={knowledge} />
            </div>
          )}
        </div>
      </div>
      <div
        className={classNames(
          styles['StartContainer__Block'],
          styles['StartContainer__Block--Dark']
        )}>
        <div className={styles['StartContainer__InternshipWrapper']}>
          <Internship
            data={internship}
            inView={inView && showKnowledge ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default StartContainer;
