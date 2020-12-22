import React from 'react';
import Card from '../components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Circle from '../components/Circle';
import Folder from '../components/Folder';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/App.css';
import Challenges from '../components/section-challenges';

const Home = () => {
  return (
      <div>
        <div className={'section-advancement-wrapper'}>
        <div className={'section-container'}>
          <Row>
            <Col sm={3} className={'left-col'}>
              <h2 className={'title-advancement'}>
                The Role of FOSS in India’s Digital Advancement
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className={'left-section-advancement'}>
              <hr className={'left-line'}></hr>
              <p className={'advancement-left-content'}>
                India is well positioned to become a vibrant hub for FOSS
                innovations. In India, 4G data subscribers have recently crossed
                more than 598 million of which 96% of them access the digital
                world via open-source based mobile operating systems
              </p>
              <hr className={'left-line'}></hr>
            </Col>
            <Col sm={9}>
              <div className={'advancement-right'}>
                <h1 className={'advancement-right-title'}>
                  Definition of FOSS
                </h1>
                <div>
                  <p className={'advancement-right-content'}>
                    FOSS is an inclusive term that covers both “free software”
                    and “open-source software”, which despite describing similar
                    ownership models, have differing cultures and philosophies.
                    <br />
                    <br></br>
                    The“free software” model advocated by the Free Software
                    Foundation focuses on the fundamental freedoms a software
                    must give to its users, commonly explained as “think of free
                    as in free speech, not as in free beer”.
                  </p>

                  <img
                    src={require('../../static/images/advancement.png')}
                    className={'advancement-section-img'}
                  />
                </div>

                <hr className={'advancement-last-section-line'}></hr>
                <p className={'advancement-right-last-section'}>
                  More than 85% of India’s Internet runs on FOSS
                </p>
                <hr className={'advancement-last-line'}></hr>
              </div>
            </Col>
          </Row>
        </div>
      </div>



      <Row className="foss-opportunities-section">
          <div className="foss-container">
            <Col sm={12}>
              <Row>
              <div className={'about-us-title'}>Major FOSS led Opportunities for India</div>
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
          <Row>
            <Col sm={3}>
              <img
                src={require('../../static/images/actors.png')}
                className={'actors-section-img'}
              />
            </Col>
            <Col sm={9} className={'section-actors-right-col'}>
              <p className={'section-actors-right-first-block'}>
                However, India still lags behind the global landscape in
                building sustainable home-grown projects and needs a strategic
                plan to incubate and proliferate domestic FOSS innovations
                worldwide
              </p>
              <p className={'section-actors-right-last-block'}>
                For this to happen, actors must be aware of and value the
                efforts, historical and present – of all partners in this
                ecosystem.
              </p>
            </Col>
          </Row>
          </div>
        </Row>

        <Row className="foss-categories-section">
          <Col sm={12}>
          </Col>
          <Col sm={12} className="foss-categories-body">
            <Row style={{height: "100vh"}}>
            <Row style={{position: "absolute", zIndex: 1, margin: "100px"}}>
            <Col sm={3} className={'left-col'}>
              <h2 className={'title-advancement'}>
              Chronicling the FOSS movement in India
              </h2>
            </Col>
          </Row>
              <Col md={2} style={{backgroundColor: "#FFDFD5"}}>
                <div className="categories-folder">
                <Folder background_color="white">
                  <p>FOSS & Communities</p>
                </Folder>
                </div>
              </Col>
              <Col md={2} style={{backgroundColor: "#E2EED5"}}>
              <div className="categories-folder">
              <Folder className="categories-folder" background_color="white">
                  <p>FOSS & Education</p>
                </Folder>
                </div>
              </Col>
              <Col md={2} style={{backgroundColor: "#FEFFB2"}}>
              <div className="categories-folder">
              <Folder className="categories-folder" background_color="white">
                  <p>FOSS & Business</p>
                </Folder>
                </div>
              </Col>
              <Col md={6} style={{backgroundColor: "#B8FAFF"}}>
              <Row style={{height: "50vh"}}>
                <Col md={{ span: 4, offset: 2 }}>
                <div className="categories-folder-col">
              <Folder background_color="white">
                  <p>FOSS & Government</p>
              </Folder>
              </div>
              </Col>
              </Row>
              <Row style={{backgroundColor: "#66FFD5", height: "50vh"}}>
                <Col md={{ span: 4, offset: 2 }}>
                <div className="categories-folder-col">
              <Folder background_color="white">
                  <p>FOSS & Government</p>
              </Folder>
              </div>
              </Col>
              </Row>
              </Col>
            </Row>
          </Col>
        </Row>


      <div className={'section-ecosystem-wrapper'}>
        <div className={'section-container'}>
          <Row>
            <Col sm={3} className={'left-col'}>
              <h2 className={'text-left-1'}>Indian FOSS Ecosystem</h2>
            </Col>
            <Col sm={8} className={'right-col'}>
              <p className={'right-text-ecosystem'}>
                As we look ahead to chart where the FOSS movement in India can
                go, we must acknowledge the challenges and opportunities that
                lie in this journey ahead.
                <br />
                <br />
                The key actors in the FOSS movement are individual volunteers
                and consultants, FOSS groups, schools, higher educational and
                research institutes, online educational actors, micro small and
                medium tech enterprises, global tech firms, local and state
                governments, national governments, FOSS funders and FOSS
                investors.
              </p>
            </Col>
          </Row>
          <Row>
            <img
              src={require('../../static/images/ecosystemOne.png')}
              className={'ecosystemOne-section-img'}
            />
            <img
              src={require('../../static/images/ecosystemTwo.png')}
              className={'ecosystemTwo-section-img'}
            />
            <img
              src={require('../../static/images/ecosystemThree.png')}
              className={'ecosystemThree-section-img'}
            />
            <img
              src={require('../../static/images/ecosystemFour.png')}
              className={'ecosystemFour-section-img'}
            />
          </Row>
        </div>
      </div>

      <div className={'section-challenges-wrapper'}>
        <div className={'section-container'}>
          <Row>
            <Col sm={3} className={'left-col'}>
              {' '}
              <h2 className={'text-left-1'}>
                Indian FOSS Ecosystem & its Challenges
              </h2>{' '}
              <Row>
                <div className={'d-flex justify-content-end'}>
                  <img
                    src={require('../../static/images/challenges.png')}
                    className={'challenges-section-img'}
                  />
                </div>
              </Row>
            </Col>
            <Challenges />
          </Row>
        </div>
        <hr className={'section-end-hr'}></hr>
      </div>


      <div className={'section-recommendations-wrapper'}>
        <div className={'section-container'}>
          <Row>
            <Col sm={3}>
              <h2 className={'text-left-1'}>
                Recommendations to step up India’s FOSS game
              </h2>
            </Col>
            <Col sm={9} className={'right-col'}>
              <p className={'first-last-block'}>
                To address some of the above mentioned challenges, we propose
                4Cs for FOSS growth for various stakeholders
              </p>
              <img
                src={require('../../static/images/recommendations.png')}
                className={'recommendations-section-img'}
              />
            </Col>
          </Row>
        </div>
      </div>


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


        <div className={'section-collaborations-wrapper'}>
        <div className={'section-container'}>
          <Row>
            <Col sm={3} className={'left-col'}>
              <h2 className={'text-left'}>
                Sustained Collaborations to Build Future Pathways for FOSS in
                India
              </h2>
            </Col>
            <Col sm={9} className={'right-col'}>
              <p className={'first-last-block'}>
                The current pandemic has amplified FOSS’s importance due to the
                movement’s ability to bring diverse actors together to build,
                localize and deploy crisis response solutions effectively
              </p>
              <hr />
              <h2 className={'middle-block'}>
                FOSS an ideal choice for developing open-source digital
                ecosystems with a long-term vision
              </h2>
              <hr />
              <Row>
                <p className={'last-block '}>
                  A strategic investment in growing the FOSS ecosystem will not
                  only help us onboard the next half billion internet users in
                  our digital journey of growth, but will also create safe,
                  diverse and open environments for citizens to participate,
                  co-create and grow together.
                </p>
                <img
                  src={require('../../static/images/collaborations.png')}
                  className={'collaborations-section-img'}
                />
              </Row>
            </Col>
          </Row>
        </div>
      </div>


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
        <hr className={'section-end-hr'}></hr>

      {/* <div className={'section-front-page-wrapper'}>
        <img src={require('../../static/images/front-img-1.png')} />
        <div className={'section-container'}>
        <Col sm={3} className={'left-col'}>
          </Col>
        </div>
      </div> */}




      <div className={'foss-about-section'}>
      <div className={'section-container'}>
        <div className={'about-us-title'}>ABOUT US</div>
        <br />

        <Row>
          <Col sm={6}>
            <p className={'about-us-left-content'}>
              <h1 className={'org-name'}>CIVICDATALAB</h1>
              <br />
              CivicDataLab works with the goal to use data, tech, design and
              social science to strengthen the course of civic engagements in
              India. We work to harness the potential of open-source movement to
              enable citizens to engage better with public reforms. We aim to
              grow data and tech literacy of governments, nonprofits, think
              tanks, media houses, universities etc to enable data-driven
              decision making at scale.
            </p>
            <img
              src={require('../../static/images/cdl-logo.png')}
              className={'about-us-section-img-cdl'}
            />
          </Col>
          <Col sm={6}>
            <p className={'about-us-right-content'}>
              <h1 className={'org-name'}>OMIDYAR NETWORK </h1>
              <br />
              We invest in bold entrepreneurs who help create a meaningful life
              for every Indian, especially the hundreds of millions of Indians
              in low-income and lower-middle-income populations, ranging from
              the poorest among us to the existing middle class. To drive
              empowerment and social impact at scale, we work with entrepreneurs
              in the private, non-profit and public sectors, who are tackling
              India’s hardest and most chronic problems.
            </p>
            <img
              src={require('../../static/images/ONI-logo.png')}
              className={'about-us-section-img-ONI'}
            />
          </Col>
        </Row>
      </div>
      </div>
      <Row className="foss-footer-section">
          <div className="foss-container">
              <Col sm={12}>
                <Row>
                <div className={'about-us-title'} style={{marginLeft: 0}}>CONTACT US</div>
                </Row>
              </Col>
              <Col sm={12} className="foss-social-media">
                <img className="foss-social-media-icon" src="images/github-logo.png"></img>
                <img className="foss-social-media-icon" src="images/twitter-logo.png"></img>
                <img className="foss-social-media-icon" src="images/mail-logo.png"></img>
              </Col>
          </div>
          </Row>
      </div>
  );
};

export default Home;
