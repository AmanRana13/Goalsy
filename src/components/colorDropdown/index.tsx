import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import List from './List';
import {Icons, TextBox} from 'components';
import styles from './style';
import appImages from 'theme/images';
import {dropdown, item} from './type';
import usePixel, {Width} from 'hook/DevicePixel';
import {fonts} from 'theme/fonts';
import constants from 'theme/constants';

const ColorDropDown = ({list, label, onPress, color}: dropdown) => {
  const inputHeight = usePixel(constants.inputHeight + 3);
  const style = styles(color);
  const [showList, setShowList] = React.useState(false);
  const [item, setItem] = React.useState<{item: item}>({});

  useEffect(() => {
    onPress(item);
  }, [item]);
  return (
    <View>
      <TextBox text={label} size={16} fontFamily={fonts.regular} />
      <View style={[style.container]}>
        <TouchableOpacity
          onPress={() => setShowList(!showList)}
          activeOpacity={1}
          style={{
            height: inputHeight,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <View
            style={[
              style.innerContainer,
              {paddingVertical: item.colorCode ? 0 : 8},
            ]}>
            {item.colorCode ? (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: item.color,
                    height: 40,
                    width: 40,
                    borderRadius: 8,
                  }}
                />
                <TextBox text={item.colorCode} color={color.commonBlack} />
              </View>
            ) : (
              <TextBox text={label} color={color.placeholder} size={17} />
            )}
            <Icons
              size={16}
              source={showList ? appImages.upArrow : appImages.downArrow}
              disabled={true}
            />
          </View>
        </TouchableOpacity>
        <View style={{maxHeight: Width * 0.5}}>
          <ScrollView nestedScrollEnabled = {true} style={{zIndex:9999}} contentContainerStyle={{flexGrow: 1}}>
            {showList
              ? list?.map((item: any, index: number) => {
                  return (
                    <List
                      key={item.id}
                      color={color}
                      item={item}
                      setItem={(e: any) => setItem(e)}
                      setShowList={setShowList}
                      index={index}
                      lastIndex={list.length - 1}
                    />
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ColorDropDown);
