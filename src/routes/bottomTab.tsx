import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomBar from 'components/bottomBar';
import {routesConstants} from 'theme/constants';
import Home from 'screen/main/home/main';
import Feed from 'screen/main/feed/main';
import Store from 'screen/main/store/main';

import Progress from 'screen/main/progress';
import Boards from 'screen/main/boards/main';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={routesConstants.home} component={Home} />
      <Tab.Screen name={routesConstants.feed} component={Feed} />
      <Tab.Screen name={routesConstants.store} component={Store} />
      <Tab.Screen name={routesConstants.progress} component={Progress} />
      <Tab.Screen name={routesConstants.boards} component={Boards} />
    </Tab.Navigator>
  );
};
export default BottomTab;
