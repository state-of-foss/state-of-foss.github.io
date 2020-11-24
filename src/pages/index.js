import React from 'react';
import Card from '../components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map((edge) => ({
    id: edge.node.id,
    html: edge.node.html
  }));
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card background_color="#01BCD5">
            <ul>
              <li>Build robust FOSS stacks for key sectors like Health, Education, Finance and more</li>
              <li>Enable more privacy-centric, secure and ethical trust-based computing</li>
              <li>Onboard more users by delivering digital services in more Indian Language</li>
            </ul>
            </Card>
          </Col>
          <Col>
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
          <Col>
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
      </Container>
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
