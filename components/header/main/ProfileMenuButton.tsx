import React from 'react';
import {StyleSheet, Image} from 'react-native';
import IconButton from '../../buttons/IconButton';
import {colors} from '../../../constants/theme';
import IconFaUserCircleLight from '../../svg/IconFaUserCircleLight';
import AvatarPlaceholder from '../../assets/img/avatar/avatar-placeholder.png';
import {isEmpty} from 'lodash';

const SIZE = 34;

const placeholderIcon = (
  <IconFaUserCircleLight width={SIZE} height={SIZE} fill={colors.bg1} />
);

const Component = ({onPress, disabled = false}) => {

  const avatarIcon = (
    <Image
      source={AvatarPlaceholder}
      width={SIZE}
      height={SIZE}
      style={styles.avatarIcon}
    />
  );

  return (
    <IconButton
      IconComponent={placeholderIcon}
      style={styles.icon}
      onPress={onPress}
      disabled={disabled}
      id='ProfileMenuButton'
      loading={false}
    />
  );
};

const ProfileMenuButton = React.memo(Component);
export default ProfileMenuButton;

const styles = StyleSheet.create({
  icon: {
    width: SIZE,
    height: SIZE,
    backgroundColor: colors.secondary3,
    borderRadius: SIZE / 2,
  },
  avatarIcon: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
});
