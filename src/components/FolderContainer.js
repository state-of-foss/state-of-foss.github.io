import React, { Component } from 'react';
import close from '../../static/images/close.png';
import inception_of_foss from '../../static/images/inception-of-foss.png';
import rise_of_foss from '../../static/images/rise-of-foss.png';
import big_tech from '../../static/images/big-tech.png';
import rise_of_cb from '../../static/images/rise-of-cb.png';
import expansion_in_india from '../../static/images/expansion-in-india.png';
import global_proliferation from '../../static/images/global-proliferation.png';
import FolderFocusArea from './FolderFocusArea';


export default function FolderContainer(props) {
    const image_map = {
        "inception-of-foss": inception_of_foss,
        "rise-of-foss": rise_of_foss,
        "big-tech": big_tech,
        "rise-of-cb": rise_of_cb,
        "expansion-in-india": expansion_in_india,
        "global-proliferation": global_proliferation
    }


    const showHideClassName = props.show ? "foss-modal-container display-block" : "display-none";

    return(
      <div className={showHideClassName}>
              {Object.keys(image_map).includes(props.pageType) ? (
                <img className={"folder-image"} src={image_map[props.pageType]} />
      ) : (
        <FolderFocusArea folder={props.pageType}></FolderFocusArea>
      )}
        <img className="modal-close" src={close} onClick={props.handleClose} />
      </div>
    )
}
