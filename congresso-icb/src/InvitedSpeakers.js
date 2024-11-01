// InvitedSpeakers.js
import React from 'react';
import Speaker from './Speaker';

const speakers = [
    { name: 'ANDRES AGUILERA', university: '(UNIV. SEVILLE, SPAIN)' },
    { name: 'LUÍS BATISTA', university: '(WASHINGTON UNIV. ST. LOUIS, USA)' },
    { name: 'VILHELM BOHR', university: '(UNIV. COPENHAGEN, DENMARK)' },
    { name: 'KEITH CALDECOTT', university: '(UNIV. SUSSEX, UK)' },
    { name: 'ANNA CAMPALANS', university: '(UNIV. PARIS-CITÉ, FRANCE)' },
    { name: 'VANESA GOTTIFREDI', university: '(INSTITUTE LELOIR, ARGENTINA)' },
    { name: 'ABBY GREEN', university: '(WASHINGTON UNIV. ST. LOUIS, USA)' },
    { name: 'JAN HOEIJMAKERS', university: '(ERASMUS MC, NETHERLANDS)' },
    { name: 'PATRICIA KANNOUCHE', university: '(UNIV. PARIS-SACLAY, FRANCE)' },
    { name: 'HANNES LANS', university: '(ERASMUS MC, NETHERLANDS)' },
    { name: 'RICHARD MCCULLOCK', university: '(UNIV. GLASGOW, SCOTLAND)' },
    { name: 'MANUEL MUÑOZ', university: '(UNIV. BUENOS AIRES, ARGENTINA)' },
    { name: 'ANDRÉ NUSSENZWEIG', university: '(NIH, USA)' },
    { name: 'ANNABEL QUINET', university: '(UNIV. PARIS-CITÉ, FRANCE)' },
    { name: 'PABLO RADICELLA', university: '(CEA PARIS, FRANCE)' },
    { name: 'CARLOS ROBELLO', university: '(INSTITUTE PASTEUR, URUGUAY)' },
    { name: 'ALAIN SARASIN', university: '(INSTITUTE GUSTAVE ROUSSY, FRANCE)' },
    { name: 'MARKUS SMOLKA', university: '(CORNELL UNIV., USA)' },
    { name: 'EVI SOUTOGLOU', university: '(UNIV. SUSSEX, UK)' },
    { name: 'GIANLUCA TELL', university: '(UNIV. UDINE, ITALY)' },
    { name: 'STEPHEN WEST', university: '(FRANCIS CRICK INSTITUTE, UK)' },
    { name: 'DAVID WILSON', university: '(HASSELT UNIV., BELGIUM)' }
  ];
  

const InvitedSpeakers = () => (
  <section style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>

<h2 style={{
  textAlign: 'center',
  marginBottom: '20px',
  color: '#7A7A7A',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  WebkitTextStrokeWidth: '1px',
  WebkitTextStrokeColor: 'rgba(0, 0, 0, 0)',
  fontFamily: 'Inter, bold',
  fontSize: '64px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal'
}}>
  Invited Speakers
</h2>



    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {speakers.map((speaker, index) => (
        <div key={index} style={{ width: '45%', marginBottom: '10px' }}>
          <Speaker name={speaker.name} university={speaker.university} />
        </div>
      ))}
    </div>
  </section>
);

export default InvitedSpeakers;
