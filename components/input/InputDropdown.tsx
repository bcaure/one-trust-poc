import React, {useState, useMemo, useCallback} from 'react';
import {find, get} from 'lodash';
import {
  View,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Input, Overlay} from 'react-native-elements';
import {colors, fonts} from '../../constants/theme';
import {themeStyles, ListItemText} from '../typography';
import MainButton from '../buttons/MainButton';


const rightIcon = {
  type: 'font-awesome',
  name: 'angle-down',
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
  borderWidth: 1,
};

const errorMessageStyle = {
  ...themeStyles.errorText,
  marginHorizontal: 0,
};

const labelStyle = {
  ...themeStyles.label4,
  marginBottom: 4,
};

const InputDropdown = ({
  value,
  options,
  onChange,
  label = null,
  placeholder = '',
  onBlur,
  defaultValue,
  errorMessage,
  id,
}) => {
  const [showModal, setShowModal] = useState(false);
  const hasError = !!errorMessage;

  const {title = null} = options.find(option => option.id === value) || {};
  const defaultText = useMemo(
    () => get(find(options, {id: defaultValue}), 'title'),
    [defaultValue],
  );
  const handleFocus = useCallback(
    event => {
      onBlur(event);
      setShowModal(true);
    },
    [onBlur, setShowModal],
  );

  return (
    <>
      <TouchableWithoutFeedback onPress={handleFocus}>
        {/* Wrapping Input inside View with pointerEvents set, because
        TouchableWithoutFeedback won't trigger onPress event when Input
        element has editable={false}.
        Solution found here:
        https://github.com/facebook/react-native/issues/14958#issuecomment-345492907
        */}
        <View pointerEvents="box-only">
          <Input
            value={title}
            editable={false}
            placeholder={placeholder}
            placeholderTextColor={colors.secondary3}
            rightIcon={hasError ? rightIconError : rightIcon}
            label={label}
            inputContainerStyle={hasError ? inputContainerErrorStyle : inputContainerStyles}
            errorStyle={errorMessageStyle}
            defaultValue={defaultText}
            {...{
              label,
              errorMessage,
              labelStyle,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <Overlay
        isVisible={showModal}
        overlayStyle={styles.overlay}
        width="100%"
        height="55%"
        onBackdropPress={() => setShowModal(false)}
        animationType="fade">
        <>
          <FlatList
            style={styles.flatlist}
            data={options}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false);
                    onChange(item.id);
                  }}>
                  <ListItemText style={styles.flatlistItem}>
                    {item.title}
                  </ListItemText>
                </TouchableOpacity>
              );
            }}
          />
          <MainButton
            title="Cancel"
            type="tertiary"
            onPress={() => setShowModal(false)}
          />
        </>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 20,
    paddingBottom: 24,
  },
  flatlistItem: {
    marginBottom: 24,
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 0,
  },
});

export default InputDropdown;
