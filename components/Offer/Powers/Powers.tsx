import {OFFER_ITEMS} from '../../../data/data';
import PowerItem from './PowerItem';
import classes from './Powers.module.scss';

const Powers = () => {

  const elements = OFFER_ITEMS.map((el, index) => {
    return <PowerItem img ={el.img} title={el.title} text={el.text} dark={el.dark} key={index}/>
  });

  return (
    <section className={classes.container}>
      {elements}
    </section>
  );
};

export default Powers;