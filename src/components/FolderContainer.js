import React, { Component } from 'react';
import close from '../../static/images/close.png';
import inception_of_foss from '../../static/images/inception-of-foss.png';

export default function FolderContainer(props) {
    const image_map = {
        "inception-of-foss": inception_of_foss
    }
    console.log(props.image);
    const showHideClassName = props.show ? "foss-modal-container display-block" : "display-none";

    return(
      <div className={showHideClassName}>
          <img className={"folder-image"} src={image_map[props.image]} />
        <img className="modal-close" src={close} onClick={props.handleClose} />
      </div>
    )
}
