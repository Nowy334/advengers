import React from 'react';
import classes from './PowerItem.module.scss';

const PowerItem: React.FC<{img: string, title: string, text:string; dark?: boolean}> = (props) => {

  let classname = classes.item;
  if(props.dark){
    classname = classname + ' ' + classes.dark;
  }

  return (
    <div className={classname}>
      <img className={classes.item__img} src={props.img} alt='power'/>
      <h2 className={classes.item__title}>{props.title}</h2>
      <p className={classes.item__text}>{props.text}</p>
    </div>
  );
};

export default PowerItem;