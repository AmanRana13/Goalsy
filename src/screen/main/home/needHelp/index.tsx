import {FlatList, View} from 'react-native';
import React from 'react';
import {
  Header,
  StatusHeader,
  SimpleCard,
  BackButton,
  Spacer,
  Icons,
} from 'components';
import {useTheme} from '@react-navigation/native';
import constants, {routesConstants} from 'theme/constants';
import style from './style';
import appImages from 'theme/images';

const NeedHelp = ({navigation}: any) => {
  const data = [
    {
      id: 1,
      header: 'Ticket Name',
      description: 'Is closed.',
      time: 'May 15, 2023 08:30 AM',
    },
    {
      id: 2,
      header: 'Ticket Name',
      description: 'Is closed.',
      time: 'May 15, 2023 08:30 AM',
    },
    {
      id: 3,
      header: 'Ticket Name',
      description: 'Is closed.',
      time: 'May 15, 2023 08:30 AM',
    },
  ];
  const {colors}: any = useTheme();
  const styles = style(colors);
  return (
    <View style={styles.container}>
      <StatusHeader />
      <Header
        LeftIcon={<BackButton />}
        title={constants.needHelp}
        RightIcon={
          <Icons
            source={[appImages.goal, appImages.goalDark]}
            onPress={() => navigation.navigate(routesConstants.createTicket)}
          />
        }
      />
      <Spacer height={constants.height20} />
      <FlatList
        data={data}
        keyExtractor={({id}: any) => id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item}) => (
          <SimpleCard
            item={item}
            color={colors}
            isRed={true}
            source={appImages.forwardArrow}
          />
        )}
      />
      <Spacer />
    </View>
  );
};

export default NeedHelp;
