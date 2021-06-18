import classes from './About.module.scss';
import Slick from '../../UI/SlickOffer/Slick';
import {FaQuoteRight, FaQuoteLeft} from 'react-icons/Fa';

const About = () => {
  return (
    <section className={classes.section}>
      <FaQuoteLeft size={130} className={classes.section__quote}/>
      <Slick/>
      <FaQuoteRight size={130} className={classes.section__quote}/>
    </section>
  );
};

export default About;