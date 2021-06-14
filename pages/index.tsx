import React from 'react';
import Header from '../components/Home/Header';
import Info from '../components/Home/Info/Info';
import About from '../components/Home/About/About';
import Portfolio from '../components/Home/Portfolio/Portfolio';

const HomePage:React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Info/>
        <About/>
        <Portfolio/>
      </main>
    </>
  )
}

export default HomePage;