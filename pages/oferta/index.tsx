import React from 'react';
import Header from '../../components/UI/Header/Header';
import Powers from '../../components/Offer/Powers/Powers';
import InfoBar from '../../components/Offer/InfoBar/InfoBar';

const oferta = () => {
  return(
    <>
      <Header title='Oferta' text='Lorem ipsum sit consectetur sadipiscing'/>
      <main>
        <Powers/>
        <InfoBar/>
      </main>
    </>
  );
};

export default oferta;