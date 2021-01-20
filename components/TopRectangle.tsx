import React from 'react';
import { View, StyleSheet } from 'react-native';
import {colors} from '../constants/theme';

export const TopRectangle = ({color = colors.primary1, style = {}}) => (
  <View style={[styles.topBar, {backgroundColor: color}, style]} />
);
const styles = StyleSheet.create({
  topBar: {
    height: 8,
    width: '100%',
  },
});
