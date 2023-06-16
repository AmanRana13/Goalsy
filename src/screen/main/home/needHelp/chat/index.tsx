import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  Spacer,
  StatusHeader,
  Header,
  BackButton,
  ConfirmModal,
  ChatCard,
} from 'components';

// theme
import appImages from 'theme/images';
import constants from 'theme/constants';

// style
import styles from './styles';
import InputField from 'components/inputField';
import Icons from 'components/icons';
import KeyboardManager from 'react-native-keyboard-manager';
import {dispatch} from 'utils/globalFunctions';
import {closeChat} from 'redux/actions/home';
import {socket} from 'utils/socket';
const Data = [1, 2, 3, 4, 5];

const Chat = ({navigation, route}: any) => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  const {id, ticketId, isTicketClose} = route.params;
  const [modal, showModal] = useState(false);
  const [input, setInput] = useState<string>('');

  useLayoutEffect(() => {
    Platform.OS === 'ios' && KeyboardManager.setEnable(false);
    return () => Platform.OS === 'ios' && KeyboardManager.setEnable(true);
  }, []);

  useEffect(() => {
    socket.on('message', e => {
      console.log(e);
    });
    return () => {
      socket.off('message');
    };
  });

  const onSend = () => {
    if (input) {
      socket.emit('message', input);
    }
  };

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header
        title={ticketId}
        LeftIcon={<BackButton />}
        RightIcon={
          <Icons
            source={[appImages.closeTicket, appImages.closeTicketDark]}
            onPress={() => showModal(true)}
            disabled={isTicketClose}
          />
        }
      />
      <Spacer />
      <FlatList
        data={Data}
        contentContainerStyle={{flexGrow: 1}}
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <InputField
          colors={colors}
          RightCompo={
            <Icons
              size={30}
              source={[appImages.send, appImages.sendDark]}
              onPress={onSend}
            />
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
            onChangeText: (e: string) => setInput(e.trimStart()),
            value: input,
            textInput: {
              color: colors.black,
            },
          }}
        />
        <Spacer height={Platform.OS === 'ios' ? constants.height20 : 10} />
      </KeyboardAvoidingView>
      <ConfirmModal
        source={[appImages.warring, appImages.warringDark]}
        visible={modal}
        Colors={colors}
        description={constants.closeTicket}
        leftButton={{
          onPress: () => dispatch(closeChat(id)),
        }}
        rightButton={{
          onPress: () => showModal(false),
        }}
      />
    </View>
  );
};

export default Chat;
