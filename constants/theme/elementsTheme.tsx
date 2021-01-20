import React from 'react';
import {Theme} from 'react-native-elements';
import IconFaCheckSquareSolid from '../../components/svg/IconFaCheckSquareSolid';
import IconFaSquareRegular from '../../components/svg/IconFaSquareRegular';
import {themeStyles} from '../../components/typography';
import {fonts} from './fonts';
import {colors} from './colors';
import {TouchableOpacity} from 'react-native';

export const elementsTheme: Theme = {
  colors: {
    primary: colors.primary1,
  },
  Text: {
    style: {
      fontFamily: fonts.primary.normal,
    },
  },
  Button: {
    containerStyle: {
      marginVertical: 6,
    },
    buttonStyle: {
      height: Math.round(48),
      borderRadius: 0,
    },
    titleStyle: {
      fontFamily: fonts.primary.bold,
      fontSize: fonts.size[14],
      textTransform: 'uppercase',
    },
    iconContainerStyle: {
      marginHorizontal: 24,
    },
  },
  CheckBox: {
    containerStyle: {
      marginVertical: 2,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    textStyle: {
      fontFamily: fonts.primary.normal,
      fontSize: fonts.size[16],
      fontWeight: 'normal',
      color: colors.secondary1,
      marginLeft: 16,
    },
    checkedColor: colors.primary2,
    uncheckedColor: colors.primary2,
    size: fonts.size[18],
    iconType: 'font-awesome',
    checkedIcon: (
      <IconFaCheckSquareSolid width={16} height={18} fill={colors.primary2} />
    ),
    uncheckedIcon: (
      <IconFaSquareRegular width={16} height={18} fill={colors.primary2} />
    ),
  },
  Slider: {
    minimumTrackTintColor: colors.primary2,
    maximumTrackTintColor: colors.bgSliderInactive,
    thumbStyle: {
      backgroundColor: colors.bg1,
      borderColor: colors.primary2,
      borderRadius: 7.5,
      borderWidth: 5,
      width: 16,
      height: 16,
    },
  },
  Icon: {
    type: 'font-awesome',
  },
  Input: {
    containerStyle: {
      paddingHorizontal: 0,
      borderBottomColor: 'transparent',
      height: 82,
    },
    inputContainerStyle: {
      height: Math.round(40),
      borderBottomColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 1,
      backgroundColor: colors.bgInput1,
    },
    inputStyle: {
      fontSize: fonts.size[16],
      fontFamily: fonts.primary.medium,
      borderBottomColor: 'transparent',
      color: colors.primary1,
      justifyContent: 'flex-start',
      height: 40,
      paddingHorizontal: 16,
      marginLeft: 0,
    },
    rightIconContainerStyle: {
      paddingRight: 16,
      marginRight: 0,
      marginLeft: 0,
    },
    labelStyle: {
      fontSize: fonts.size[12],
      fontFamily: fonts.primary.medium,
      color: colors.secondary1,
      fontWeight: '500',
    },
  },
  Header: {
    containerStyle: {
      paddingHorizontal: 16,
      paddingBottom: 0,
    },
  },
  ListItem: {
    containerStyle: {
      paddingHorizontal: 16,
      borderColor: '#B4C1CC',
    },
    titleStyle: {
      ...themeStyles.listItemText,
    },
    Component: TouchableOpacity,
  },
  Tooltip: {
    overlayColor: 'rgba(0, 0, 0, .4)',
    backgroundColor: colors.bg1,
  },
  Overlay: {
    overlayStyle: {
      padding: 0,
    },
  },
};
