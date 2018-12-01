import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Book's store Company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Footer;