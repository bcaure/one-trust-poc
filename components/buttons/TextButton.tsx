import React from 'react';
import {PrimaryTextLink} from '../../components/typography';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../../constants/theme';

const noop = () => {};

const TextButton = ({
  title = '',
  onPress = noop,
  LeftIconComponent = null,
  RightIconComponent = null,
  disabled = false,
  showDisabledAsGrey = false, // if color will change to grey when disabled
  small = false,
  id='TextButton',
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} accessible={false}>
      <View style={styles.container}>
        {!!LeftIconComponent && LeftIconComponent}
        <PrimaryTextLink
          style={[
            styles.title,
            showDisabledAsGrey && disabled && styles.disabled,
            small && styles.small,
          ]}>
          {title}
        </PrimaryTextLink>
        {!!RightIconComponent && RightIconComponent}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    lineHeight: 18,
  },
  disabled: {
    color: colors.disabled,
  },
  small: {
    fontSize: fonts.size[14],
  },
});

export default TextButton;
