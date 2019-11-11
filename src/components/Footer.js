import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <p className="footer-note">
          This resume is built with JavaScript, React and Bootstrap.
          Source code is available at <a href="https://github.com/sushengloong/resume.js">github.com/sushengloong/resume.js</a>
        </p>
      </div>
    </div>
  );
};