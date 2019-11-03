import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <p className="footer-note">
          This resume is created with JavaScript, React and Bootstrap.
          Source code is available at https://github.com/sushengloong/resume.js
        </p>
      </div>
    </div>
  );
};