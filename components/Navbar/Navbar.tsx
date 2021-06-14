import Link from 'next/link'
import classes from './Navbar.module.scss';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <img className={classes.navbar__img} src='/assets/logo.png' alt= 'logo'/>
      <ul className={classes.navbar__list}>
        <li className={classes['navbar__list--element']}><Link href='/'><a>Strona główna</a></Link></li>
        <li className={classes['navbar__list--element']}><Link href='/'><a>Oferta</a></Link></li>
        <li className={classes['navbar__list--element']}><Link href='/'><a>O Nas</a></Link></li>
        <li className={classes['navbar__list--element']}><Link href='/'><a>Portfolio</a></Link></li>
        <li className={classes['navbar__list--element']}><a href='#'>Blog</a></li>
        <li className={classes['navbar__list--element']}><Link href='/kontakt'><a>Kontakt</a></Link></li>
      </ul>
      <a className={classes.navbar__button} href='#'>Zamów wycene już teraz</a>
    </nav>
  );
}

export default Navbar;