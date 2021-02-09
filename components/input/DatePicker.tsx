import React, {useState} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Overlay} from 'react-native-elements';
import MainButton from '../buttons/MainButton';


const isIOS = Platform.OS === 'ios';
const isAndroid = !isIOS;

const DatePicker = ({visible, date, onSubmit}: {visible: boolean, date: Date, onSubmit: Function}) => {
  const [iosPickerDate, setIosPickerDate] = useState(date);

  if (isAndroid) {
    return (
      <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={(event, newDate) => {
          if (!newDate) return onSubmit(null);
          // Android: triggered when OK is pressed, newDate is undefined if cancelled
          onSubmit(newDate);
        }} />
    );
  }

  if (isIOS) {
    return (
      <Overlay
        isVisible={visible}
        overlayStyle={styles.overlay}
        height="auto"
        animationType="fade"
        onBackdropPress={() => onSubmit(null)}>
        <View>
          <DateTimePicker
            display="spinner"
            mode="date"
            value={iosPickerDate}
            onChange={(event, newDate) => {
              // iOS: triggered every time when spinner stops
              setIosPickerDate(newDate);
            }}
          />
          <MainButton
            type="primary"
            title="OK"
            onPress={() => {
              onSubmit(iosPickerDate);
            }}
          />
          <MainButton
            type="tertiary"
            title="Cancel"
            onPress={() => onSubmit(null)}
          />
        </View>
      </Overlay>
    );
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 0,
  },
});

export default DatePicker;
