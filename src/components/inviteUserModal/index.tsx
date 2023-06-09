import React, {memo} from 'react';
import {Modal, View} from 'react-native';

// type
import {userInviteModal} from './type';

//style
import styles from './style';
import InviteUserCard from 'components/InviteUserCard';
import {BlurView} from '@react-native-community/blur';

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
        <BlurView
          style={{flex: 1}}
          blurType="dark"
          blurAmount={2}>
          <View style={style.container}>
            <View style={style.modalView}>
              <InviteUserCard
                color={color}
                item={item}
                onPress={onUpdatePress}
                showShadow={false}
              />
            </View>
          </View>
        </BlurView>
      </Modal>
    );
  },
);
export default InviteUserModal;
