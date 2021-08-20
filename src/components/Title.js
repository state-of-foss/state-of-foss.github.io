import React from 'react';
import '../styles/title.css';

export default function Title(props) {
  return (
    <div className={`foss-title ${props.styleName}`}>{props.children}</div>
  );
}
