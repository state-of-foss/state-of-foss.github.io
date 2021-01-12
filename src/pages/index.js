import React from 'react';
import Card from '../components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import Circle from '../components/Circle';
import Folder from '../components/Folder';
import FolderContainer from '../components/FolderContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Challenges from '../components/section-challenges';
import Header from '../components/Header';
import SEO from '../components/seo';
import { Component } from 'react';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      pageType: ''
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (pageType) => {
    console.log('Changing pageType', pageType);
    this.setState({ show: true });
    this.setState({ pageType: pageType });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.setState({ pageType: '' });
  };

  render() {
    return (
      <div>
        <SEO />
        <div className={'section-front-banner-wrapper'} id='section-1'>
          <Header />

          {/* <div className={'front-banner-small-content'}>
          The Role of FOSS in India’s Digital Advancement
        </div> */}

          <div className={'section-container'}>

            {/* <Row>
            <h2 className={'title-front-banner'}>
              The State of Free & Open Source Software in India
            </h2>
            <img
              className={'front-banner-img'}
              src={require('../../static/images/front-img-2.png')}
            />
          </Row> */}
          </div>
        </div>
        <div className={'section-advancement-wrapper'} id='section-2'>
          <div className={'foss-container'}>
            <div className={"index-card hide-text-md"}>01</div>
            <Row className={'first-row-wrapper-section-advancement'}>
              <Col sm={12} md={12} lg={3} className={'left-col'}>
                <h2 className={'title-advancement'}>
                  The Role of FOSS in India’s Digital Advancement
                </h2>
              </Col>
            </Row>
            <Row className={'sec-row-wrapper-section-advancement'}>
              <Col sm={12} md={12} lg={3} className={'left-section-advancement'}>
                <hr className={'left-line'}></hr>
                <p className={'advancement-left-content'}>
                  India is well positioned to become a vibrant hub for FOSS
                  innovations. In India, 4G data subscribers have recently crossed
                  more than 598 million of which 96% of them access the digital
                  world via open-source based mobile operating systems
                </p>
                <hr className={'left-line'}></hr>
              </Col>
              <Col lg={{ span: 8, offset: 1 }}>
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
                      className='advancement-section-img'
                      alt='advancement-section'
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

        <Row className='foss-opportunities-section'>
          <div className='foss-container'>
            <div className={"index-card index-card-absolute hide-text-md"}>02</div>
            <Col sm={12}>
              <Row>
                <div className={'opportunities-title'}>Major FOSS led Opportunities for India</div>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={'opportunities-section'}>
                <Col sm={12} md={12} lg={4}>
                  <Circle background_color='#01BCD5'>Tech growth</Circle>
                  <Card background_color='#01BCD5'>
                    <ul>
                      <li>Build robust FOSS stacks for key sectors like Health, Education, Finance and more</li>
                      <li>Enable more privacy-centric, secure and ethical trust-based computing</li>
                      <li>Onboard more users by delivering digital services in more Indian Language</li>
                    </ul>
                  </Card>
                </Col>
                <Col sm={12} md={12} lg={{ span: 4 }}>
                  <Circle background_color='#FF9B21'>Economic growth</Circle>
                  <Card background_color='#FF9B21'>
                    <ul>
                      <li>Lower cost of ownership of digital infrastructure & services</li>
                      <li>Avoid vendor lock-ins and reduce switching costs</li>
                      <li>Better ease of tech adoption for MSMEs</li>
                      <li>Reduce cost by reuse, customization, localization, personalization of software</li>
                      <li>Reducing imports & conserving foreign exchange</li>
                    </ul>
                  </Card>
                </Col>
                <Col sm={12} md={12} lg={{ span: 4 }}>
                  <Circle background_color='#FFDFD5'>Talent growth</Circle>
                  <Card background_color='#FFDFD5'>
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
                  className='actors-section-img'
                  alt='actors-section'
                />
              </Col>
              <Col sm={12} lg={9} className={'section-actors-right-col'}>
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

        <FolderContainer show={this.state.show} handleClose={this.hideModal} pageType={this.state.pageType}>
        </FolderContainer>

        <Row className='foss-categories-section' id='section-3'>
          <Col sm={12}></Col>
          <Col sm={12} className='foss-categories-body'>
            <Row>
              <Row className={'foss-categories-text'}>
                <Col sm={12} md={12} lg={5} className={'left-col'}>
                  <div className={"index-card hide-text-md"}>03</div>
                  <h2 className={'title-advancement'}>
                    Chronicling the FOSS movement in India
                  </h2>
                  <h4 className={'about-advancement hide-text-lg'}>
                    Based on our conversations and reading, we classified the FOSS movement into six eras mentioned here
                  </h4>
                </Col>
              </Row>
              <h4 className={'about-advancement-bottom hide-text-md'}>
                Based on our conversations and reading, we classified the FOSS movement into six eras mentioned here
              </h4>
              <Col sm={12} md={12} lg={2} style={{ backgroundColor: '#FFDFD5' }}>
                <div className='categories-folder-first'>
                  <Folder background_color='white' caption='1886 - 1978'
                          wrapperType={'timeline-folder'}
                          handleClick={() => this.showModal('inception-of-foss')}>
                    <div className={'normal-folder'}>
                      <p>Inception Of FOSS</p>
                    </div>
                  </Folder>
                </div>
              </Col>
              <Col sm={12} md={12} lg={2} style={{ backgroundColor: '#E2EED5' }}>
                <div className='categories-folder'>
                  <Folder className='categories-folder' background_color='white' caption='1978 - 1989'
                          wrapperType={'timeline-folder'}
                          handleClick={() => this.showModal('rise-of-foss')}>
                    <div className={'normal-folder'}>
                      <p>Rise Of Free Software</p>
                    </div>
                  </Folder>
                </div>
              </Col>
              <Col sm={12} md={12} lg={2} style={{ backgroundColor: '#FEFFB2' }}>
                <div className='categories-folder'>
                  <Folder className='categories-folder' background_color='white' caption='1991 - 1998'
                          wrapperType={'timeline-folder'}
                          handleClick={() => this.showModal('rise-of-cb')}>
                    <div className={'normal-folder normal-three-text'}>
                      <p>Rise Of Community Businesses</p>
                    </div>
                  </Folder>
                </div>
              </Col>
              <Col sm={12} md={12} lg={6} style={{ backgroundColor: '#B8FAFF' }}>
                <Row className={'categories-folder-rcontainer'}>
                  <Col sm={12} md={12} lg={{ span: 4, offset: 2 }}>
                    <div className='categories-folder-col'>
                      <Folder background_color='white' caption='1998 -2008'
                              wrapperType={'timeline-folder'}
                              handleClick={() => this.showModal('big-tech')}>
                        <div className={'normal-folder'}>
                          <p>Big Tech Fights Back</p>
                        </div>
                      </Folder>
                    </div>
                  </Col>
                </Row>
                <Row className={'categories-folder-rcontainer'} style={{ backgroundColor: '#66FFD5' }}>
                  <Col sm={12} md={12} lg={{ span: 4, offset: 2 }}>
                    <div className='categories-folder-col'>
                      <Folder background_color='white' caption='1999 - present'
                              wrapperType={'timeline-folder'}
                              captionClass={'present-caption'}
                              handleClick={() => this.showModal('global-proliferation')}>
                        <div className={'normal-folder'}>
                          <p>Global Proliferation</p>
                        </div>
                      </Folder>
                    </div>
                  </Col>
                </Row>
                <Row className={'categories-folder-rcontainer'} style={{ backgroundColor: '#FFD78F' }}>
                  <Col sm={12} md={12} lg={{ span: 4, offset: 2 }}>
                    <div className='categories-folder-col'>
                      <Folder background_color='white' caption='2001 - present'
                              wrapperType={'timeline-folder'}
                              captionClass={'present-caption'}
                              handleClick={() => this.showModal('expansion-in-india')}>
                        <div className={'normal-folder'}>
                          <p>Expansion In India</p>
                        </div>
                      </Folder>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={'section-ecosystem-wrapper'} id='section-4'>
          <div className={'foss-container'}>
            <div className={"index-card hide-text-md"}>04</div>
            <Row>
              <Col sm={12} md={3} lg={3} className={'left-col'}>
                <h2 className={'text-left-1'}>Indian FOSS Ecosyste&shy;m</h2>
              </Col>
              <Col sm={12} md={8} lg={8} className={'right-col'}>
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
            <Row className={'foss-ecosystem-images'}>
            <Col sm={12} md={6} lg={3}>
              <img
                src={require('../../static/images/ecosystemOne.png')}
                className='ecosystemOne-section-img'
                alt='ecosystem one'
              />
              </Col>
              <Col sm={12} md={6} lg={3}>
              <img
                src={require('../../static/images/ecosystemTwo.png')}
                className='ecosystemTwo-section-img'
                alt='ecosystem two'
              />
              </Col>
              <Col sm={12} md={6} lg={3}>
              <img
                src={require('../../static/images/ecosystemThree.png')}
                className='ecosystemThree-section-img'
                alt='ecosystem three'
              />
              </Col>
              <Col sm={12} md={6} lg={3}>
              <img
                src={require('../../static/images/ecosystemFour.png')}
                className='ecosystemFour-section-img'
                alt='ecosystem four'
              />
              </Col>
            </Row>
          </div>
        </Row>

        <div className={'section-challenges-wrapper'} id='section-5'>
          <div className={'foss-container'}>
            <div className={"index-card hide-text-md"}>05</div>
            <Row>
              <Col sm={12} md={12} lg={3} className={'left-col'}>
                {' '}
                <h2 className={'text-left-1'}>
                  Indian FOSS Ecosyst&shy;em & its Challen&shy;ges
                </h2>{' '}
                <Row>
              
                </Row>
              </Col>
              <Challenges />
            </Row>
          </div>
          <hr className={'section-end-hr'}></hr>
        </div>

        <Row className={'section-recommendations-wrapper'} id='section-6'>
          <div className={'foss-container'}>
            <div className={"index-card hide-text-md"}>06</div>
            <Row>
              <Col sm={12} md={12} lg={4} className={'left-col'}>
                <h2 className={'text-left-1'}>
                  Recommend&shy;ations to step up India’s FOSS game
                </h2>
              </Col>
              <Col sm={12} md={12} lg={{ span: 7, offset: 1 }}>
                <p className={'first-last-block'}>
                  To address some of the above mentioned challenges, we propose
                  4Cs for FOSS growth for various stakeholders
                </p>
                <img
                  src={require('../../static/images/recommendations.png')}
                  className='recommendations-section-img'
                  alt='recommendations section'
                />
              </Col>
            </Row>
          </div>
        </Row>

        <Row className='foss-focusarea-section hide-text-md' id='section-7'>
          <div className='foss-container'>
            <div className={"index-card hide-text-md"}>07</div>
            <Col sm={12}>
              <Row>
                <h2 className={'title-advancement'}>Our Focus Areas</h2>
              </Row>
            </Col>
            <Col sm={12} className='foss-focusarea-body'>
              <Row>
                <Col md={3} lg={2} style={{ left: '-3%' }}>
                  <Folder background_color='#FFDDD6' handleClick={() => this.showModal('page-foss-communities')}>
                    <div className={'another-normal-folder'}>
                      <p>FOSS & Communities</p>
                    </div>
                  </Folder>
                </Col>
                <Col md={3} lg={{ span: 2, offset: 1 }} style={{ left: '-3%' }}>
                  <Folder background_color='#FFD8FC' handleClick={() => this.showModal('page-foss-education')}>
                    <div className={'another-normal-folder'}>
                      <p>FOSS & Education</p>
                    </div>
                  </Folder>
                </Col>
                <Col md={3} lg={{ span: 2, offset: 1 }} style={{ left: '-3%' }}>
                  <Folder background_color='#FCFFE0' handleClick={() => this.showModal('page-foss-business')}>
                    <div className={'another-normal-folder'}>
                      <p>FOSS & Business</p>
                    </div>
                  </Folder>
                </Col>
                <Col md={3} lg={{ span: 2, offset: 1 }} style={{ left: '-3%' }}>
                  <Folder background_color='#AAD3FF' handleClick={() => this.showModal('page-foss-government')}>
                    <div className={'another-normal-folder'}>
                      <p>FOSS & Government</p>
                    </div>
                  </Folder>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>

        <div className={'section-collaborations-wrapper'} id='section-8'>
          <div className={'foss-container'}>
            <div className={"index-card hide-text-md"}>08</div>
            <Row>
              <Col sm={12} md={12} lg={4} className={'left-col'}>
                <h2 className={'text-left'}>
                  Sustained Collaborat&shy;ions to Build Future Pathways for FOSS in
                  India
                </h2>
              </Col>
              <Col sm={8} className={'right-col'}>
                <p className={'first-last-block-1'}>
                  The current pandemic has amplified FOSS’s importance due to the
                  movement’s ability to bring diverse actors together to build,
                  localize and deploy crisis response solutions effectively
                </p>
                <hr />
                <h2 className={'middle-block'}>
                  FOSS is an ideal choice for developing open-source digital
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
                </Row>
                <Row>
                  <Col className={"hide-text-md"} lg={{span: 6, offset: 6}}>
                    <img
                      src={require('../../static/images/collaborations.png')}
                      className='collaborations-section-img'
                      alt='collaborations section'
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <Row className='foss-download-section' id='download-section'>
          <div className='foss-container'>
            <Col sm={12}>
              <Row>
                <div className={'about-us-title'}>DOWNLOAD THE REPORT</div>
              </Row>
            </Col>
            <Col sm={12} className='foss-download-body'>
              <Row>
                <Col sm={12} md={6} lg={4}>
                  <div className={"download-folder-container"}>
                  <Folder background_color='white'>
                    <div className={'download-folder'}>
                      <p>The State of Free & Open Source Software in India</p>
                      <p>
                        <a className='foss-link' href='/the-state-of-foss-report-executive-summary.pdf' target='_blank'>
                          Executive Summary
                        </a>
                      </p>
                    </div>
                  </Folder>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={{ span: 4, offset: 1 }}>
                  <div className={"download-folder-container"}>
                  <Folder background_color='white'>
                    <div className={'download-folder'}>
                      <p>The State of Free & Open Source Software in India</p>
                      <p>
                        <a className='foss-link' href='/the-state-of-foss-report.pdf' target='_blank'>
                          Full Report
                        </a>
                      </p>
                    </div>
                  </Folder>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>


        {/* <div className={'section-front-page-wrapper'}>
        <img src={require('../../static/images/front-img-1.png')} />
        <div className={'section-container'}>
        <Col sm={3} className={'left-col'}>
          </Col>
        </div>
      </div> */}

        <div className={'foss-about-section'}>
          <div className={'foss-container'}>
            <div className={'about-us-title'}>ABOUT US</div>
            <br />

            <Row>

              <Col sm={12} lg={8}>
                <p className={'about-us-left-content'}>
                  <br />
                  <span>CivicDataLab</span> works with the goal to use data, tech, design and
                  social science to strengthen the course of civic engagements in
                  India. We work to harness the potential of open-source movement
                  to enable citizens to engage better with public reforms. We aim
                  to grow data and tech literacy of governments, nonprofits, think
                  tanks, media houses, universities etc to enable data-driven
                  decision making at scale.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={8}>
                <a href='https://civicdatalab.in/'>
                  <img
                    src={require('../../static/images/cdl-logo.png')}
                    className='about-us-section-img-cdl'
                    alt='cdl logo'
                  />
                </a>
              </Col>
              <Col sm={12} lg={4} className={'ONI-section'}>
                <p className={'about-us-right-content'}>

                  Supported By

                </p>
                <img
                  src={require('../../static/images/ONI-logo.png')}
                  className='about-us-section-img-ONI'
                  alt='oni logo'
                />
              </Col>
            </Row>
          </div>
        </div>
        <Row className='foss-footer-section'>
          <div className='foss-container'>
            <Col sm={12}>
              <Row>
                <div className={'about-us-title'} style={{ marginLeft: 0 }}>
                  CONTACT US
                </div>
              </Row>
            </Col>
            <Col sm={12} className='foss-social-media'>
              <a href='https://github.com/state-of-foss/website'>
                <img
                  className='foss-social-media-icon'
                  src='images/github-logo.png'
                  alt='github logo'
                ></img>
              </a>
              <a href='https://twitter.com/StateOfFOSS'>
                <img
                  className='foss-social-media-icon'
                  src='images/twitter-logo.png'
                  alt='twitter logo'
                ></img>
              </a>
              <a href='mailto: foss@civicdatalab.in'>
                <img
                  className='foss-social-media-icon'
                  src='images/mail-logo.png'
                  alt='email logo'
                ></img>
              </a>
            </Col>
            <Col className={"footer-cc"}>
              <p className={'foss-cc-by-content'}>The State of Foss in India by<a href='https://civicdatalab.in/'
                                                                                  target='_blank'
                                                                                  className={'cdl-link'}> CivicDataLab</a> is
                licensed under <a href='https://creativecommons.org/licenses/by/4.0?ref=chooser-v1' target='_blank'
                                  className={'cdl-link'}>CC BY 4.0 </a>
                <div className={"cc-logo"}>
                <img
                  className='foss-cc-by-img-1'
                  src='images/cc-1.svg'
                  alt='cc'
                ></img>
                <img
                  className='foss-cc-by-img-2'
                  src='images/cc.svg'
                  alt='cc'
                ></img></div>
              </p>
            </Col>
          </div>
        </Row>
      </div>
    );
  };
}

export default Home;
