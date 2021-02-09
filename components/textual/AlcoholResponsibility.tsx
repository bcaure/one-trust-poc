import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants/theme';
import {textStyle} from '../typography';

const AlcoholResponsibility = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        For information on Alcohol Responsibility visit{' '}
      </Text>
      <Text
        onPress={() => {}}
        style={[styles.text, styles.link]}>
        responsibledrinking.org{' '}
      </Text>
      <Text style={styles.text}>and </Text>
      <Text onPress={() => {}} style={[styles.text, styles.link]}>
        responsibility.org.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '6',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: '8',
    paddingHorizontal: 16,
    backgroundColor: colors.bgInputError1,
  },
  text: {
    ...textStyle(fonts.primary.normal, colors.secondary1, 12, 1.33),
  },
  link: {
    textDecorationLine: 'underline',
    color: colors.primary2,
  },
});

export default AlcoholResponsibility;
