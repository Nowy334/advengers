import classes from './PortfolioHeader.module.scss';

const PortfolioHeader = () => {
  return(
  <div className={classes.header}>
    <h2 className={classes.header__title}>Portfolio</h2>
    <span></span>
    <p className={classes.header__text}>Wszystko zaczyna się tutaj.</p>
  </div>);
};

export default PortfolioHeader;