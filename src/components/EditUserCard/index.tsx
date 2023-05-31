import React, {memo, useState} from 'react';
import {View} from 'react-native';
import {Icons, TextBox} from 'components';
import usePixel from 'hook/DevicePixel';
import {commentCardProps} from './type';
import style from './styles';
import appImages from 'theme/images';

const EditUserCard = memo(({item, color, setOpenModal}: commentCardProps) => {
  const height = usePixel(16);
  const styles = style(color);
  return (
    <>
      <View style={[styles.container, {paddingVertical: height}]}>
        <Icons
          source={item?.source}
          size={60}
          disabled={true}
          styles={styles.icons}
        />
        <View style={styles.text}>
          {item?.userName && <TextBox text={item?.userName} size={20} />}
          {item?.description && <TextBox text={item?.description} size={13} />}
        </View>
        <Icons
          source={[appImages.edit, appImages.edit2Dark]}
          styles={{paddingBottom: 10}}
          onPress={() => setOpenModal(true)}
        />
      </View>
    </>
  );
});

export default EditUserCard;
