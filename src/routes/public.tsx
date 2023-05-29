// react
import React, {useEffect, useLayoutEffect, useState} from 'react';

// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// theme
import {routesConstants} from 'theme/constants';

// components
import Login from 'screen/auth/login';
import SignUp from 'screen/auth/signUp';
import Welcome from 'screen/auth/welcome';
import ForgotPassword from 'screen/auth/forgotPassword';
import TermAndPolicy from 'screen/auth/TermAndPolicy';
import {DataManager} from 'utils/dataManager';

// stack
const Stack = createNativeStackNavigator();

// main
const Public = () => {
  const [initRoute, setInitRoute] = useState<string>('');
  useLayoutEffect(() => {
    checkThings();
  }, []);
  const checkThings = async () => {
    const tempData = await DataManager.getFirstTime();
    setInitRoute(tempData ? routesConstants.login : routesConstants.welcome);
  };
  return (
    initRoute && (
      <Stack.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={routesConstants.welcome} component={Welcome} />
        <Stack.Screen name={routesConstants.login} component={Login} />
        <Stack.Screen name={routesConstants.signUp} component={SignUp} />
        <Stack.Screen
          name={routesConstants.forgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={routesConstants.TermAndPolicy}
          component={TermAndPolicy}
        />
      </Stack.Navigator>
    )
  );
};

export default Public;
