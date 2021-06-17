import { ImLocation2 } from 'react-icons/im';
import {  FaPhoneAlt } from 'react-icons/Fa';
import {  HiMail } from 'react-icons/Hi';
import classes from './Information.module.scss';

const Information = () => {
  return (
    <section className={classes.section}>
      <div className={classes.section__element}>
        <img src='/assets/logo-2.png' className={classes.section__img}/>
        <ul className={classes.section__list}>
          <li className={classes['section__list--item']}>
            <ImLocation2 size={15} className={classes['section__list--item-icon']}/>
            <p className={classes['section__element--text']}>40 Baria Sreet, NewYork City, US</p>
          </li>
          <li className={classes['section__list--item']}>
            <FaPhoneAlt size={12} className={classes['section__list--item-icon']}/>
            <p className={classes['section__element--text']}>001-1234-88888</p>
          </li>
          <li className={classes['section__list--item']}>
            <HiMail size={17} className={classes['section__list--item-icon']}/>
            <p className={classes['section__element--text']}>info.deercreative@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className={classes.section__element}>
        <h2 className={classes['section__element--title']}>Ważne linki</h2>
      </div>
      <div className={classes.section__element}>
        <h2 className={classes['section__element--title']}>Znajdziesz nas</h2>
        <p className={classes['section__element--text']}>Colombia Gets a Business Makeover</p>
      </div>
      <div className={classes.section__element}>
        <h2 className={classes['section__element--title']}>Wiadomości</h2>
        <p className={classes['section__element--text']}>Lorem ipsum dolor sit amet, consect-etur adipiscing elit, sed ut labore.</p>
      </div>
    </section>
  );
}

export default Information;