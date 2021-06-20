import classes from './ContactDescription.module.scss';
import {AiTwotonePhone, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail} from 'react-icons/Ai';
import {FaFacebookF, FaMapMarkerAlt} from 'react-icons/Fa';

const ContactDescription = () => {
  return(
    <div className={classes.container}>
      <p className={classes.container__text}>MOŻESZ DO NAS NAPISAĆ</p>
      <h2 className={classes.container__title}>Kontakt</h2>
      <span></span>
      <p className={classes.container__text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat justo sed efficitur cursus. Mauris fringilla quam vitae lacinia viverra. Mauris eros dolor, pellentesque sed luctus.</p>
      <div className={classes.container__icon}>
        <div className={classes['container__icon-elements']}>
          <div className={classes['container__icon-element']}>
            <FaMapMarkerAlt size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>123, Any Street North</p>
          </div>
          <div className={classes['container__icon-element']}>
            <AiTwotonePhone size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>+1 234 567 8902</p>
          </div>
          <div className={classes['container__icon-element']}>
            <AiOutlineMail size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>contact@yoursite.com</p>
          </div>
        </div>
        <div className={classes['container__icon-elements']}>
          <div className={classes['container__icon-element']}>
            <FaFacebookF size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>yourfbusername</p>
          </div>
          <div className={classes['container__icon-element']}>
            <AiOutlineTwitter size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>@twitterhandle</p>
          </div>
          <div className={classes['container__icon-element']}>
            <AiOutlineInstagram size={20} className={classes['container__icon-element--icon']}/>
            <p className={classes['container__icon-element--text']}>insta_account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDescription;