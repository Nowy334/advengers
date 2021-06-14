import React, {useState} from 'react';
import classes from './PortfolioGridElement.module.scss';

const PortfolioGridElement:React.FC <{img: string; title:string; text:string}> = (props) => {

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  let className = classes.element__hover;

  if(hovered){
    className = className + ' ' + classes.active;
  }

  return(
    <li className={classes.element} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <img src={props.img} className={classes.element__img}/>
      <div className={className}>
        <h4 className={classes['element__hover--title']}><a href='#'>{props.title}</a></h4>
        <p className={classes['element__hover--text']}>{props.text}</p>
      </div>
    </li>
  );
}

export default PortfolioGridElement;