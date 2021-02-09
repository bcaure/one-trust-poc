import React, {useState, useCallback} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Input} from 'react-native-elements';
import {colors, fonts} from '../../constants/theme';
import {themeStyles} from '../typography';
import DatePicker from './DatePicker';
import moment from 'moment';

const DATE_FORMAT = 'MM/DD/YYYY';

const rightIcon = {
  type: 'font-awesome',
  name: 'calendar',
  size: fonts.size[18],
  color: colors.primary2,
};
const rightIconError = {
  ...rightIcon,
  color: colors.primary3,
};

const inputContainerStyles = {
  backgroundColor: colors.bgInput1,
  borderColor: colors.secondary1,
  borderBottomColor: colors.secondary1, // for android style
  borderWidth: 1,
};

const inputContainerErrorStyle = {
  backgroundColor: colors.bgInputError1,
  borderLeftColor: colors.primary3,
  borderTopColor: colors.primary3,
  borderRightColor: colors.primary3,
  borderBottomColor: colors.primary3,
  borderColor: colors.primary3,
  borderWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
};

const errorMessageStyle = {
  ...themeStyles.errorText,
  marginHorizontal: 0,
};

const labelStyle = {
  ...themeStyles.label4,
  marginBottom: 4,
};

const InputDate = ({
  value,
  onChange,
  placeholder = '',
  onBlur,
  pristine,
  ...inputProps
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {label, errorMessage} = inputProps;
  const hasError = !pristine && !!errorMessage;

  const formattedValue = value ? moment(value).format(DATE_FORMAT) : null;
  const handleFocus = useCallback(
    event => {
      onBlur(event);
      setShowDatePicker(false);
    },
    [onBlur, setShowDatePicker],
  );

  return (
    <Input
      value={formattedValue}
      editable={true}
      placeholder={placeholder}
      placeholderTextColor={colors.secondary3}
      rightIcon={hasError ? rightIconError : rightIcon}
      label={label}
      inputContainerStyle={hasError ? inputContainerErrorStyle : inputContainerStyles}
      errorStyle={errorMessageStyle}
      labelStyle={labelStyle}
      {...inputProps}
      errorMessage={hasError ? errorMessage : undefined}
    />

  );
};

export default InputDate;
