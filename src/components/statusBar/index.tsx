import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';

import {Spacer} from 'components';

import {getStatusBarHeight} from 'utils/getStatusBarHeight';

import {useTheme} from '@react-navigation/native';

const StatusHeader = () => {
  const {colors, dark}: any = useTheme();
  const statusBarHeight: any = useMemo(() => getStatusBarHeight(false), []);
  return (
    <>
      <Spacer height={statusBarHeight} />
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
    </>
  );
};

export default StatusHeader;
