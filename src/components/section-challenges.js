import React from 'react';
import data from '../../static/data/data.json';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Challenges = () => {
  const [value, setValue] = React.useState(0);
  const { id, name, bold, content } = data[value];
  return (
    <>
      <Col sm={3}>
        <div className={'container-challenges'}>
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setValue(index)}
                className={`challenges ${
                  index == value && 'challenges-active'
                }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </Col>
      <Col sm={6}>
        <div>
          <p className={'container-challenges-content'}>
            <span>{bold}</span>
            {content}
          </p>
        </div>
      </Col>
    </>
  );
};

export default Challenges;
