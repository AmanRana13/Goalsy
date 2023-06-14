import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import List from './List';
import {Icons, TextBox} from 'components';
import styles from './style';
import appImages from 'theme/images';
import {dropdown} from './type';
import usePixel, {Width} from 'hook/DevicePixel';
import {fonts} from 'theme/fonts';
import constants from 'theme/constants';

const DropDown = ({list, label, onPress, color, defaultValue}: dropdown) => {
  const inputHeight = usePixel(constants.inputHeight + 3);
  const style = styles(color);
  const [showList, setShowList] = React.useState(false);
  const [item, setItem] = React.useState({});
  useEffect(() => {
    onPress(item);
  }, [item]);

  return (
    <View>
      <TextBox text={label} size={16}/>
      <View style={[style.container]}>
        <TouchableOpacity
          style={{
            height: inputHeight,
            borderRadius: 15,
            justifyContent: 'center',
          }}
          onPress={() => setShowList(!showList)}
          activeOpacity={1}>
          <View style={style.innerContainer}>
            <TextBox
              text={item.value ?? defaultValue ?? label}
              size={17}
              color={
                item.value || defaultValue
                  ? color.commonBlack
                  : color.placeholder
              }
            />
            <Icons
              size={16}
              source={showList ? appImages.upArrow : appImages.downArrow}
              disabled={true}
            />
          </View>
        </TouchableOpacity>
        <View style={{maxHeight: Width * 0.5}}>
          <ScrollView nestedScrollEnabled = {true} style={{zIndex:9999}}contentContainerStyle={{flexGrow: 1}}>
            {showList
              ? list?.map((item, index) => {
                  return (
                    <List
                      key={item?.id}
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

export default React.memo(DropDown);
