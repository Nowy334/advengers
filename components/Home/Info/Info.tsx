import InfoItem from './InfoItem';
import React from 'react';
import DATA from '../../../data/data';
import classes from './Info.module.scss';
import { useMediaQuery } from 'react-responsive';

const Info = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  return(
    <section className={classes.section}>
      <InfoItem text= {DATA[0].text} title = {DATA[0].title} className='blue'/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className='white'/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className={isMobile ? 'blue' : 'white'}/>
      <InfoItem text= {DATA[1].text} title = {DATA[1].title} className={isMobile ? 'white' : 'blue'}/>
    </section>
  );
};

export default Info;