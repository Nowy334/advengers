import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/Ti';
import classes from './SlickItem.module.scss';


const SliderItem: React.FC<{img: string; name: string; title:string; text:string, type?:string}> = (props) => {
  return(
    <div className={classes.container}>
      <picture>
      <source srcSet={`${props.img}.webp`} type="image/webp" />
        <source media="(max-width: 600px)" srcSet={`${props.img}-phone.webp`} type="image/webp"/>
        <source media="(max-width: 600px)" srcSet={`${props.img}-phone.jpg`} />
        <img src={`${props.type ? props.img+'.png' : props.img+'.jpg'}`} className={classes.container__img} alt='person'/>
      </picture>
      <h4 className={classes.container__name}>{props.name}</h4>
      <p className={classes.container__title}>{props.title}</p>
      <p className={classes.container__text}>{props.text}</p>
      <div className={classes.container__social}>
        <a href="#"><TiSocialFacebook size= {20} className={classes['container__social-item']}/></a>
        <a href="#"><TiSocialTwitter size= {20} className={classes['container__social-item']}/></a>
        <a href="#"><TiSocialInstagram size= {20} className={classes['container__social-item']}/></a>
      </div>
    </div>
  );
};

export default SliderItem;