import classes from './InfoBar.module.scss';

const InfoBar = () => {
  return (
    <section className={classes.container}>
      <div className={classes['container__element-1']}>
        <p className={classes['container__element-1--call']}>Zadzwoń już teraz</p>
        <p className={classes['container__element-1--phone']}>+48 517 383 331</p>
        <span></span>
        <p className={classes['container__element-1--address']}>Katowice ul. Mariacka 30</p>
      </div>
      <div className={classes['container__element-2']}>
        <h4 className={classes['container__element-2--title']}>Jesteśmy na rynku od</h4>
        <span></span>
        <p className={classes['container__element-2--year']}>2010</p>
        <p className={classes['container__element-2--text']}>Torem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div className={classes['container__element-3']}></div>
    </section>
  );
};

export default InfoBar;