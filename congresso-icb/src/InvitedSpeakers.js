// InvitedSpeakers.js
import React from 'react';
import Speaker from './Speaker';

const speakers = [
    { name: 'Andres Aguilera', university: '(Univ. Seville, Spain)' },
    { name: 'Luís Batista', university: '(Washington Univ. St. Louis, USA)' },
    { name: 'Vilhelm Bohr', university: '(Univ. Copenhagen, Denmark)' },
    { name: 'Keith Caldecott', university: '(Univ. Sussex, UK)' },
    { name: 'Anna Campalans', university: '(Univ. Paris-Cité, France)' },
    { name: 'Vanesa Gottifredi', university: '(Institute Leloir, Argentina)' },
    { name: 'Abby Green', university: '(Washington Univ. St. Louis, USA)' },
    { name: 'Jan Hoeijmakers', university: '(Erasmus MC, Netherlands)' },
    { name: 'Patricia Kannouche', university: '(Univ. Paris-Saclay, France)' },
    { name: 'Hannes Lans', university: '(Erasmus MC, Netherlands)' },
    { name: 'Richard McCullock', university: '(Univ. Glasgow, Scotland)' },
    { name: 'Manuel Muñoz', university: '(Univ. Buenos Aires, Argentina)' },
    { name: 'André Nussenzweig', university: '(NIH, USA)' },
    { name: 'Annabel Quinet', university: '(Univ. Paris-Cité, France)' },
    { name: 'Pablo Radicella', university: '(CEA Paris, France)' },
    { name: 'Carlos Robello', university: '(Institute Pasteur, Uruguay)' },
    { name: 'Alain Sarasin', university: '(Institute Gustave Roussy, France)' },
    { name: 'Markus Smolka', university: '(Cornell Univ., USA)' },
    { name: 'Evi Soutoglou', university: '(Univ. Sussex, UK)' },
    { name: 'Gianluca Tell', university: '(Univ. Udine, Italy)' },
    { name: 'Stephen West', university: '(Francis Crick Institute, UK)' },
    { name: 'David Wilson', university: '(Hasselt Univ., Belgium)' }
  ];

const InvitedSpeakers = () => (
  <section style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Invited Speakers</h2> 
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
