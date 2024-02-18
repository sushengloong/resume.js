import React from 'react';
import './Talk.scss';

export default function Talk({data}) {

  const renderTalks = data.map((d, i) => {
    return (
      <div key={`cert-${i}`} className="record">
        <div className="row">
          <div className="col subheading">{d.title}</div>
        </div>
        <div className="row">
          <div className="col subheading-temporal">{d.event}, {d.eventDate}</div>
        </div>
        <div className="row">
          <div className="col">
            <a href={d.deck}>{d.deck}</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-1"><h2>Talks</h2></div>
      <div className="col-11">{renderTalks}</div>
    </div>
    );
  };
