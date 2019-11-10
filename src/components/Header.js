import React from 'react';

export default function Header() {
  return (
    <div className="row  no-gutters align-items-end">
      <div className="col-8">
        <h1>Su Sheng Loong</h1>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col">
            <img src={`images/email.png`} alt="email" /> sushengloong@gmail.com
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={`images/github.png`} alt="github" /> www.github.com/sushengloong
          </div>
        </div>
        <div className="row">
          <div className="col">
          <img src={`images/linkedin.png`} alt="linkedin" /> www.linkedin.com/in/sushengloong
          </div>
        </div>
      </div>
    </div>
  );
};