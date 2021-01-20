import React from 'react';
import {StyleSheet, View} from 'react-native';
import HamburgerMenuButton from './main/HamburgerMenuButton';
import ProfileMenuButton from './main/ProfileMenuButton';
import HeaderLogoImage from './main/HeaderLogoImage';
import {colors} from '../../constants/theme';
import {Header} from 'react-native-elements';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import MainSearchInput from '../input/MainSearchInput';

const MainHeader = ({headerTitle}) => {

  return (
    <View>
      <Header
        statusBarProps={{
          translucent: true,
          barStyle: 'light-content',
          backgroundColor: 'transparent',
        }}
        containerStyle={styles.containerStyle}
        leftComponent={
          <HamburgerMenuButton onPress={() => {}} />
        }
        centerComponent={
          <HeaderLogoImage
            onPress={() => {}}
          />
        }
        rightComponent={
          <ProfileMenuButton onPress={() => {}} />
        }
      />

      <MainSearchInput title={headerTitle} />

    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  containerStyle: {
    height: 56 + getStatusBarHeight(),
    backgroundColor: colors.primary1,
    borderBottomWidth: 0,
  },
});
