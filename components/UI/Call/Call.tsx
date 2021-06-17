import classes from './Call.module.scss';

const Call = () => {
  return(
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.container__text}>Nie zwlekaj z decyzją</p>
        <h2 className={classes.container__title}>Zadzwoń już teraz</h2>
      </div>
      <span>
        <a href='#' className={classes.container__btn}>Zadzwon</a>
      </span>
    </section>
  );
}

export default Call;