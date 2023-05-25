// react
import React from 'react';

// react-native
import {useColorScheme} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';

// utils
import {navigationRef} from './navigationServices';

// theme
import colors from 'theme/colors';
import Private from './private';
import Public from './public';
import {useSelector} from 'react-redux';

const Routes = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const token = useSelector((state: any) => state.authenticationReducer.token);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isDarkMode ? colors.dark : colors.light}>
      {token ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
