import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  StatusHeader,
  Header,
  BackButton,
  CommentCard,
  ConfirmModal,
} from 'components';

// theme
import appImages from 'theme/images';
import constants from 'theme/constants';

// style
import styles from './styles';
import InputField from 'components/inputField';
import Icons from 'components/icons';
import {height} from 'utils/globalFunctions';
import ChatCard from 'components/chatCart';

const Data = [1, 2, 3, 4, 5];

const Chat = ({navigation}: any) => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  const [modal, showModal] = useState(false);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header
        title={'Ticket ID'}
        LeftIcon={<BackButton />}
        RightIcon={
          <Icons
            source={[appImages.closeTicket,appImages.closeTicketDark]}
            onPress={() => showModal(true)}
          />
        }
      />
      <Spacer />

        <FlatList
          data={Data}
          style={{height: height * 0.745}}
          renderItem={({item, index}) => (
            <ChatCard
              text={
                'Lorem ipsum is a dummy text. It has survived not only five centuries.'
              }
              time={'02:45 AM'}
              color={colors}
              ownChat={index % 2 === 0}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <InputField
          colors={colors}
          RightCompo={
            <Icons size={30} source={[appImages.send, appImages.sendDark]} />
          }
          TextInputProps={{
            placeholder: constants.writeYourMsg,
            returnKeyType: 'done',
            inputContainerStyle: {
              borderRadius: 16,
              borderColor: colors.black,
              borderWidth: 3,
              backgroundColor: 'transparent',
            },
            textInput:{
              color:colors.black
            }
          }}
        />

      <ConfirmModal
        source={[appImages.warring, appImages.warringDark]}
        visible={modal}
        Colors={colors}
        description={constants.closeTicket}
        leftButton={{
          text: 'Yes',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{
          text: 'No',
          onPress: () => {
            showModal(false);
          },
        }}
      />
    </View>
  );
};

export default Chat;
