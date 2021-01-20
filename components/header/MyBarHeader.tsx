import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {size} from 'lodash';
import {H1} from '../typography';
import MainHeader from './MainHeader';
import {colors} from '../../constants/theme';
import CircleBadge from '../badges/CircleBadge';

const CounterHeader = () => {
  return <CircleBadge value={10} />;
};
const MyBarHeader = props => {
  return (
    <View>
      <MainHeader {...props} />
      <View style={styles.container}>
        <H1>My Bar</H1>
        <CounterHeader />
      </View>
    </View>
  );
};

export default MyBarHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bg1,
    paddingTop: 24,
    paddingBottom: 4,
  },
});
