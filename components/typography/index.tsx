import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/colors';
import {fonts} from '../../constants/theme/fonts';
import {values, max, min, clamp} from 'lodash';

function createTextComponent(defaultStyle: any) {
  const fontScalingProps = getFontScalingProps(defaultStyle.fontSize);
  return ({style = null, ...rest}) => (
    <Text style={[defaultStyle, style]} {...fontScalingProps} {...rest} />
  );
}

function getFontScalingProps(fontSize: any) {
  if (isNaN(parseFloat(fontSize))) return {};
  const multMin = 1.1;
  const multMax = 1.5;
  const sizeMin = min(values(fonts.size));
  const sizeMax = max(values(fonts.size));
  const clamped = clamp(parseFloat(fontSize), sizeMin, sizeMax);
  const unitInterval = (clamped - sizeMin) / (sizeMax - sizeMin);
  const inversedInterval = 1 - unitInterval;
  const unroundedMultiplier = multMin + (multMax - multMin) * inversedInterval;
  const maxFontSizeMultiplier = Math.round(unroundedMultiplier * 100) / 100;
  return {maxFontSizeMultiplier, allowFontScaling: true};
}

export function textStyle(fontFamily: any, color: any, size: any, lineHeightMultiplier = 1) {
  const fontSize = fonts.size[size];
  const lineHeight = fontSize * lineHeightMultiplier;
  return {fontFamily, color, fontSize, lineHeight};
}

export const themeStyles = StyleSheet.create({
  title: textStyle(fonts.primary.bold, colors.bg1, 32),
  subtitle: textStyle(fonts.primary.medium, colors.bg1, 18, 1.33),
  h1: textStyle(fonts.primary.bold, colors.primary1, 24),
  h2: textStyle(fonts.primary.bold, colors.primary1, 18),
  h3: textStyle(fonts.primary.bold, colors.primary1, 16, 1.13),
  h4: textStyle(fonts.primary.bold, colors.primary1, 14, 1.14),
  label1: {
    ...textStyle(fonts.primary.bold, colors.secondary2, 14),
    textTransform: 'uppercase',
  },
  label2: textStyle(fonts.primary.medium, colors.secondary1, 16, 1.5),
  label3: textStyle(fonts.primary.medium, colors.secondary1, 14),
  label4: textStyle(fonts.primary.medium, colors.secondary1, 12),
  inputText: textStyle(fonts.primary.medium, colors.secondary1, 16),
  helperText: textStyle(fonts.primary.normal, colors.secondary3, 16),
  listItemText: textStyle(fonts.primary.normal, colors.secondary1, 16),
  listItemTextBold: textStyle(fonts.primary.bold, colors.secondary1, 16),
  listItemTextSmall: textStyle(fonts.primary.normal, colors.secondary1, 12),
  bodyText: textStyle(fonts.primary.normal, colors.secondary1, 16, 1.5),
  bodyTextLink: {
    ...textStyle(fonts.primary.normal, colors.primary2, 16, 1.5),
    textDecorationLine: 'underline',
  },
  subBodyText: textStyle(fonts.primary.normal, colors.secondary1, 14, 1.29),
  primaryTextLink: textStyle(fonts.primary.medium, colors.primary2, 16),
  secondaryTextLink: textStyle(fonts.primary.medium, colors.primary2, 14),
  errorText: textStyle(fonts.primary.medium, colors.primary3, 12),
  actionTextPrimary: {
    ...textStyle(fonts.primary.bold, colors.primary1, 14),
    textTransform: 'uppercase',
  },
  actionTextSecondary: {
    ...textStyle(fonts.primary.bold, colors.primary3, 14),
    textTransform: 'uppercase',
  },
  actionTextTertiary: {
    ...textStyle(fonts.primary.bold, colors.primary2, 14),
    textTransform: 'uppercase',
  },
});

export const Title = createTextComponent(themeStyles.title);
export const Subtitle = createTextComponent(themeStyles.subtitle);
export const H1 = createTextComponent(themeStyles.h1);
export const H2 = createTextComponent(themeStyles.h2);
export const H3 = createTextComponent(themeStyles.h3);
export const H4 = createTextComponent(themeStyles.h4);
export const Label1 = createTextComponent(themeStyles.label1);
export const Label2 = createTextComponent(themeStyles.label2);
export const Label3 = createTextComponent(themeStyles.label3);
export const Label4 = createTextComponent(themeStyles.label4);
export const InputText = createTextComponent(themeStyles.inputText);
export const HelperText = createTextComponent(themeStyles.helperText);
export const ListItemText = createTextComponent(themeStyles.listItemText);
export const ListItemTextBold = createTextComponent(
  themeStyles.listItemTextBold,
);
export const ListItemTextSmall = createTextComponent(
  themeStyles.listItemTextSmall,
);
export const BodyText = createTextComponent(themeStyles.bodyText);
export const BodyTextLink = createTextComponent(themeStyles.bodyTextLink);
export const SubBodyText = createTextComponent(themeStyles.subBodyText);
export const PrimaryTextLink = createTextComponent(themeStyles.primaryTextLink);
export const SecondaryTextLink = createTextComponent(
  themeStyles.secondaryTextLink,
);
export const ErrorText = createTextComponent(themeStyles.errorText);
export const ActionTextPrimary = createTextComponent(
  themeStyles.actionTextPrimary,
);
export const ActionTextSecondary = createTextComponent(
  themeStyles.actionTextSecondary,
);
export const ActionTextTertiary = createTextComponent(
  themeStyles.actionTextTertiary,
);
