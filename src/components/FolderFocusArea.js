import React, { Component } from 'react';
import close from '../../static/images/close.png';
import arrow from '../../static/images/arrow.png';
import arrow_back from '../../static/images/back.png';
import foss_community from '../../static/images/foss-community.png';
import foss_community_flow from '../../static/images/foss-community-flow.png';



export default class FolderFocusArea extends Component {
    constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);

    this.page_map = {
      "page-foss-communities": 1,
      "page-foss-education": 2,
      "page-foss-business": 3,
      "page-foss-government": 4
    }

    this.image_map = [foss_community, foss_community_flow, foss_community, close];
  }

  nextStep = () => {
    this.setState({ step: this.state.step += 1 });
  };

  previousStep = () => {
    this.setState({ step: this.state.step -= 1 });
  };

  componentWillReceiveProps(nextProps) {
  if(nextProps.step) {
    this.setState({step: this.page_map[nextProps.step]});
  }
}

  render() {
  return (
      <div>
        {this.state.step > 1 &&
          <img className="modal-previous" src={arrow_back} onClick={this.previousStep} />
        }
        {this.state.step < this.image_map.length &&
          <img className="modal-next" src={arrow} onClick={this.nextStep} />
        }
          <img className={"folder-image"} src={this.image_map[this.state.step - 1]} />
      </div>
  );
  }
}
