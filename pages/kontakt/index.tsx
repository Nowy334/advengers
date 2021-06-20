import Header from '../../components/UI/Header/Header';
import React from 'react';
import Contact from '../../components/Contact/Contact';
import Information from '../../components/UI/Information/Information';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
  return(
    <>
      <Header title= 'Skontaktuj się z nami!' text = 'Lorem ipsum sit consectetur sadipiscing'/>
      <main>
        <Contact/>
        <Information/>
        <Footer/>
      </main>
    </>
  );
};

export default ContactPage;

