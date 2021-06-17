import classes from './Footer.module.scss';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/Ti';

const Footer = () => {
  return(
    <footer className={classes.footer}>
      <p className={classes.footer__text}>&copy;2021 <span>Advengers.</span> All rights reserved.</p>
      <div className={classes.footer__container}>
        <a href='#'><TiSocialFacebook size={20} className={classes['footer__container-icon']}/></a>
        <a href='#'><TiSocialTwitter size={20} className={classes['footer__container-icon']}/></a>
        <a href='#'><TiSocialInstagram size={20} className={classes['footer__container-icon']}/></a>
      </div>
    </footer>
  );
}

export default Footer;