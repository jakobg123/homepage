import React, { PureComponent } from 'react';
import styles from './Footer.module.scss';

import Icon from '../Icon';
import Link from 'next/link';

// class Footer extends PureComponent {
//   //   shouldComponentUpdate(nextProps, nextState) {
//   //     return false;
//   //   }

//   render() {
//     // console.log('FOOOTER');
//     return (
//       <div className={styles['Footer']}>
//         <h2>Här är footern</h2>
//       </div>
//     );
//   }
// }
const Footer = () => {
  return (
    <div className={styles['Footer']}>
      <div className={styles['Footer__Grid']}>
        <div className={styles['Footer__Content']}>
          <h2 className={styles['Footer__Title']}>Kom i kontakt</h2>
          <div className={styles['Footer__ContentWrapper']}>
            <FooterColumn
              key={0}
              title={'Skriv gärna till mig på LinkedIn'}
              links={[
                {
                  type: 'linkedIn',
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/jakob-gauffin-27a4a1186/',
                },
              ]}
            />
            <FooterColumn
              key={1}
              title={'Se mer kod på GitHub'}
              links={[
                {
                  type: 'github',
                  label: 'Sajtens repo',
                  href: 'https://github.com/jakobg123/homepage',
                },
                {
                  type: 'github',
                  label: 'Mitt skolkonto',
                  href: 'https://github.com/iths-jakob-gauffin',
                },
              ]}
            />
            {/* <div className={styles['Footer__Column']}>
              <h3 className={styles['Footer__Heading']}>Titta mer på GitHub</h3>

              <ul className={styles['Footer__IconLinkWrapper']}>
                <li className={styles['Footer__IconLinkWrapper']}>
                  <IconLink type={'github'} label={'Sajtens repo'} />
                </li>
                <li className={styles['Footer__IconLinkWrapper']}>
                  <IconLink type={'github'} label={'Mitt skolrepo'} />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterColumn = ({ title, links = [] }) => {
  return (
    <div className={styles['Footer__Column']}>
      {!!title && <h3 className={styles['Footer__Heading']}>{title}</h3>}

      {!!links.length && (
        <ul className={styles['Footer__IconLinkWrapper']}>
          {links.map((link, index) => (
            <li key={index} className={styles['Footer__IconLinkWrapper']}>
              <IconLink type={link.type} label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const IconLink = ({ type, label, href }) => {
  return (
    <div className={styles['IconLink']}>
      <a href={href} className={styles['IconLink__Anchor']}>
        <span className={styles['IconLink__IconWrapper']} aria-hidden="true">
          <Icon
            type={type}
            modifier={['IconLink__HoverColor']}
            color={'Primary'}
            hoverEffect
          />
        </span>
        {label}
      </a>
    </div>
  );
};

export default Footer;
