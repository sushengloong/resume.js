import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <div className="row  no-gutters align-items-end">
      <div className="col-8">
        <h1>Su Sheng Loong</h1>
      </div>
      <div className="col-4 right-links">
        <div className="row">
          <div className="col">
            <img src={`images/email.png`} alt="email" /> <a href="mailto:sushengloong@gmail.com">sushengloong@gmail.com</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={`images/github.png`} alt="github" /> <a href="https://github.com/sushengloong">github.com/sushengloong</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <img src={`images/linkedin.png`} alt="linkedin" /> <a href="https://www.linkedin.com/in/sushengloong/">linkedin.com/in/sushengloong</a>
          </div>
        </div>
      </div>
    </div>
  );
};