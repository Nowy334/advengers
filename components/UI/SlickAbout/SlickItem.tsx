import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/Ti';
import classes from './SlickItem.module.scss';


const SliderItem: React.FC<{img: string; name: string; title:string; text:string}> = (props) => {
  return(
    <div className={classes.container}>
      <img src='/assets/icon-tes2.png' className={classes.container__img}/>
      <p className={classes.container__text}>{props.text}</p>
      <h4 className={classes.container__name}>{props.name}</h4>
      <p className={classes.container__title}>{props.title}</p>
    </div>
  );
};

export default SliderItem;