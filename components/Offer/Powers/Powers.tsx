import PowerItem from './PowerItem';
import classes from './Powers.module.scss';
import React from 'react';

const Powers:React.FC<{data: {img: string; title:string; text:string; dark?:boolean}[]}> = (props) => {

  const elements = props.data.map((el, index) => {
    return <PowerItem img ={el.img} title={el.title} text={el.text} dark={el.dark} key={index}/>
  });

  return (
    <section className={classes.container}>
      {elements}
    </section>
  );
};

export default Powers;