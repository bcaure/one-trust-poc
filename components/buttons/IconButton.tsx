import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {get} from 'lodash';

const noop = () => {};

const getHitSlop = (width: number, height: number, rangeX = 40, rangeY = 40) => {
  const halfXRange = rangeX > width ? (rangeX - width) / 2 : 0;
  const halfYRange = rangeY > height ? (rangeY - height) / 2 : 0;
  return {
    top: halfYRange,
    bottom: halfYRange,
    left: halfXRange,
    right: halfXRange,
  };
};

const IconButton = ({IconComponent, onPress, style, disabled, loading, id = 'IconButton'}) => {
  const {width = 0, height = 0} = get(IconComponent, 'props', {});
  const hitSlop = getHitSlop(width, height);

  return (
    <TouchableOpacity 
    onPress={onPress} 
    hitSlop={hitSlop} 
    disabled={disabled}>
      {!loading && <View style={style} children={IconComponent} />}
    </TouchableOpacity>
  );
};
IconButton.defaultProps = {
  disabled: false,
  onPress: noop,
  style: {},
};

export default IconButton;
