import React from 'react';
import appImages from 'theme/images';
import {goBack} from 'routes/navigationServices';
import {Icons} from 'components';

const BackButton = ({onPress = () => {}}: {onPress?: () => {}}) => {
  return (
    <Icons
      source={[appImages.backArrow, appImages.backArrowDark]}
      onPress={() => onPress() ?? goBack()}
    />
  );
};

export default BackButton;
