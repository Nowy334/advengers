import {FaLongArrowAltRight} from 'react-icons/Fa';
import classes from './ServiceItem.module.scss';
import React from 'react';

const ServiceItem:React.FC<{title: string, text: string, last?: boolean}> = (props) => {
  return(
    <>
      <div className={classes.container}>
        <div className={classes.container__element}>
          <h3 className={classes['container__element--title']}>{props.title}</h3>
          <p className={classes['container__element--text']}>{props.text}</p>
        </div>
        <a href='#' className={classes.container__button}><FaLongArrowAltRight size={20} className={classes.container__icon}/></a>
      </div>
      {!props.last && <span className={classes.span}></span>}
    </>
  );
};

export default ServiceItem;