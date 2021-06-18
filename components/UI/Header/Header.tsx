import classes from './Header.module.scss';
import React from 'react';

const Header: React.FC<{title: string, text: string}> = (props) => {
  return(
    <header className={classes.header}>
      <h1 className={classes.header__title}>{props.title}</h1>
      <p className={classes.header__text}>{props.text}</p>
    </header>
  );
};

export default Header;