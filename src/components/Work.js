import React from 'react';

export default function Work({data}) {

  const renderEmployment = (employment) => {
    return employment.map(emp => {
      return (
        <div class="row">
          <div class="col">{emp}</div>
        </div>
      );
    });
  }

  const renderBulletPoints = (bulletPoints) => {
    return bulletPoints.map(bp => {
      return (
        <li>{bp}</li>
      );
    });
  }

  const renderWork = data.map(d => {
    return (
      <>
        <div class="row">
          <div class="col">{d.company}</div>
        </div>
        <div class="row">
          <div class="col">{d.title}</div>
        </div>
        {renderEmployment(d.employment)}
        <ul>
          {renderBulletPoints(d.bulletPoints)}
        </ul>
      </>
    );
  });

  return (
    <div class="row">
      <div class="col-1">Work</div>
      <div class="col-11">{renderWork}</div>
    </div>
  );
};