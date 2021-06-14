import InfoItem from './InfoItem';
import React from 'react';
import DATA from '../../../data/data';
import classes from './Info.module.scss';

const Info = () => {
  return(
    <section className={classes.section}>
      <InfoItem text= {DATA[0].text} title = {DATA[0].title} className='blue'/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className='white'/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className='white'/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className='blue'/>
    </section>
  );
};

export default Info;