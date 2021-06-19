import {FaRegListAlt} from 'react-icons/Fa';
import classes from './header.module.scss';

const Header = () => {
  return(
    <div className={classes.container}>
      <div className={classes.container__header}>
        <div className={classes['container__header--background']}>
          <FaRegListAlt size={40} className={classes['container__header--icon']} />
        </div>
      </div>
      <div className={classes.container__main}>
        <p className={classes['container__main--text1']}>Wybierz swoją usługę</p>
        <h2 className={classes['container__main--title']}>Wybierz co możemy dla ciebie zrobić</h2>
        <p className={classes['container__main--text']}>Torem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
    </div>
  );
};

export default Header;