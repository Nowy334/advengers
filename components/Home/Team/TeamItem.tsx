import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/Ti';
import classes from './TeamItem.module.scss';


const TeamItem: React.FC<{img: string; name: string; title:string; text:string}> = (props) => {
  return(
    <div className={classes.container}>
      <img src={props.img} className={classes.container__img}/>
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

export default TeamItem;