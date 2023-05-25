import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {Spacer, StatusHeader, Header} from 'components';

import constants from 'theme/constants';

// style
import styles from './styles';
import usePixel from 'hook/DevicePixel';
import appImages from 'theme/images';
import CategoryContainer from './categoryContainer';

const Store = (props): any => {
  const {colors}: any = useTheme();
  const sizes = usePixel(360);
  const style = styles(colors, sizes);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Spacer />
      <Header title={constants.store} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer />
        <CategoryContainer title="Category 1" {...props} />
        <Spacer height={constants.height30} />
        <CategoryContainer title="Category 2" {...props} />
        <Spacer height={constants.height30} />
        <CategoryContainer title="Category 3" {...props} />
        <Spacer height={constants.height50} />
        <Spacer height={constants.height30} />
      </ScrollView>
    </View>
  );
};

export default Store;
