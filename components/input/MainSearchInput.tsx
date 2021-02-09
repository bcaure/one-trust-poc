import React, { useCallback, useState } from 'react';
import { isEmpty } from 'lodash';
import { View, StyleSheet, TouchableOpacity, Platform, TextInput, Image, Dimensions } from 'react-native';
import { H1 } from '../typography';
import { colors, shadows, fonts } from '../../constants/theme';
import IconFaTimesRegular from '../svg/IconFaTimesRegular';
import IconSearch from '../svg/IconSearch';
import {textStyle} from '../typography';


const DROPDOWN_OFFSET_TOP = 8;
// TODO: ANDROID remove absolute touchable elements with absolute positioning
const BG_HEIGHT = Platform.select({
  android: 26,
  default: 34,
});


// TODO: ANDROID remove absolute touchable elements with absolute positioning
const dropdownContainerStyle = Platform.select({
  android: {
    marginHorizontal: 16,
  },
  default: {
    position: 'absolute',
    top: DROPDOWN_OFFSET_TOP,
    left: 16,
    right: 16,
    zIndex: 1,
  },
});

// TODO: ANDROID remove absolute touchable elements with absolute positioning
const relativeWrapperStyle = Platform.select({
  android: {},
  default: {
    height: BG_HEIGHT,
  },
});

const styles = StyleSheet.create({
  relativeWrapper: {
    ...relativeWrapperStyle,
    height: 30,
    width:200,
  },
  dropdownContainer: {
    ...dropdownContainerStyle,
    backgroundColor: 'white',
    ...shadows.mainSearch,
  },
  titleContainer: {
    height: 37,
    backgroundColor: colors.primary1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginTop: 4,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary1,
    height: BG_HEIGHT,
  },
  bgWhite: {
    backgroundColor: white,
  },
  inputGroup: {
    height: 16,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: colors.bgInput1,
    borderColor: colors.secondary1,
    flex: 1,
  },
  inputGroupHeader: {
    height: 16,
    backgroundColor: colors.bg1,
    marginTop: 0,
  },
  inputGroupActive: {
    backgroundColor: colors.bgInput1,
    borderColor: colors.primary2,
  },
  inputGroupError: {
    backgroundColor: colors.bgInputError1,
    borderColor: colors.primary3,
  },
  leftIcon: {
    width: 48,
    height: 40,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center',
  },
  input: {
    ...textStyle(fonts.primary.normal, colors.primary1, 16, 1.2),
    flex: 1,
    height: 30,
    width: 200,
  },
  inputActive: {
    fontFamily: fonts.primary.medium,
  },
  rightIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


function titleExtractor(item: any) {
  return item.name;
}

const { height } = Dimensions.get('window');
const LIST_HEIGHT = height * 0.4;

const ClearIcon = (
  <IconFaTimesRegular fill={colors.primary2} width={12} height={18} />
);
const RightButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.rightIcon}>{ ClearIcon }</View>
    </TouchableOpacity>
  );
};

const LeftIcon = (
  <View style={styles.leftIcon}>
    <Image source={IconSearch} width={22} height={22} />
  </View>
);

const MainSearchInput = ({ title = '' }) => {
  const [searchText, setSearchText] = useState('');
  const results = [] as any[];
  const loading = false;

  const hasTitle = !isEmpty(title);


  const clearText = useCallback(() => setSearchText(''), []);

  return (
    <>
      <View style={styles.relativeWrapper}>
        <View style={styles.bg} />
        <View style={styles.bgWhite} />
        <View style={styles.dropdownContainer}>
          <View style={[
              styles.inputGroup,
              styles.inputGroupHeader,
            ]}>
            {LeftIcon}
            <TextInput
              placeholder={title}
              placeholderTextColor={colors.secondary3}
              style={[styles.input, styles.inputActive]}
              autoCapitalize="none"
              maxLength={50}
              autoCorrect={false}
            />
            <RightButton />
          </View>
        </View>
      </View>
    </>
  );
};


export default MainSearchInput;
