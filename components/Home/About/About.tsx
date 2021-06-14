import classes from './About.module.scss';
import AboutItem from './AboutItem';
import {DATA_ABOUT} from '../../../data/data';

const About = () => {

 const items = DATA_ABOUT.map((el, index)=> {
    return <AboutItem title={el.title} text={el.text} key={index}/>
  });

  return(
    <section className={classes.section}>
      <h2 className={classes.section__title}>Czym się zajmujemy</h2>
      <span className={classes.section__line}></span>
      <div className={classes.section__container}>
        {items}
      </div>
    </section>
  );
};

export default About;