import React, { PureComponent } from 'react';
import styles from './Footer.module.scss';

class Footer extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return false;
  //   }

  render() {
    // console.log('FOOOTER');
    return (
      <div className={styles['Footer']}>
        <h2>Här är footern</h2>
      </div>
    );
  }
}
// const Footer = () => {
//   return (
//     <div className={styles['Footer']}>
//       <h2>Här är footern</h2>
//     </div>
//   );
// };

export default Footer;
