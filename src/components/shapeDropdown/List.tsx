import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icons, TextBox} from 'components';
import {list} from './type';
import {colors} from 'theme/colors';

const List = ({item, setItem, color, setShowList, index, lastIndex}: list) => {
  const styles = style(color);
  return (
    <TouchableOpacity
      onPress={() => {
        setItem(item);
        setShowList(false);
      }}
      style={[
        styles.container,
        {
          paddingTop: index === 0 ? 25 : 15,
          borderBottomColor:
            lastIndex === index ? 'transparent' : color.dividerColor,
          paddingBottom: 15,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icons source={item?.shape} disabled size={35} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(List);

const style = (color: colors) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 20,
      paddingBottom: 15,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
    },
  });
