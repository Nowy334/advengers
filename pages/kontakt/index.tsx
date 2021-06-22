import Header from '../../components/UI/Header/Header';
import React from 'react';
import Contact from '../../components/Contact/Contact';
import Information from '../../components/UI/Information/Information';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';

const ContactPage = () => {
  return(
    <>
    <Head>
      <title>Advengers - Kontakt</title>
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="Your description goes here"/>
    </Head>
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

