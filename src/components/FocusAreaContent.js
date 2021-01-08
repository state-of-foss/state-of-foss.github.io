import React from 'react';
import '../styles/FocusAreaContent.css';
import Folder from '../components/Folder';
import FossCommData from '../../static/data/foss_com_1.json';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/Card';

const FocusAreaContent = () => {

  console.log(FossCommData)
      
  const [value, setValue] = React.useState(0);
  const{id,box} = FossCommData[value];

  return (
    <>
    
    <div className={'column-wrapper-focus-area'}>
        <div className={'column-container-focus-area'}>
          <p className={'left'}>
            <span>
            Help onboard new members to FOSS and mentor them to develop their individual and collective roadmaps,
            </span>
            there is a need for a long term vision of personal and professional development to retain and sustain FOSS communities.
          </p>
          <div onClick={() => setValue(0)}  className={"folder"} >
          <Folder background_color="white"> 
            <p>outreachey</p>
          </Folder>
          </div>
          <div className={"card"}>
          <Card background_color="#01BCD5" >
                  {box}
                </Card>
                </div>
                
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'middle'}>
            <span>
              Build teams that can effectively engage with and mobilize the
              community.
            </span>
            FOSS communities and projects need to actively and responsibly
            allocate funds and resources for community mobilization and other
            activities. Most Indian FOSS Leaders were originally developers who
            recognized this need and became community mobilisers. Building a
            well-supported team with shared responsibility prevents putting the
            pressure of such a critical role on a single person, who often feels
            the need to be constantly “on”, that leads to burnout and
            resignations.
          </p>
          <button className={"folder"}  onClick={() => setValue(1)}>
            <p>outreachey</p>
          </button>
        </div>
        <div className={'column-container-focus-area'}>
          <p className={'right'}>
            <span>Incubate indigenous innovative FOSS based projects,</span>{' '}
            creating structures of financial and legal support for FOSS
            communities to begin and foster projects that are driven by a need
            to solve a problem would increase project retention, contribution
            and support from within the community resulting in more robust and
            sustainable projects.
          </p>
          <div className={"folder-container"}>
          <Folder background_color="white" className={"folder"}>
            <p>outreachey</p>
          </Folder>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusAreaContent;
