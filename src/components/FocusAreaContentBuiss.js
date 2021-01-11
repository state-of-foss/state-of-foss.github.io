import React from 'react';
import '../styles/FocusAreaContent.css';
import Folder from './Folder';
import FossBuissData from '../../static/data/foss_buiss.json';
import Card from './Card';

const FocusAreaContentBuiss = () => {

      
  const [value, setValue] = React.useState(0);
  const{id,box} = FossBuissData[value];

  return (
    <>
    
    <div className={'column-wrapper-focus-area'}>
        <div className={'column-container-focus-area'}>
          <p className={'left'}>
            <span>
            Create capacity across different sizes of business. Indian start-ups
have a unique opportunity to help customers migrate from proprietary
closed source software to mature FOSS alternatives and provide
dedicated support

            </span>
            There is a need to instill awareness, conduct training
and provide technical support for FOSS ideologies, contributions,
licenses and extant business models.

          </p>
          {/* <div onClick={() => setValue(0)}  className={"folder-1"} >
          <Folder background_color="white"> 
          <div className={"component-folder"}>
            <p>outreachey</p>
            </div>
          </Folder>
          </div>
          <div className={"window-card"}>
          <Card background_color="#01BCD5" >
                  {box}
                </Card>
                </div> */}
                
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'middle'}>
            <span>
            Creation of FOSS policies and guidelines in different businesses for support/promotion of FOSS
            </span>
            . Creation of strong FOSS friendly policies so as to incentivize contributors from within these companies to contribute to FOSS projects as in the case of Zalando and Hasura. Promotion of FOSS Includes support in the form of sponsorships and code contribution or through Corporate Social Responsibility programs and FOSS hackathons.

          </p>
          {/* <div onClick={() => setValue(1)}  className={"folder-2"} >
          <Folder background_color="white">
          <div className={"component-folder"}>
            <p>Spoken Tutorial</p>
            </div>
          </Folder>
          </div> */}
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'right'}>
            <span>Co-creation of FOSS projects with the community</span>{' '}
            . Businesses have an unique opportunity to collaborate with diverse communities to build large-scale enterprise FOSS projects.
          </p>
          {/* <div className={"folder-3"} onClick={() => setValue(2)} >
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

export default FocusAreaContentBuiss;
