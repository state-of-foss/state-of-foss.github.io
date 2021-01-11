import React, { Component } from 'react';
import "../styles/folder.css";

export default function Folder(props) {
    return(
    <div className={`wrapper ${ props.wrapperType }`} onClick={props.handleClick}>
        <svg className={`icon  icon--plus filter ${ props.folderSize }`} viewBox="0 -1 13 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1 h1 l0.75,-1 h2.5 l0.75,1 h5 v0.8 h-10 v5 h10 v-5 h-10 z" fill={props.background_color} />
        </svg>
        <div>
            { props.children }
        </div>
        {props.caption && 
            <div className="folder-caption">
                { props.caption }
            </div>
        }
        
    </div>
    )
}
