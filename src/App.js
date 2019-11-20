import React from 'react';
import Card from './Card.js';
import Button from './Button.js';
import PricingCard from './PricingCard.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="HostGator logo" />
      </header>
      <main>
        {/*
        <div className="Pricing-card-container">
          <div class="Pricing-card">
            <PricingCard 
              tier="HATCHLING"
              price="$7.99" 
            />
          </div>
          <div class="Pricing-card">
            <PricingCard 
              tier="BABY"
              price="$7.99" 
            />
          </div>
          <div class="Pricing-card">
            <PricingCard 
              tier="BUSINESS"
              price="$7.99" 
            />
          </div>
        </div>
        */}

        <div className="Welcome-bar">
          <h1 className="Welcome-message">Welcome Avory!</h1>
          <div className="Welcome-bar-buttons">
            <Button 
              type="primary"
              content="Upgrade" 
            />
            <Button 
              type="tertiary"
              content="Logout"
            />
          </div>
        </div>
        <Card 
          type="main"
          heading="Build Your Site"
          sentence="Keep working on your beautiful website."
          cta="Edit Site"
        />
        <div className="Secondary-card-container">
          <div className="Secondary-card">
            <Card 
              type="secondary"
              heading="Connect Domain"
              sentence="Connect your domain to your new website."
              cta="Get Connected"
            />
          </div>
          <div className="Secondary-card">
            <Card 
              type="secondary"
              heading="Get Help"
              sentence="We're here to answer your questions 24/7."
              cta="Get Help"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
