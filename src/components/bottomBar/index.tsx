import {
  DeviceEventEmitter,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// components
import {Icons, Spacer, TextBox} from 'components';

// theme
import constants, {routesConstants} from 'theme/constants';
import appImages from 'theme/images';

import styles from './style';
import {BottomBarItem} from './type';
import {useTheme} from '@react-navigation/native';
import {Width} from 'hook/DevicePixel';
const data: Array<BottomBarItem> = [
  {
    id: 1,
    name: constants.progress,
    default: appImages.progress,
    darkMode: appImages.progressDark,
    selected: appImages.progressSelect,
    route: routesConstants.progress,
  },
  {
    id: 2,
    name: constants.boards,
    default: appImages.broad,
    darkMode: appImages.broadDark,
    selected: appImages.broadSelect,
    route: routesConstants.boards,
  },
  {
    id: 3,
    name: constants.home,
    default: appImages.goal,
    darkMode: appImages.goalDark,
    selected: appImages.goal,
    route: routesConstants.progress,
  },
  {
    id: 4,
    name: constants.social,
    default: appImages.feed,
    darkMode: appImages.feedDark,
    selected: appImages.feedSelect,
    route: routesConstants.feed,
  },
  {
    id: 5,
    name: constants.shop,
    default: appImages.store,
    darkMode: appImages.storeDark,
    selected: appImages.storeSelect,
    route: routesConstants.store,
  },
];
const BottomBar = ({navigation}: any) => {
  const {colors} = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const style = styles(colors);

  React.useEffect(() => {
    DeviceEventEmitter.addListener('setBottomTabIndex', data => {
      setSelectedIndex(data);
    });
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        horizontal={true}
        scrollEnabled={false}
        renderItem={({item, index}) => {
          return item.id !== 3 ? (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
                navigation.navigate(item.route);
              }}
              style={[
                style.icons,
                {
                  marginLeft: item.id === 5 ? 10 : 0,
                  width: Width * 0.15,
                },
              ]}>
              <Icons
                disabled={false}
                size={item?.id === 3 ? 60 : 30}
                source={
                  selectedIndex === index
                    ? item.selected
                    : [item.default, item.darkMode]
                }
                onPress={() => {
                  setSelectedIndex(index);
                  navigation.navigate(item.route);
                }}
              />
              <TextBox
                text={item.name}
                size={9}
                styles={{
                  ...style.text,
                  color: colors.black,
                }}
              />
            </TouchableOpacity>
          ) : (
            <Spacer styles={style.empty} />
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.innerContainer}
      />
      <Icons
        activeOpacity={0.9}
        size={70}
        disabled={false}
        styles={style.centerImage}
        source={[appImages.goal, appImages.goalDark]}
        onPress={() => {
          setSelectedIndex(2);
          navigation.navigate(routesConstants.home);
        }}
      />
    </View>
  );
};

export default BottomBar;
