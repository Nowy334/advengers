import Header from './Header';
import ServiceItem from './ServiceItem';
import {SERVICE_ITEMS} from '../../../data/data';
import classes from './Services.module.scss';

const Services = () => {

  const itemsPartOne = SERVICE_ITEMS.slice(0,4).map((el, index) =>{
    return <ServiceItem key = {index} title= {el.title} text={el.text} last={el.last}/>
  })

  const itemsPartTwo = SERVICE_ITEMS.slice(4,8).map((el, index) =>{
    return <ServiceItem key = {index} title= {el.title} text={el.text} last={el.last}/>
  })
  return (
    <section className={classes.section}>
      <Header/>
      <div className={classes.container}>
        <div>
          {itemsPartOne}
        </div>
        <div>
          {itemsPartTwo}
        </div>
      </div>
    </section>
  );
};

export default Services;