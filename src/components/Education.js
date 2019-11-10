import React from 'react';

export default function Education({data}) {

  const renderBulletPoints = (bulletPoints) => {
    return bulletPoints.map((bp, i) => {
      return <li key={`educationBulletPoint-${i}`}>{bp}</li>;
    });
  };

  const renderEducation = data.map((d, i) => {
    return (
      <div key={`education-${i}`} className="record">
        <div className="row align-items-center no-gutters">
          <div className="col-1">
                <img src={`images/education/${d.icon}`} alt={`Logo: ${d.institution}`} className="logo" />
              </div>
              <div className="col-11">
                <h3>{d.institution}</h3>
              </div>
        </div>
        <div className="row">
          <div className="col subheading">{d.program}, GPA {d.gpa}</div>
        </div>
        <div className="row">
          <div className="col subheading-temporal">Graduated {d.graduated}</div>
        </div>
        <ul>
          {renderBulletPoints(d.bulletPoints)}
        </ul>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-2"><h2>Education</h2></div>
      <div className="col-10">{renderEducation}</div>
    </div>
    );
  };