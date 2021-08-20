import React from 'react';
import '../styles/circle.css';

export default function Circle(props) {
  return (
    <div
      className="foss-circle"
      style={{ backgroundColor: props.background_color }}
    >
      {props.children}
    </div>
  );
}
