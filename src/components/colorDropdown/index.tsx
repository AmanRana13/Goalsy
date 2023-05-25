import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import List from './List';
import {Icons, TextBox} from 'components';
import styles from './style';
import appImages from 'theme/images';
import {dropdown} from './type';
import Spacer from 'components/spacer';
import {Width} from 'hook/DevicePixel';
import {fonts} from 'theme/fonts';

const ColorDropDown = ({list, label, onPress, color}: dropdown) => {
  const style = styles(color);
  const [showList, setShowList] = React.useState(false);
  const [item, setItem] = React.useState({});
  useEffect(() => {
    onPress(item);
  }, [item]);
  return (
    <View style={style.outerContainer}>
      <TextBox text={label} size={16} fontFamily={fonts.regular} />
      <View style={[style.container, !showList && {paddingBottom: 11}]}>
        <TouchableOpacity
          onPress={() => setShowList(!showList)}
          activeOpacity={1}>
          <View
            style={[
              style.innerContainer,
              {paddingVertical: item.colorCode ? 0 : 4},
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
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                  }}
                />
                <TextBox text={item.colorCode}  />
              </View>
            ) : (
              <TextBox text={label} color={color.placeholder} size={16}/>
            )}
            <Icons
              size={16}
              source={showList ? appImages.upArrow : appImages.downArrow}
              disabled={true}
            />
          </View>
        </TouchableOpacity>
        <View style={{maxHeight: Width * 0.5}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {showList
              ? list?.map((item, index) => {
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
          <View style={{height: 5}} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(ColorDropDown);
