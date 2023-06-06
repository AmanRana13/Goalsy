import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';

import {Spacer} from 'components';

import {getStatusBarHeight} from 'utils/getStatusBarHeight';

import {useTheme} from '@react-navigation/native';
import {colors} from 'theme/colors';

const StatusHeader = ({color}: {color?: string}) => {
  const {colors, dark}: any = useTheme();
  const statusBarHeight: any = useMemo(() => getStatusBarHeight(true), []);
  return (
    <>
      <Spacer height={statusBarHeight} />
      <StatusBar
        backgroundColor={color ?? colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
    </>
  );
};

export default StatusHeader;
