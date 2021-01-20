import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import IconCircles1 from '../../../assets/svg/os-grapefruitcircles.svg';
import IconCircles2 from '../../../assets/svg/os-tealcircles.svg';
import IconCircles3 from '../../../assets/svg/os-goldcircles.svg';

const IconCircles = ({step, ...attrs}) => {
  switch (step) {
    case 2:
      return <IconCircles2 {...attrs} />;
      break;
    case 3:
      return <IconCircles3 {...attrs} />;
      break;
    default:
      return <IconCircles1 {...attrs} />;
  }
};

IconCircles.propTypes = {
  step: PropTypes.oneOf([1, 2, 3]),
};

IconCircles.defaultProps = {
  step: 1,
};

export default IconCircles;
