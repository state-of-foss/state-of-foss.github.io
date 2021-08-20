import React, { Component } from 'react';
import arrow from '../../static/images/arrow.png';
import arrow_back from '../../static/images/back.png';
import foss_community from '../../static/images/foss-community.png';
import foss_community_flow from '../../static/images/foss-community-flow.png';
import page_foss_community_challenges from '../../static/images/page-foss-community-challenges.png';

import page_foss_education_one from '../../static/images/page-foss-education-one.png';
import page_foss_education_two from '../../static/images/page-foss-education-two.png';
import page_foss_education_three from '../../static/images/page-foss-education-three.png';

import page_foss_biz_one from '../../static/images/page-foss-biz-one.png';
import page_foss_biz_two from '../../static/images/page-foss-biz-two.png';
import page_foss_biz_three from '../../static/images/page-foss-biz-three.png';

import page_foss_gov_one from '../../static/images/page-foss-gov-one.png';
import page_foss_gov_two from '../../static/images/page-foss-gov-two.jpg';
import page_foss_gov_three from '../../static/images/page-foss-gov-three.png';
import FocusAreaContentComm from './FocusAreaContentComm';
import FocusAreaContentEdu from './FocusAreaContentEdu';
import FocusAreaContentBuiss from './FocusAreaContentBuiss';
import FocusAreaContentGov from './FocusAreaContentGov';

import expansion_in_india_one from '../../static/images/timeline-expansion-in-india-one.png';
import expansion_in_india_two from '../../static/images/timeline-expansion-in-india-two.png';

export default class FolderFocusArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: 'temp',
      step: 0,
      width: false
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);

    this.page_map = {
      temp: [],
      'expansion-in-india': [expansion_in_india_one, expansion_in_india_two],
      'page-foss-communities': [
        foss_community,
        foss_community_flow,
        page_foss_community_challenges,
        <FocusAreaContentComm />
      ],
      'page-foss-education': [
        page_foss_education_one,
        page_foss_education_three,
        page_foss_education_two,
        <FocusAreaContentEdu />
      ],
      'page-foss-business': [
        page_foss_biz_one,
        page_foss_biz_three,
        page_foss_biz_two,
        <FocusAreaContentBuiss />
      ],
      'page-foss-government': [
        page_foss_gov_one,
        page_foss_gov_three,
        page_foss_gov_two,
        <FocusAreaContentGov />
      ]
    };
  }

  nextStep = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1
      };
    });
  };

  previousStep = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step - 1
      };
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.folder) {
      if (nextProps.folder === 'expansion-in-india') {
        this.setState({ width: true });
      } else {
        this.setState({ width: false });
      }
      this.setState({ step: 0, folder: '', folder: nextProps.folder });
    }
  }

  render() {
    return (
      <div>
        {this.state.step > 0 && (
          <img
            className="modal-previous"
            alt="modal-previous"
            src={arrow_back}
            onClick={this.previousStep}
          />
        )}
        {this.state.step < this.page_map[this.state.folder].length - 1 && (
          <img
            className="modal-next"
            alt="modal-next"
            src={arrow}
            onClick={this.nextStep}
          />
        )}
        {this.state.step < 3 ? (
          <div>
            {this.state.folder !== 'temp' && (
              <img
                className={
                  'folder-image-nested ' +
                  (this.state.width ? 'folder-width-full' : '')
                }
                alt="folder"
                src={this.page_map[this.state.folder][this.state.step]}
              />
            )}
          </div>
        ) : (
          <div className={'folder-component-view'}>
            {this.page_map[this.state.folder][this.state.step]}
          </div>
        )}
      </div>
    );
  }
}
