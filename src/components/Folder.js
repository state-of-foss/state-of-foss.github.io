import React, { Component } from 'react';
import "../styles/folder.css";

export default function Folder(props) {
    return(
    <div className="wrapper">
        <svg class="icon  icon--plus filter" viewBox="0 -1 13 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1 h1 l0.75,-1 h2.5 l0.75,1 h5 v0.8 h-10 v5 h10 v-5 h-10 z" fill={props.background_color} />
        </svg>
        <div className="text">
            { props.children }
        </div>
    </div>
    )
}
