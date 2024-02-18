import React from 'react';

export default function Certificate({data}) {

  const renderCertificates = data.map((d, i) => {
    return (
      <div key={`cert-${i}`} className="record">
        <div className="row align-items-center no-gutters">
          <div className="col-1">
                <img src={`images/certs/${d.icon}`} alt={`Logo: ${d.institution}`} className="logo" />
              </div>
              <div className="col-11">
                <h3>{d.name}</h3>
              </div>
        </div>
        <div className="row">
          <div className="col subheading">{d.institution}</div>
        </div>
        <div className="row">
          <div className="col subheading-temporal">Issued {d.issued}</div>
        </div>
        <div className="row">
          <div className="col">Credential ID {d.credentialId}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-1"><h2>Certificates</h2></div>
      <div className="col-11">{renderCertificates}</div>
    </div>
    );
  };
