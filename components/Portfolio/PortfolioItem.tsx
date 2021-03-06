import React from 'react';
import classes from './PortfolioItem.module.scss';

const PortfolioItem:React.FC<{img: string}> = ({img}) => {
  return(
    <li className={classes.element}>
      <a href='#'>
        <span></span>
       <img src = {`${img}.jpg`} className={classes.element__img} alt='project'/>
      </a>
    </li>
  );
};

export default PortfolioItem;