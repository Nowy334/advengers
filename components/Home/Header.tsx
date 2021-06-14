import Typical from 'react-typical';
import classes from './Header.module.scss';

const Home = () => {
  return (
  <header className={classes.header}>
    <h1>Advengers</h1>
      <Typical 
      loop={Infinity}
      wraper="b"
      steps={[
        'Strzeżemy biznesów', 2000,
        'Walczymy marketingiem', 2000
      ]}/>
  </header>)
}

export default Home;