import React, { Component } from 'react';
import "../styles/circle.css";

export default function Circle(props) {
    return(
      <div class="foss-circle" style={{ backgroundColor: props.background_color }}>
        { props.children }
      </div>
    )
}
