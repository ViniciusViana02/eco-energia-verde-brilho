
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RenewableEnergies from '../components/RenewableEnergies';
import Tips from '../components/Tips';
import Simulator from '../components/Simulator';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RenewableEnergies />
        <Tips />
        <Simulator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
