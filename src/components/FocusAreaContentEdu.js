import React from 'react';
import '../styles/FocusAreaContent.css';
import Folder from './Folder';
import FossGovEdu from '../../static/data/foss_edu.json';
import Card from './Card';

const FocusAreaContentEdu = () => {
  const [value, setValue] = React.useState(0);
  const { id, box } = FossGovEdu[value];

  return (
    <>
      <div className={'column-wrapper-focus-area'}>
        <div className={'column-container-focus-area'}>
          <p className={'left'}>
            <span>
            Build FOSS-led digital literacy programs empowering both educators and learners.
            </span>
            A FOSS led curriculum needs to be created and adopted in schools to facilitate awareness and adoption around FOSS from an early age.
          </p>
          {/* <div onClick={() => setValue(0)} className={'folder-1'}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>outreachey</p>
              </div>
            </Folder>
          </div>
          <div className={'window-card'}>
            <Card background_color="#01BCD5">{box}</Card>
          </div> */}
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'middle'}>
            <span>
            Localize digital literacy curriculum to enable learners to learn and contribute in their native languages.
            </span>
            Collaborate with the community to ensure localisation and adoption of such technologies.

          </p>
          {/* <div onClick={() => setValue(1)} className={'folder-2'}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>Spoken Tutorial</p>
              </div>
            </Folder>
          </div> */}
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'right'}>
            <span>Programmes to identify, promote and grow existing FOSS collaborations between and communities in educational institutes</span> .
            Focused on introducing students to FOSS development along communities working in specific focus areas.

          </p>
          {/* <div className={'folder-3'} onClick={() => setValue(2)}>
            <Folder background_color="white">
          <div className={"component-folder"}>
              <p>FOSSEE</p>
              </div>
            </Folder>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FocusAreaContentEdu;
