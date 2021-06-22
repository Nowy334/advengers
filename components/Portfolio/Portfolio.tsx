import {PORTFOLIO_PROJECTS} from '../../data/data';
import PortfolioItem from './PortfolioItem';
import classes from './Portfolio.module.scss';

const Portfolio = () => {

  const elements = PORTFOLIO_PROJECTS.map((el, index) => {
    return <PortfolioItem img={el.img} key = {index}/>
  })
  return(
    <section className={classes.section}>
      <ul className={classes.portfolio}>
        {elements}
      </ul>
    </section>
  );
};

export default Portfolio;