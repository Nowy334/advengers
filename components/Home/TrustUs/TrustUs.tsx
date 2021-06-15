import classes from './TrustUs.module.scss';

const TrustUs = () => {
  return(
    <section className={classes.section}>
      <h2 className={classes.section__title}>Zaufali nam</h2>
      <span className={classes.section__line}></span>
      <div className={classes.section__container}></div>
    </section>
  );
};

export default TrustUs;