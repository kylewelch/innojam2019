import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class Button extends React.Component {
  handleClick() {
      $.ajax({
        url: '/sso', 
        type : "POST",
        dataType : 'json', 
        success : function(result) {
          console.log(result);
          window.location.href = result['url'];
        },
        error: function(xhr, resp, text) {
          console.log(xhr, resp, text);
        }
      });
    }
  render() {
    return (
      <button className={(this.props.type === "primary") ? "Button Primary" : (this.props.type === "secondary") ? "Button Secondary" : "Button Tertiary"} onClick={(this.props.id === "edit") ? this.handleClick : null} >
        {this.props.content}
      </button>
    );
  }
}

export default Button;
