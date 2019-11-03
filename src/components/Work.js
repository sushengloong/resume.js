import React from 'react';

export default function Work({data}) {

  const renderDates = (dates) => {
    return dates.map((d, i) => {
      return (
        <div className="row" key={`workDates-${i}`}>
          <div className="col subheading-temporal">{d}</div>
        </div>
      );
    });
  };

  const renderBulletPoints = (bulletPoints) => {
    return bulletPoints.map((bp, i) => {
      return (
        <li key={`workBulletPoint-${i}`}>{bp}</li>
      );
    });
  };

  const renderWork = data.map((d, i) => {
    return (
      <div key={`work-${i}`}>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-1">
                <img src={`images/work/${d.icon}`} alt={`Logo: ${d.name}`} className="logo" />
              </div>
              <div className="col-11">
                <h3>{d.company}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col subheading">{d.title}</div>
        </div>
        {renderDates(d.dates)}
        <ul>
          {renderBulletPoints(d.bulletPoints)}
        </ul>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-2"><h2>Work</h2></div>
      <div className="col-10">{renderWork}</div>
    </div>
  );
};