import React from 'react';

export default function Education({data}) {

  const renderBulletPoints = (bulletPoints) => {
    return bulletPoints.map((bp, i) => {
      return <li key={`educationBulletPoint-${i}`}>{bp}</li>;
    });
  };

  const renderEducation = data.map((d, i) => {
    return (
      <div key={`education-${i}`}>
        <div className="row">
          <div className="col-1">
                <img src={`images/education/${d.icon}`} alt={`Icon: ${d.institution}`} />
              </div>
              <div className="col-11">
                <h3>{d.institution}</h3>
              </div>
        </div>
        <div className="row">
          <div className="col">{d.program}, GPA {d.gpa}</div>
        </div>
        <div className="row">
          <div className="col">{d.years}</div>
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