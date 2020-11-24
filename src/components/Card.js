import React, { Component } from 'react';
import "../styles/card.css";

export default function Card(props) {
    return(
      <div class="foss-card-container">
        <div class="foss-card-title" style={{ backgroundColor: props.background_color }}>
          <div class="foss-card-info"></div>
          <div class="foss-card-close">🗙</div>
        </div>
        <div class="foss-card-content">
        { props.children }
        </div>
      </div>
    )
}
