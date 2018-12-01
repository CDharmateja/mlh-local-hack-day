import React, { Component } from 'react';
import Contact from './contact';
import './landing.css';
class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="img1">
        </div>
        <div className = "content">
        <h1 className = "quote">"In a good book the best is between the lines"
        </h1>
        </div>
        </div>
        <div className="out">
        <h1>" A Great Place To Learn And a  Chance To Grow"</h1>
        </div>
        <Contact />
       </div>
    )
  }
}

export default Landing;