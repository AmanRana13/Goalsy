import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  StatusHeader,
  Header,
  BackButton,
  FriendsCard,
  Icons,
} from 'components';

// theme
import appImages from 'theme/images';
import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import InputField from 'components/inputField';

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

const Search = ({navigation}: any) => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.search} LeftIcon={<BackButton />} />
      <InputField
        colors={colors}
        LeftIconSource={appImages.search}
        TextInputProps={{
          placeholder: constants.search + '...',
          returnKeyType: 'done',
          inputStyle: {borderRadius: 30},
        }}
      />
      <Spacer />
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <FriendsCard
            item={item}
            button1={{
              text: ' View ',
              onPress: () => {
                navigation.navigate(routesConstants.otherUserProfile);
              },
            }}
            color={colors}
          />
        )}
        ListFooterComponent={() => <Spacer height={constants.height20} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Search;
