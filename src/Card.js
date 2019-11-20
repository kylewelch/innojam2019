import React, { Component } from 'react';
import Button from './Button.js'
import './App.css';

class Card extends React.Component {
  render() {
  return (
    <div className="Card">
      <div className="Card-content">
        <h2 className={(this.props.type === "secondary") ? "Card-secondary-heading" : "Card-heading"}>{this.props.heading}</h2>
        <p className="Card-sentence">{this.props.sentence}</p>
        <Button 
          id="edit"
          type="secondary"
          content={this.props.cta}
        />
      </div>
    </div>
  );
  }
}

export default Card;
