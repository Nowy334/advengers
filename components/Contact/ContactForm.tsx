import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return(
    <div className={classes.main__container}>
      <div className={classes.form__header}>
        <h2 className={classes.form__title}>Napisz Do Nas!</h2>
        <span></span>
      </div>

      <form className={classes.form}>
        <div className={classes.form__container}>
          <div className={classes.form__element}>
            <input type="text" id="name" name="user_name" placeholder='Imię' className={classes['form__element--input']} />
          </div>
          <div className={classes.form__element}>
            <input type="text" id="surname" name="user_surname" placeholder='Nazwisko' className={classes['form__element--input']} />
          </div>
        </div>

        <div className={classes.form__container}>
          <div className={classes.form__element}>
            <input type="text" id="phone" name="user_phone" placeholder='Numer telefonu' className={classes['form__element--input']} />
          </div>
          <div className={classes.form__element}>
            <input type="text" id="email" name="user_email" placeholder='Email' className={classes['form__element--input']} />
          </div>
        </div>

        <div className={classes.form__element}>
          <textarea id="description" name="user_description" placeholder='Opis' className={classes['form__element--textarea']} />
        </div>

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;