import React from 'react';
import data from '../../static/data/data.json';
import { Col } from 'react-bootstrap';

const Challenges = () => {
  const [value, setValue] = React.useState(1);
  const { bold, content } = data[value];
  return (
    <>
      <Col sm={12} md={12} lg={3}>
        <div className={'container-challenges'}>
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setValue(index)}
                role="button"
                tabIndex={index}
                className={`challenges ${
                  index === value && 'challenges-active'
                }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </Col>
      <Col sm={12} md={12} lg={6}>
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
