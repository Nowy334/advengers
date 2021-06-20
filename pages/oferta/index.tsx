import React from 'react';
import Header from '../../components/UI/Header/Header';
import Powers from '../../components/Offer/Powers/Powers';
import InfoBar from '../../components/Offer/InfoBar/InfoBar';
import Experience from '../../components/Offer/Experience/Experience';
import About from '../../components/Offer/About/About';
import Services from '../../components/Offer/Services/Services';
import Call from '../../components/UI/Call/Call';
import Information from '../../components/UI/Information/Information';
import Footer from '../../components/Footer/Footer';
import {OFFER_ITEMS} from '../../data/data';


const oferta = () => {
  return(
    <>
      <Header title='Oferta' text='Lorem ipsum sit consectetur sadipiscing'/>
      <main>
        <Powers data={OFFER_ITEMS}/>
        <InfoBar/>
        <Experience/>
        <About/>
        <Services/>
        <Call/>
        <Information/>
        <Footer/>
      </main>
    </>
  );
};

export default oferta;