import React from 'react';
import Card from '../components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Circle from '../components/Circle';
import Folder from '../components/Folder';

const Home = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map((edge) => ({
    id: edge.node.id,
    html: edge.node.html
  }));
  return (
    <>
      <div>

      <Row className="foss-opportunities-section">
          <div className="foss-container">
            <Col sm={12}>
              <Row>
              <Title styleName="foss-title-center">Major FOSS led Opportunities for India</Title>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
          <Col sm={12} md={12} lg={3}>
            <Circle background_color="#01BCD5">Tech growth</Circle>
            <Card background_color="#01BCD5">
            <ul>
              <li>Build robust FOSS stacks for key sectors like Health, Education, Finance and more</li>
              <li>Enable more privacy-centric, secure and ethical trust-based computing</li>
              <li>Onboard more users by delivering digital services in more Indian Language</li>
            </ul>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={{ span: 3, offset: 1 }}>
          <Circle background_color="#FF9B21">Economic growth</Circle>
            <Card background_color="#FF9B21">
            <ul>
              <li>Lower cost of ownership of digital infrastructure & services</li>
              <li>Avoid vendor lock-ins and reduce switching costs</li>
              <li>Better ease of tech adoption for MSMEs</li>
              <li>Reduce cost by reuse, customization, localization, personalization of software</li>
              <li>Reducing imports & conserving foreign exchange</li>
            </ul>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={{ span: 3, offset: 1 }}>
            <Circle background_color="#FFDFD5">Talent growth</Circle>
            <Card background_color="#FFDFD5">
            <ul>
              <li>Promotes commons-based peer production of information,knowledge & culture</li>
              <li>Improves key skills like leadership, collaboration, participation & more</li>
              <li>Make technology talent more market ready</li>
              <li>Opens door for multilateral collaborations across communities</li>
            </ul>
            </Card>
          </Col>
          </Row>
          </Col>
          </div>
        </Row>

      <Row className="foss-focusarea-section">
          <div className="foss-container">
          <Col sm={12}>
            <Row>
              <h1>Our Focus Area</h1>
            </Row>
          </Col>
          <Col sm={12} className="foss-focusarea-body">
            <Row>
              <Col md={2}>
                <Folder background_color="#FFDDD6">
                  <p>FOSS & Communities</p>
                </Folder>
              </Col>
              <Col md={{ span: 2, offset: 1 }}>
              <Folder background_color="#FFD8FC">
                  <p>FOSS & Education</p>
                </Folder>
              </Col>
              <Col md={{ span: 2, offset: 1 }}>
              <Folder background_color="#FCFFE0">
                  <p>FOSS & Business</p>
                </Folder>
              </Col>
              <Col md={{ span: 2, offset: 1 }}>
              <Folder background_color="#AAD3FF">
                  <p>FOSS & Government</p>
              </Folder>
              </Col>
            </Row>
          </Col>
          </div>
        </Row>

        <Row className="foss-download-section">
          <div className="foss-container">
          <Col sm={12}>
            <Row>
              <Title>DOWNLOAD THE REPORT</Title>
            </Row>
          </Col>
          <Col sm={12} className="foss-download-body">
            <Row>
              <Col md={4}>
                <Folder background_color="white">
                  <p>The State of Free & Open Source Software in India</p>
                  <p><a className="foss-link" href="#">Executive Summary</a></p>
                  </Folder>



              </Col>
              <Col md={{ span: 4, offset: 1 }}>
              <Folder background_color="white">
                  <p>The State of Free & Open Source Software in India</p>
                  <p><a className="foss-link" href="#">Executive Summary</a></p>
                  </Folder>
              </Col>
            </Row>
          </Col>
          </div>
        </Row>


        <Row className="foss-footer-section">
          <div className="foss-container">
              <Col sm={12}>
                <Row>
                  <Title>CONTACT US</Title>
                </Row>
              </Col>
              <Col sm={12} className="foss-social-media">
                <img className="foss-social-media-icon" src="github-logo.png"></img>
                <img className="foss-social-media-icon" src="twitter-logo.png"></img>
                <img className="foss-social-media-icon" src="mail-logo.png"></img>
              </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;

export default Home;
