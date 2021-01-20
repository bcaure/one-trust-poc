import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, HeaderProps} from 'react-native-elements';

/**
 * To be used as subheader, for example: https://zpl.io/2Gwz4kd
 *  */

const SubHeader = (props: HeaderProps) => {
  return <Header containerStyle={styles.containerStyle} {...props} />;
};

export default SubHeader;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    height: 50,
  },
});
