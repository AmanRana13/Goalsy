import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  StatusHeader,
  Header,
  BackButton,
  FriendsCard,
  ConfirmModal,
} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';

const Data = [
  {_id: 1, userName: 'Winni', source: appImages.dummyUser},
  {_id: 2, userName: 'Winni', source: appImages.dummyUser},
  {_id: 3, userName: 'Winni', source: appImages.dummyUser},
  {_id: 4, userName: 'Winni', source: appImages.dummyUser},
  {_id: 5, userName: 'Winni', source: appImages.dummyUser},
  {_id: 6, userName: 'Winni', source: appImages.dummyUser},
  {_id: 7, userName: 'Winni', source: appImages.dummyUser},
  {_id: 8, userName: 'Winni', source: appImages.dummyUser},
  {_id: 9, userName: 'Winni', source: appImages.dummyUser},
  {_id: 10, userName: 'Winni', source: appImages.dummyUser},
];

const Friend = ({navigation, route}: any) => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  const [showModal, setShowModal] = useState(false);
  const screenType = route?.params?.screen === routesConstants.Friend;
  return (
    <>
      <View style={style.container}>
        <StatusHeader />
        <Header
          title={screenType ? 'Friends' : 'Friend Requests'}
          LeftIcon={<BackButton />}
        />
        <Spacer height={constants.height20} />
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <FriendsCard
              item={item}
              button1={{
                text: screenType ? ' View ' : 'Accept',
                onPress: () => {
                  screenType &&
                    navigation.navigate(routesConstants.otherUserProfile);
                },
              }}
              button2={{
                text: screenType ? 'Remove' : 'Reject',
                onPress: () => {
                  screenType && setShowModal(true);
                },
              }}
              color={colors}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ConfirmModal
        source={[appImages.warring, appImages.warringDark]}
        visible={showModal}
        Colors={colors}
        description={constants.removeFriend}
        leftButton={{
          text: 'Yes',
          onPress: () => setShowModal(false),
        }}
        rightButton={{
          text: 'No',
          onPress: () => setShowModal(false),
        }}
      />
    </>
  );
};

export default Friend;
