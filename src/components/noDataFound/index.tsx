import {View, Text} from 'react-native';
import React from 'react';
import {Icons} from 'components';
import appImages from 'theme/images';
import TextBox from 'components/textBox';
import constants from 'theme/constants';

const EmptyList = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icons
        source={[appImages.emptyScreen, appImages.emptyScreenDark]}
        size={200}
        styles={{marginBottom: 20}}
        disabled
      />
      <TextBox text={constants.noDataFound} size={25} />
    </View>
  );
};

export default EmptyList;
