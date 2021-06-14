import PortfolioGridElement from './PortfolioGridElement';
import {PORTFOLIO_PROJECTS} from '../../../data/data';
import classes from './PortfolioGrid.module.scss';

const PortfolioGrid = () => {

  const element = PORTFOLIO_PROJECTS.map((el, index) => {
    return <PortfolioGridElement key ={index} img = {el.img} text={el.text} title={el.title}/>
  });

  return(
    <ul className={classes.container}>
      {element}
    </ul>
  );
}

export default PortfolioGrid;