import {FlatList, View} from 'react-native';
import React from 'react';
import {Header, StatusHeader, SimpleCard, BackButton, Spacer} from 'components';
import {useTheme} from '@react-navigation/native';
import constants from 'theme/constants';
import style from './style';

const Notification = () => {
  const data = [
    {
      id: 1,
      header: 'Friend Request',
      description: 'Rock has sent you a friend request.',
      time: 'May 15, 2023 08:30 AM',
    },
    {
      id: 2,
      header: 'Friend Request',
      description: 'Rock has sent you a friend request.',
      time: 'May 15, 2023 08:30 AM',
    },
    {
      id: 3,
      header: 'Friend Request',
      description: 'Rock has sent you a friend request.',
      time: 'May 15, 2023 08:30 AM',
    },
  ];
  const {colors}: any = useTheme();
  const styles = style(colors);
  return (
    <View style={styles.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.notification} />
      <Spacer height={constants.height20}/>
      <FlatList
        data={data}
        keyExtractor={({id}: any) => id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => <SimpleCard item={item} color={colors} />}
      />
      <Spacer />
    </View>
  );
};

export default Notification;
