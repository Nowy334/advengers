import Slider from "react-slick";
import classes from './Slick.module.scss';
import SlickItem from './SlickItem';
import {ABOUT_ITEMS} from '../../../data/data';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.arrow}`}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.arrow}`}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

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
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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