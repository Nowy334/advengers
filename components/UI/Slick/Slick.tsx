import Slider from "react-slick";
import classes from './Slick.module.scss';
import SlickItem from './SlickItem';
import {ABOUT_ITEMS} from '../../../data/data';

const Slick = () => {

  const elements = ABOUT_ITEMS.map((el, index) => {
    return <SlickItem key={index} name={el.name} title={el.title} text={el.text} img={el.img} />
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: classes.slide,
    autoplay: true
  };

  return(
    <div className={classes.container}>
      <div className={classes.container__out}>
        <Slider {...settings}>
            {elements}
        </Slider>
      </div>
    </div>
  );

};

export default Slick;