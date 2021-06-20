import Header from '../../components/UI/Header/Header';
import React from 'react';
import Contact from '../../components/Contact/ContactInfo';
import Call from '../../components/UI/Call/Call';
import Information from '../../components/UI/Information/Information';
import Footer from '../../components/Footer/Footer';
import Team from '../../components/Home/Team/Team';
import Experience from '../../components/AboutUs/Experience/Experience';
import Player from '../../components/AboutUs/Player/Player';
import AboutUs from '../../components/AboutUs/AboutUs/AboutUs';

const AboutUsPage = () => {
  return(
    <>
      <Header title= 'Poznaj nas lepiej!' text = 'Lorem ipsum sit consectetur sadipiscing'/>
      <main>
        <AboutUs/>
        <Player/>
        <Experience/>
        <Team/>
        <Contact/>
        <Call/>
        <Information/>
        <Footer/>
      </main>
    </>
  );
};

export default AboutUsPage;