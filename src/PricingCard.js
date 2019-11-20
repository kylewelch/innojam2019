import React, { Component } from 'react';
import Button from './Button.js'
import './App.css';

class PricingCard extends React.Component {
  render() {
  return (
    <div className="Card">
      <div className="Card-content">
        <p className="Tier-label">{this.props.tier}</p>
        <h2 className="Card-heading">{this.props.price}<span className="Card-heading-span"> /mo</span></h2>
        <p className="Card-sentence">{this.props.sentence}</p>
        <Button 
          type="secondary"
          content={this.props.cta} 
        />
      </div>
    </div>
  );
  }
}

export default PricingCard;
