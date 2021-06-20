import classes from './Player.module.scss';

const Player = () => {
  return(
    <section className={classes.section}>
      <div className={classes.section__frame}>
        <div className={classes.section__video}>
          <iframe src="https://player.vimeo.com/video/419568482" width="100%" height="100%" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
      <div className={classes.section__info}>
        <div className={classes['section__info--element']}>
          <p className={classes['section__info--element-number']}>90</p>
          <p className={classes['section__info--element-text']}>SKOŃCZONYCH PROJEKTÓW</p>
        </div>
        <div className={classes['section__info--element']}>
          <p className={classes['section__info--element-number']}>120</p>
          <p className={classes['section__info--element-text']}>ZADOWOLONYCH KLIENTÓW</p>
        </div>
        <div className={classes['section__info--element']}>
          <p className={classes['section__info--element-number']}>50</p>
          <p className={classes['section__info--element-text']}>CZEGOŚ INNEGO</p>
        </div>
        <div className={classes['section__info--element']}>
          <p className={classes['section__info--element-number']}>240</p>
          <p className={classes['section__info--element-text']}>WYPITEJ KAWY</p>
        </div>
      </div>
    </section>
  );
};

export default Player;