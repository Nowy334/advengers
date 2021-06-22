import Header from '../../components/UI/Header/Header';
import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';
import Information from '../../components/UI/Information/Information';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';

const PortfolioPage = () => {
  return(
    <>
    <Head>
      <title>Advengers - Portfolio</title>
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="Your description goes here"/>
    </Head>
      <Header title= 'Zobacz nasze realizacje!' text = 'Lorem ipsum sit consectetur sadipiscing'/>
      <main>
        <Portfolio/>
        <Information/>
        <Footer/>
      </main>
    </>
  );
};

export default PortfolioPage;