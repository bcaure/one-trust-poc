import React from 'react';
import {StyleSheet, StatusBarProps} from 'react-native';
import {Header, HeaderProps} from 'react-native-elements';

const statusBarProps: StatusBarProps = {
  barStyle: 'dark-content',
};

const SimpleHeader = (props: HeaderProps) => {
  return (
    <Header
      statusBarProps={statusBarProps}
      containerStyle={styles.containerStyle}
      {...props}
    />
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9E0E6',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingTop: 0,
    height: 50,
  },
});
