import React, { Component } from 'react';
import close from '../../static/images/close.png';
import inception_of_foss from '../../static/images/inception-of-foss.png';
import FolderFocusArea from './FolderFocusArea';


export default function FolderContainer(props) {
    const image_map = {
        "inception-of-foss": inception_of_foss
    }


    const showHideClassName = props.show ? "foss-modal-container display-block" : "display-none";

    return(
      <div className={showHideClassName}>
              {Object.keys(image_map).includes(props.pageType) ? (
                <img className={"folder-image"} src={image_map[props.pageType]} />
      ) : (
        <FolderFocusArea step={props.pageType}></FolderFocusArea>
      )}
        <img className="modal-close" src={close} onClick={props.handleClose} />
      </div>
    )
}
