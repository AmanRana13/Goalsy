import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {BackButton, Header, StatusHeader} from 'components';
import constants from 'theme/constants';
import TextBox from 'components/textBox';
import {fonts} from 'theme/fonts';

const TermAndPolicy = ({route}: any) => {
  const {screen} = route.params;
  console.log(screen);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={screen} />
      <ScrollView contentContainerStyle={style.innerContainer}>
        <TextBox text={constants.dummyText} fontFamily={fonts.regular} />
      </ScrollView>
    </View>
  );
};

export default TermAndPolicy;

const style = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  innerContainer: {flexGrow: 1, marginTop: 30},
});
