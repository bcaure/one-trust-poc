import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../constants/theme';
import {CheckBox} from 'react-native-elements';
import {SpacerHS} from '../../components/spacer';
import {ErrorText} from '../../components/typography';
import IconFaCheckSquareSolid from '../../components/svg/IconFaCheckSquareSolid';

export const DataPrivacyField = ({value, onChange, errorMessage, onBlur, onClick}) => {
  console.log('DataPrivacyField value', value);
  return (
    <View style={styles.container}>
      <CheckBox
        checked={value}
        onPress={onClick}
      />
      <SpacerHS />
      <Text onPress={onClick} style={[styles.text, styles.link]}>
        Privacy preferences
      </Text>
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </View>
  );
};

export const TermsAndCondField = ({value, onChange, errorMessage, onBlur}) => {
  console.log('TermsAndCondField value', value);
  return (
    <View style={styles.container}>
      <CheckBox
        checked={value}
        onPress={() => {
          onChange(!value);
          onBlur();
        }}
      />
      <SpacerHS />
      <Text style={styles.text}>I agree to </Text>
      <Text style={[styles.text, styles.link]}>
        Terms and Conditions{' '}
      </Text>
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </View>
  );
};

export const SendInfoField = ({value, onChange}) => {
  console.log('SendInfoField value', value);
  return (
    <View style={styles.container}>
      <CheckBox checked={value} onPress={() => onChange(!value)} />
      <SpacerHS />
      <Text style={[styles.text, styles.flexText]}>
        Please send me information about Mix Lab and related family of spirits
        brands
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: fonts.size[12],
    lineHeight: 16,
    color: colors.secondary1,
  },
  flexText: {
    flex: 1,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
