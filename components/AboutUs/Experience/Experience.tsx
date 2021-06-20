import Powers from '../../Offer/Powers/Powers'
import { ABOUTUS_ITEMS } from '../../../data/data';
import classes from './Experience.module.scss';

const Experience = () => {
  return(
    <section className={classes.section}>
      <div className={classes.section__header}>
        <h2 className={classes['section__header--title']}>20 Year of Experience</h2>
        <p className={classes['section__header--text']}>Lorem ipsum dolor sit amet, adipscing elit, do eiusmod incididunut labore et dolore magna aliqua.</p>
      </div>
      <Powers data = {ABOUTUS_ITEMS}/>
    </section>
  );
};

export default Experience;