import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
// style
import styles from './styles';
import usePixel from 'hook/DevicePixel';
import appImages from 'theme/images';
import Icons from 'components/icons';
import {fonts} from 'theme/fonts';
import TextBox from 'components/textBox';
import {routesConstants} from 'theme/constants';
const data = [
  appImages.dummyVideoPlayer,
  appImages.dummyVideoPlayer,
  appImages.dummyVideoPlayer,
];

const CategoryContainer = ({navigation, title}): any => {
  const {colors}: any = useTheme();
  const sizes = usePixel(360);
  const style = styles(colors, sizes);
  const [selectedIndex, setIndex] = React.useState(0);

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    setIndex(selectedIndex => {
      return viewableItems[viewableItems.length - 1].index;
    });
  }, []);

  return (
    <View style={{flexDirection: 'column'}}>
      <TextBox
        text={title}
        size={18}
        styles={{
          marginBottom: 8,
        }}
        fontFamily={fonts.medium}
      />

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item, index}) => {
          return (
            <Icons
              disabled={false}
              source={item}
              styles={style.postImage}
              resize="contain"
              onPress={() => navigation.navigate(routesConstants.storeDetail)}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 12,
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              key={Math.random().toString()}
              style={
                index == selectedIndex
                  ? {
                      width: 11,
                      height: 11,
                      borderRadius: 6,
                      backgroundColor: colors.black,
                      marginEnd: 4,
                    }
                  : {
                      width: 9,
                      height: 9,
                      borderRadius: 5,
                      backgroundColor: colors.greyDot,
                      marginEnd: 4,
                    }
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default CategoryContainer;
