import React, {memo} from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// type
import {userInviteModal} from './type';

//style
import styles from './style';
import InviteUserCard from 'components/inviteUserCard';
import {BlurView} from '@react-native-community/blur';

const InviteUserModal = memo(
  ({visible, color, onUpdatePress, item, onClose}: userInviteModal) => {
    const style = styles(color);
    return (
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <BlurView style={{flex: 1}} blurType="dark" blurAmount={1}>
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={() => onClose()}
            style={style.container}>
            <TouchableWithoutFeedback>
              <View style={style.modalView}>
                <InviteUserCard
                  color={color}
                  item={item}
                  onPress={onUpdatePress}
                  showShadow={false}
                />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </BlurView>
      </Modal>
    );
  },
);
export default InviteUserModal;
