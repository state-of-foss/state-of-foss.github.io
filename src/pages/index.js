import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/App.css';
import Challenges from '../components/section-challenges';

const Home = () => {
  return (
    <>
      {/* <div className={'section-front-page-wrapper'}>
        <img src={require('../../static/images/front-img-1.png')} />
        <div className={'section-container'}>
        <Col sm={3} className={'left-col'}>
          </Col>
        </div>
      </div> */}
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
      </div>
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
        <hr className={'section-end-hr'}></hr>
      </div>
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
    </>
  );
};

export default Home;
