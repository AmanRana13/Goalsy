// react
import React from 'react';

// react-native
import {useColorScheme} from 'react-native';

// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// theme
import {routesConstants} from 'theme/constants';
import BottomTab from './bottomTab';
import AccountSetting from 'screen/main/home/accountSetting';
import Profile from 'screen/main/home/profile/View';
import Friend from 'screen/main/home/friend';
import ProfileEdit from 'screen/main/home/profile/Edit';
import Notification from 'screen/main/home/notification';
import NeedHelp from 'screen/main/home/needHelp';
import ChangePassword from 'screen/main/home/changePassword';
import AboutUs from 'screen/main/home/aboutUs';
import Search from 'screen/main/feed/search';
import CreatePost from 'screen/main/feed/createPost';
import Comments from 'screen/main/feed/comments';
import OtherUserProfile from 'screen/main/feed/otherUserProfile';
import LearnAbout531 from 'screen/main/home/531/learnAbout531';
import Quiz from 'screen/main/home/profile/Quiz';
import CreateTicket from 'screen/main/home/needHelp/createTicket';
import CreateVision from 'screen/main/boards/myVision/CreateVision';
import AddGoal from 'screen/main/boards/myGoal/AddGoal';
import AddActivity from 'screen/main/boards/activity/addActivity';
import InviteUser from 'screen/main/boards/myVision/inviteUser';
import StoreDetail from 'screen/main/store/storeDetail';
import EditActivity from 'screen/main/boards/activity/editActivity';
import EditVision from 'screen/main/boards/myVision/editVision';
import MyBoard from 'screen/main/boards/myGoal/MyBoard';
import ViewSample from 'screen/main/boards/myGoal/ViewSample';
import CreateBoard from 'screen/main/boards/myGoal/CreateBoard';
import MyTextBoard from 'screen/main/boards/myGoal/MyTextBoard';

// stack
const Stack = createNativeStackNavigator();

// main
const Private = () => {
  return (
    <Stack.Navigator
      initialRouteName={routesConstants.home}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={routesConstants.bottomTab} component={BottomTab} />
      <Stack.Screen
        name={routesConstants.AccountSetting}
        component={AccountSetting}
      />
      <Stack.Screen name={routesConstants.Profile} component={Profile} />
      <Stack.Screen
        name={routesConstants.editProfile}
        component={ProfileEdit}
      />
      <Stack.Screen name={routesConstants.Friend} component={Friend} />
      <Stack.Screen
        name={routesConstants.notification}
        component={Notification}
      />
      <Stack.Screen name={routesConstants.needHelp} component={NeedHelp} />
      <Stack.Screen
        name={routesConstants.changePassword}
        component={ChangePassword}
      />
      <Stack.Screen name={routesConstants.aboutUs} component={AboutUs} />
      <Stack.Screen name={routesConstants.search} component={Search} />
      <Stack.Screen name={routesConstants.createPost} component={CreatePost} />
      <Stack.Screen name={routesConstants.comments} component={Comments} />
      <Stack.Screen
        name={routesConstants.otherUserProfile}
        component={OtherUserProfile}
      />
      <Stack.Screen
        name={routesConstants.learnAbout531}
        component={LearnAbout531}
      />
      <Stack.Screen name={routesConstants.quiz} component={Quiz} />
      <Stack.Screen
        name={routesConstants.createTicket}
        component={CreateTicket}
      />
      <Stack.Screen
        name={routesConstants.createVision}
        component={CreateVision}
      />
      <Stack.Screen name={routesConstants.addGoal} component={AddGoal} />
      <Stack.Screen name={routesConstants.myBoard} component={MyBoard} />
      <Stack.Screen
        name={routesConstants.createBoard}
        component={CreateBoard}
      />
      <Stack.Screen name={routesConstants.viewSample} component={ViewSample} />
      <Stack.Screen
        name={routesConstants.addActivity}
        component={AddActivity}
      />
      <Stack.Screen name={routesConstants.inviteUser} component={InviteUser} />
      <Stack.Screen
        name={routesConstants.storeDetail}
        component={StoreDetail}
      />
      <Stack.Screen name={routesConstants.editVision} component={EditVision} />
      <Stack.Screen
        name={routesConstants.editActivity}
        component={EditActivity}
      />
      <Stack.Screen
        name={routesConstants.myTextBoard}
        component={MyTextBoard}
      />
    </Stack.Navigator>
  );
};

export default Private;
