import React from 'react';
import classes from './AboutItem.module.scss';

const AboutItem: React.FC<{title: string; text: string}> = (props) => {
  return (
    <div className={classes.container}>
      <img src='/assets/icon-design.png'/>
      <h3>{props.title}</h3>
      <span></span>
      <p>{props.text}</p>
    </div>
  )
};

export default AboutItem;