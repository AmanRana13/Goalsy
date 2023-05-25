import Loader from 'components/loader';
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import KeyboardManager from 'react-native-keyboard-manager';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import Routes from 'routes/Routes';
import ApiConstants from 'theme/apiConstants';
import {fonts} from 'theme/fonts';
import {DataManager} from 'utils/dataManager';
import {setDispatch} from 'utils/globalFunctions';
const App = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setDispatch(dispatch);
    SplashScreen.hide();
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setKeyboardDistanceFromTextField(20);
      KeyboardManager.setShouldShowToolbarPlaceholder(false);
      KeyboardManager.setOverrideKeyboardAppearance(true);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.setShouldPlayInputClicks(true);
    }
    setToken();
  }, []);

  const setToken = async () => {
    const token = await DataManager.getAccessToken();
    dispatch({
      type: ApiConstants.API_LOGIN_SUCCESS,
      payload: {token},
    });
  };

  return (
    <View style={{flex: 1}}>
      <Routes />
      <Loader />
      <FlashMessage
        statusBarHeight={StatusBar.currentHeight}
        position="top"
        titleStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
          marginTop: Platform.OS === 'android' ? 0 : 0,
        }}
        textStyle={{
          fontSize: 18,
          fontFamily: fonts.bold,
          color: '#fff',
          textAlign: 'left',
        }}
      />
    </View>
  );
};

export default App;
