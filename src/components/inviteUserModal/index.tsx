import React, {memo} from 'react';
import {Modal, View} from 'react-native';

// type
import {userInviteModal} from './type';

//style
import styles from './style';
import InviteUserCard from 'components/InviteUserCard';

const InviteUserModal = memo(
  ({visible, color, onUpdatePress, item}: userInviteModal) => {
    const style = styles(color);
    return (
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <View style={style.container}>
          <View style={style.modalView}>
            <InviteUserCard
              color={color}
              item={item}
              onPress={onUpdatePress}
              item={item}
              isModal
            />
          </View>
        </View>
      </Modal>
    );
  },
);
export default InviteUserModal;
