import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {BackButton, CTAButton, Header, Spacer, StatusHeader} from 'components';
import constants from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import TextBox from 'components/textBox';
import {fonts} from 'theme/fonts';
import Icons from 'components/icons';
import appImages from 'theme/images';
import Video from 'components/Video';

const StoreDetail = () => {
  const {colors}: any = useTheme();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={'Item Name'} LeftIcon={<BackButton />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <Video />
        <Spacer height={constants.height20} />
        <TextBox size={22} fontFamily={fonts.medium} text={'Item Name'} />
        <TextBox size={18} fontFamily={fonts.medium} text={'Sub title'} />
        <Spacer />
        <TextBox
          size={15}
          fontFamily={fonts.regular}
          text={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <Spacer height={constants.height50} />
        <View style={{alignItems: 'center'}}>
          <CTAButton
            text={constants.Purchase}
            onPress={() => {}}
            type={constants.medium}
            color={colors.themeColor}
            textColor={colors.commonBlack}
            fontFamily={fonts.regular}
          />
          <Spacer height={constants.BottomHeight} />
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetail;
