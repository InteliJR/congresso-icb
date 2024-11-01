// Speaker.js
import React from 'react';

const Speaker = ({ name, university }) => (
  <div style={{ textAlign: 'center'}}>
    <h3 style={{ fontSize: '1.2em', fontWeight: 'inter' }}>{name}</h3>
    <p style={{ fontStyle: 'italic', fontWeight: 'inter', color: '#000' }}>{university}</p>
  </div>
);

export default Speaker;
