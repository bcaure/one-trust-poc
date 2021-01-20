import React, {useMemo} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {colors, fonts} from '../../constants/theme';
import {Header} from 'react-native-elements';
import {logoColor} from '../images';
import {textStyle} from '../typography';

const noop = () => {};
const LOGO_WIDTH = 44;
const LOGO_HEIGHT = 47;
const LOGO_MARGIN_TOP = Math.min(20, 20);
const LOGO_MARGIN_BOTTOM = 24;
const HEADER_HEIGHT = Math.round(
  LOGO_HEIGHT + LOGO_MARGIN_TOP + LOGO_MARGIN_BOTTOM,
);

const statusBarProps = {
  translucent: true,
  barStyle: 'dark-content',
  backgroundColor: 'transparent',
};

const IntroHeader = ({
  showBackButton = false,
  onBackPress = noop,
  rightText = null,
}) => {
  const centerComponent = useMemo(
    () => <Image source={logoColor} style={styles.logo} resizeMode="contain" />,
    [],
  );
  const leftComponent = useMemo(
    () =>
      null,
    [showBackButton, onBackPress],
  );
  const rightComponent = useMemo(
    () => !!rightText && <Text style={styles.text}>{rightText}</Text>,
    [rightText],
  );
  return (
    <Header
      statusBarProps={statusBarProps}
      containerStyle={styles.containerStyle}
      leftContainerStyle={styles.leftContainerStyle}
      centerContainerStyle={styles.centerContainerStyle}
      rightContainerStyle={styles.rightContainerStyle}
      {...{leftComponent, centerComponent, rightComponent}}
    />
  );
};

export default IntroHeader;

const styles = StyleSheet.create({
  containerStyle: {
    height: HEADER_HEIGHT,
    paddingTop: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    alignItems: 'flex-start',
  },
  leftContainerStyle: {
    height: 50,
    justifyContent: 'center',
  },
  centerContainerStyle: {
    marginTop: LOGO_MARGIN_TOP,
  },
  rightContainerStyle: {
    height: 50,
    justifyContent: 'center',
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  text: {
    ...textStyle(fonts.primary.normal, colors.secondary1, 18, 1),
  },
});
