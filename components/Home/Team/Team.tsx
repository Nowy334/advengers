import classes from './Team.module.scss';
import TeamHeader from './TeamHeader';
import Slick from '../../UI/Slick/Slick';

const Team = () => {
  return(
    <section className={classes.section}>
      <TeamHeader/>
      <Slick/>
    </section>
  );

};

export default Team;