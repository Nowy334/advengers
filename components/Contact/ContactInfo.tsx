import ContactForm from './ContactForm';
import ContactDescription from './ContactDescription';
import classes from './ContactInfo.module.scss'

const ContactInfo = () => {
  return(
    <section className={classes.section}>
      <ContactDescription/>
      <ContactForm/>
    </section>
  );
};

export default ContactInfo;