import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextBox} from 'components';
import {fonts} from 'theme/fonts';
import {colors} from 'theme/colors';

const ChatCard = ({
  text,
  time,
  ownChat,
  color,
}: {
  text: string;
  time: string;
  ownChat: boolean;
  color: colors;
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: ownChat ? color.themeColor : color.commonWhite,
        alignSelf: ownChat ? 'flex-end' : 'flex-start',
        width: '70%',
        marginVertical: 15,
        borderRadius: 15,
      }}>
      <TextBox
        text={text}
        fontFamily={fonts.regular}
        color={color.commonBlack}
      />
      <TextBox
        text={time}
        fontFamily={fonts.regular}
        size={10}
        styles={{alignSelf: 'flex-end', paddingVertical: 5}}
        color={color.commonBlack}
      />
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
