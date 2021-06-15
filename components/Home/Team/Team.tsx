import Slider from "react-slick";
import classes from './Team.module.scss';
import TeamItem from './TeamItem';
import TeamHeader from './TeamHeader';
import {ABOUT_ITEMS} from '../../../data/data';

const Team = () => {

  const elements = ABOUT_ITEMS.map((el, index) => {
    return <TeamItem key={index} name={el.name} title={el.title} text={el.text} img={el.img} />
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
    <section className={classes.section}>
      <TeamHeader/>
      <div className={classes.container}>
        <div className={classes.container__out}>
          <Slider {...settings}>
            {elements}
        </Slider>
      </div>
    </div>
  </section>
  );

};

export default Team;