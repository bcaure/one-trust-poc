import React from 'react';
import {Text, View} from 'react-native';
import {colors, fonts} from '../../constants/theme';

const Consent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>By signing up, you agree to the </Text>
      <Text onPress={() => { console.log('Open Consent.tsx') }} style={[styles.text, styles.link]}>
        terms of service{' '}
      </Text>
      <Text style={styles.text}>and the </Text>
      <Text onPress={() => { console.log('Open Consent.tsx') }} style={[styles.text, styles.link]}>
        data privacy policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: '8',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: fonts.size[9],
    lineHeight: 16,
    color: colors.secondary1,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default Consent;
