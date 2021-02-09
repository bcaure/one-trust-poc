import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';
import {colors} from '../../constants/theme';
import {TouchableOpacity} from 'react-native';

const originalType = {
  primary: 'solid',
  secondary: 'outline',
  tertiary: 'clear',
};

const containerStyle = {
  width: '100%',
};

const disabledStyles = {
  primary: {
    backgroundColor: colors.primary1,
  },
  secondary: {},
  tertiary: {},
};

const disabledTitleStyles = {
  primary: {
    color: colors.secondary2,
  },
  secondary: {
    color: colors.secondary2,
  },
  tertiary: {
    color: colors.secondary2,
  },
};

const loadingProps = {color: '#808080', size: 'small'};

const MainButton = ({
  type,
  visible,
  loading,
  disabled,
  onPress,
  id,
  ...rest
}) => {
  const [onPressLoading, setOnPressLoading] = useState(false);
  const titleStyle = type === 'tertiary' ? {color: colors.primary2} : {};
  const opacity = visible ? 1 : 0;
  const mountedRef = { current: false };

  const handleOnPress = useCallback(
    e => {
      const res = onPress(e);
      if (res && res.finally) {
        if (mountedRef.current) setOnPressLoading(true);
        res.finally(() => {
          if (mountedRef.current) setOnPressLoading(false);
        });
      }
      return res;
    },
    [onPress],
  );

  return (
    <Button
      type={originalType[type]}
      containerStyle={{...containerStyle, opacity}}
      titleStyle={titleStyle}
      disabledStyle={disabledStyles[type]}
      disabledTitleStyle={disabledTitleStyles[type]}
      disabled={disabled || !visible}
      loading={loading || onPressLoading}
      loadingProps={loadingProps}
      TouchableComponent={TouchableOpacity}
      onPress={handleOnPress}
      {...rest}
    />
  );
};

MainButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
};

MainButton.defaultProps = {
  type: 'primary',
  visible: true,
  loading: false,
  disabled: false,
};

export default MainButton;
