import React from 'react';
import Header from '../components/Home/Header';
import Info from '../components/Home/Info/Info';
import About from '../components/Home/About/About';
import Portfolio from '../components/Home/Portfolio/Portfolio';
import Team from '../components/Home/Team/Team';
import TrustUs from '../components/Home/TrustUs/TrustUs';

const HomePage:React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Info/>
        <About/>
        <Portfolio/>
        <Team/>
        <TrustUs/>
      </main>
    </>
  )
}

export default HomePage;