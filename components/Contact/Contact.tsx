import React from 'react';
import classes from './Contact.module.scss';
import {FaPhoneAlt, FaPaperPlane} from 'react-icons/Fa';
import {BiWorld} from 'react-icons/Bi';
import ContactInfo from './ContactInfo';


const Contact = () => {
  return(
    <>
      <section className={classes.section}>
        <div className={classes.section__element}>
          <a href='tel:+48517383331' className={classes['section__element-icon-link']}>
            <div className={classes['section__element-icon']}>
              <FaPhoneAlt size={30}/>
            </div>
          </a>
          <a className={classes['section__element-text-link']} href='tel:+48517383331'>+48 517 383 331</a>
        </div>
        <div className={classes.section__element}>
          <a className={classes['section__element-icon-link']} href='#'>
            <div className={classes['section__element-icon']}>
              <BiWorld size={35}/>
            </div>
          </a>
          <a className={classes['section__element-text-link']} href='#'>Katowice ul. Mariacka 30</a>
        </div>
        <div className={classes.section__element}>
          <a href='#' className={classes['section__element-icon-link']}>
            <div className={classes['section__element-icon']}>
              <FaPaperPlane size={30}/>
            </div>
          </a>
          <a className={classes['section__element-text-link']} href='#'>Napisz do nas!</a>
        </div>
      </section>
      <ContactInfo/>
    </>
  );
}

export default Contact;