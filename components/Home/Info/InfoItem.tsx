import classes from './InfoItem.module.scss';

type Props = {
  title: string;
  text: string;
  className: string;
}

const InfoItem: React.FC<Props> = ({title, text, className}) => {

  let style: string;

  if(className === 'blue'){
    style = classes.blue;
  }else{
    style = classes.white;
  }


  return (
    <div className={`${classes.container} ${style}`}>
      <h2 className={classes.container__title}>{title}</h2>
      <span></span>
      <p className={classes.container__text}>{text}</p>
      <a className={classes.container__button}>Dowiedz się więcej</a>
    </div>
  );
};

export default InfoItem;