import classes from './AboutUs.module.scss';
import Slick from '../../UI/SlickAbout/Slick';

const AboutUs = () => {
  return(
    <section className={classes.section}>
      <div className={classes['section__element-1']}>
        <h2 className={classes.section__title}>O nas</h2>
        <p className={classes.section__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. Ut enim exercitation aliquip ex ea commodo consequat aute irure voluptat.</p>
      </div>
      <Slick/>
    </section>
  );
};

export default AboutUs;