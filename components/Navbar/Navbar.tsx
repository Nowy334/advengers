import Link from 'next/link'
import classes from './Navbar.module.scss';
import React from 'react';
import { useRouter } from "next/router";
import {useState} from 'react';

const Navbar: React.FC = () => {

  const router = useRouter();
  const [active, setActive] = useState(false);

  let classname = classes.navbar__list;
  const activeMenu = () => {
    setActive(!active);
  };

  if(active){
    classname = classname + ' ' + classes['active-nav'];
  }

  const closeElement = () =>{
    setActive(false);
  }


  return (
    <nav className={classes.navbar}>
      <img className={classes.navbar__img} src='/assets/logo.png' alt= 'logo'/>
      <a href='#' className={classes.toggle_button} onClick={activeMenu}>
        <span className={classes.bar}></span> 
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </a>
      <ul className={classname}>
        <li className={classes['navbar__list--element']}><Link href='/'><a className={`${router.pathname == '/' ? classes.active : ''}`} onClick={closeElement}>Strona główna</a></Link></li>
        <li className={`${classes['navbar__list--element']}`}><Link href='/oferta'><a className={`${router.pathname == '/oferta' ? classes.active : ''}`} onClick={closeElement}>Oferta</a></Link></li>
        <li className={`${classes['navbar__list--element']}`}><Link href='/o-nas'><a className={`${router.pathname == '/o-nas' ? classes.active : ''}`} onClick={closeElement}>O Nas</a></Link></li>
        <li className={`${classes['navbar__list--element']}`}><Link href='/portfolio'><a className={`${router.pathname == '/portfolio' ? classes.active : ''}`} onClick={closeElement}>Portfolio</a></Link></li>
        <li className={`${classes['navbar__list--element']}`}><a href='#'>Blog</a></li>
        <li className={`${classes['navbar__list--element']}`}><Link href='/kontakt'><a className={`${router.pathname == '/kontakt' ? classes.active : ''}`} onClick={closeElement}>Kontakt</a></Link></li>
      </ul>
      <a className={classes.navbar__button} href='#'>Zamów wycene już teraz</a>
    </nav>
  );
}

export default Navbar;