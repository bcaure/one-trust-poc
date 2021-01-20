import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {logoWhite} from '../../images';

const HeaderLogoImage = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={logoWhite} width={32} height={32} />
    </TouchableWithoutFeedback>
  );
};

export default HeaderLogoImage;
