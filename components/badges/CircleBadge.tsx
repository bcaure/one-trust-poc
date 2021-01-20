import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants/theme';
import {textStyle} from '../typography';

const CircleBadge = ({value = 0}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

CircleBadge.propTypes = {
  value: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    ...textStyle(fonts.primary.bold, colors.bg1, 12),
  },
});

export default CircleBadge;
