import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/Ti';
import classes from './SlickItem.module.scss';


const SliderItem: React.FC<{img: string; name: string; title:string; text:string; type?: string}> = (props) => {
  return(
    <div className={classes.container}>
      <picture>
        <source srcSet={`${props.img}.webp`} type="image/webp" />
        <source media="(max-width: 600px)" srcSet={`${props.img}-phone.webp`} type="image/webp" />
        <source media="(max-width: 600px)" srcSet={`${props.img}-phone.jpg`} />
        <img src={`${props.type ? props.img+'.png' : props.img+'.jpg'}`} className={classes.container__img} alt='person'/>
      </picture>
      <p className={classes.container__text}>{props.text}</p>
      <h4 className={classes.container__name}>{props.name}</h4>
      <p className={classes.container__title}>{props.title}</p>
    </div>
  );
};

export default SliderItem;