import classes from './Experience.module.scss';

const Experience = () => {
  return(
    <section className={classes.section}>
      <div className={`${classes['section__element']} ${classes['section__element-1']}`}>
        <img className={classes['section__element--img']} src='assets/apple-team.jpg'/>
        <div className={classes['section__element--container']}>
          <img className={classes['section__element--img-small']} src='assets/placeholder.png'/>
          <p className={classes['section__element--container-title']}>3D Mockups</p>
        </div>
        <p className={classes['section__element--container-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
      </div>

      <div className={`${classes['section__element']} ${classes['section__element-2']}`} >
        <img className={classes['section__element--img']} src='assets/about-2.jpg'/>
        <div className={classes['section__element--container']}>
          <img className={classes['section__element--img-small']} src='assets/placeholder.png'/>
          <p className={classes['section__element--container-title']}>Responsive Web</p>
        </div>
        <p className={classes['section__element--container-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
      </div>

      <div className={`${classes['section__element']} ${classes['section__element-3']}`}>
        <div className={classes['section__element--container']}>
          <p className={classes['section__element--container-text1']}>Dlaczego my?</p>
          <span></span>
        </div>
        <h2 className={classes['section__element--container-title2']}>Doświadczenie</h2>
        <p className={classes['section__element--container-text2-main']}>Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <p className={classes['section__element--container-text2']}>Sed porttitor erat vehicula elit sodales dapibus. Nulla a ex aliquet, pulvinar eros ac, tristique neque. Morbi malesuada consectetur orci a aliquam. Nunc risus felis, mattis eget sapien quis, venenatis sagittis orci. Mauris id ornare nisi. </p>
        <a className={classes['section__element--container-button']} href='#'>Kontakt</a>
      </div>
    </section>
  );
};
export default Experience;