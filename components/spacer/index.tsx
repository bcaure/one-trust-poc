import React from 'react';
import {StyleSheet, View} from 'react-native';

function createComponent(defaultStyle) {
  return () => <View style={defaultStyle} />;
}

export function spacerStyle(size, isHorizontal = false) {
  if (isHorizontal) return {width: size};
  return {height: size};
}

export const styles = StyleSheet.create({
  xxl: spacerStyle(40),
  xl: spacerStyle(32),
  l: spacerStyle(24),
  m: spacerStyle(16),
  s: spacerStyle(8),
  xs: spacerStyle(4),
  hXxl: spacerStyle(40, true),
  hXl: spacerStyle(32, true),
  hL: spacerStyle(24, true),
  hM: spacerStyle(16, true),
  hS: spacerStyle(8, true),
  hXs: spacerStyle(4, true),
});

/**
 * Vertical spacer (40)
 */
export const SpacerXxl = createComponent(styles.xxl);
/**
 * Vertical spacer (32)
 */
export const SpacerXl = createComponent(styles.xl);
/**
 * Vertical spacer (24)
 */
export const SpacerL = createComponent(styles.l);
/**
 * Vertical spacer (16)
 */
export const SpacerM = createComponent(styles.m);
/**
 * Vertical spacer (8)
 */
export const SpacerS = createComponent(styles.s);
/**
 * Vertical spacer (4)
 */
export const SpacerXs = createComponent(styles.xs);
/**
 * Horizontal spacer (40)
 */
export const SpacerHXxl = createComponent(styles.hXxl);
/**
 * Horizontal spacer (32)
 */
export const SpacerHXl = createComponent(styles.hXl);
/**
 * Horizontal spacer (24)
 */
export const SpacerHL = createComponent(styles.hL);
/**
 * Horizontal spacer (16)
 */
export const SpacerHM = createComponent(styles.hM);
/**
 * Horizontal spacer (8)
 */
export const SpacerHS = createComponent(styles.hS);
/**
 * Horizontal spacer (4)
 */
export const SpacerHXs = createComponent(styles.hXs);
