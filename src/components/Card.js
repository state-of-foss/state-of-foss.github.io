import React from 'react';
import '../styles/card.css';

export default function Card(props) {
  return (
    <div className="foss-card-container">
      <div
        className="foss-card-title"
        style={{ backgroundColor: props.background_color }}
      >
        <div className="foss-card-info"></div>
        <div className="foss-card-close">🗙</div>
      </div>
      <div className="foss-card-content">{props.children}</div>
    </div>
  );
}
