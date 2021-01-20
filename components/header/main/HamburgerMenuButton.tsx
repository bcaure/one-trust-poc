import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {navHamburgerMenu} from '../../images';

const hitSlop = {top: 12, bottom: 12, left: 10, right: 10};

const HamburgerMenuButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} hitSlop={hitSlop}>
      <Image source={navHamburgerMenu} width={24} height={17}/>
    </TouchableOpacity>
  );
};

export default HamburgerMenuButton;
