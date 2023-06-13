// react
import React, {useEffect} from 'react';

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
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Routes = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const token = useSelector((state: any) => state.authenticationReducer.token);
  useEffect(() => {
    (async () => {
      try {
        const response = changeNavigationBarColor(
          isDarkMode ? '#000000' : '#0000001a',
        );
      } catch (e) {
      }
    })();
  }, [isDarkMode]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isDarkMode ? colors.dark : colors.light}>
      {token ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
