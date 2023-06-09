import React, {useState} from 'react';
import {View, Modal, Platform, Text, Pressable} from 'react-native';

import {styles} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {fonts} from 'theme/fonts';
import {width} from 'utils/globalFunctions';

const DatePickerModal = props => {
  const [selectedItem, setSeletcedItem] = useState(new Date());
  return Platform.OS == 'ios' ? (
    <Modal
      statusBarTranslucent={true}
      animated
      transparent
      visible={props.isDropdownVisible}
      animationType="fade">
      <View style={styles.wrapper}>
        <View style={styles.outerContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Pressable onPress={() => props.onCancel()}>
              <Text
                style={{
                  textAlign: 'left',
                  marginStart: width * 0.02,
                  color: 'red',
                  fontFamily: fonts.semiBold,
                  fontSize: 19,
                  marginVertical: width * 0.02,
                }}>
                {'Cancel'}
              </Text>
            </Pressable>

            <Pressable onPress={() => props.onClose(selectedItem)}>
              <Text
                style={{
                  textAlign: 'right',
                  color: 'black',
                  fontFamily: fonts.semiBold,
                  fontSize: 19,
                  marginVertical: width * 0.02,
                }}>
                {'Confirm'}
              </Text>
            </Pressable>
          </View>
          <DateTimePicker
            minimumDate={props?.minimumDate}
            maximumDate={props?.maximumDate}
            value={new Date(selectedItem)}
            mode={props.time ? 'time' : 'date'}
            display={'spinner'}
            onChange={(event, date) => setSeletcedItem(date)}
            textColor={'black'}
          />
        </View>
      </View>
    </Modal>
  ) : (
    props.isDropdownVisible && (
      <DateTimePicker
        minimumDate={props?.minimumDate}
        maximumDate={props?.maximumDate}
        value={new Date(selectedItem)}
        mode={props.time ? 'time' : 'date'}
        display={'spinner'}
        onChange={(event, date) => {
          event.type === 'set' ? props.onClose(date) : props.onCancel();
        }}
        textColor={'black'}
      />
    )
  );
};

export default DatePickerModal;
