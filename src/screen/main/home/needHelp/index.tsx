import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  Header,
  StatusHeader,
  SimpleCard,
  BackButton,
  Spacer,
  Icons,
} from 'components';
import {createTicketListAction} from 'redux/actions/home';
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';
import {dispatch} from 'utils/globalFunctions';
import style from './style';
import EmptyList from 'components/noDataFound';

const payload = {
  offset: 0,
  limit: 10,
};

const NeedHelp = ({navigation}: any) => {
  const {colors}: any = useTheme();
  const styles = style(colors);
  const {ticketList} = useSelector(state => state.homeReducer);
  const focus = useIsFocused();
  useEffect(() => {
    focus && dispatch(createTicketListAction(payload));
  }, [focus]);

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
        data={ticketList}
        keyExtractor={({_id}: any) => _id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={EmptyList}
        renderItem={({item}) => {
          return (
            <SimpleCard
              color={colors}
              disabled={false}
              close={item.closed}
              header={item.subject}
              time={item.createdAt}
              description={item.description}
              id={item._id}
              ticketId={item.ticketId}
              isTicketClose={item.closed}
              source={[appImages.forwardArrow, appImages.forwardArrowDark]}
            />
          );
        }}
      />
      <Spacer />
    </View>
  );
};

export default NeedHelp;
