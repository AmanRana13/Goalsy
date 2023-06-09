import React from 'react';
import {View, Modal} from 'react-native';
import {Icons, Spacer, StatusHeader} from 'components';
import appImages from 'theme/images';
import {Width} from 'hook/DevicePixel';

const FullScreenImage = ({
  visible,
  closeImage,
  image,
}: {
  visible: boolean;
  closeImage: () => void;
  image: object;
}) => {
  return (
    <Modal
      visible={visible}
      animated={true}
      style={{position: 'absolute', top: 0, flex: 1}}
      animationType='slide'
      transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          backgroundColor: 'rgba(0,0,0,1)',
        }}>
          <StatusHeader/>
        <Icons
          source={appImages.cross}
          onPress={closeImage}
          styles={{alignSelf: 'flex-end', marginHorizontal: 20}}
          size={30}
        />
        <Spacer flex={1} />
        <Icons
          source={image}
          size={Width}
          disabled
          resize={'cover'}
          styles={{width: '100%'}}
        />
        <Spacer flex={1} />
      </View>
    </Modal>
  );
};

export default FullScreenImage;
