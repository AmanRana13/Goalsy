import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  TextBox,
  StatusHeader,
  Header,
  BackButton,
  CTAButton,
  Spacer,
  CheckBox,
} from 'components';

import constants, {routesConstants} from 'theme/constants';
import styles from './style';
import {colors} from 'theme/colors';

const Quiz = ({navigation}): any => {
  const {colors}: colors = useTheme();
  const style = styles(colors);

  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.quiz} LeftIcon={<BackButton />} />
      <Spacer />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          <TextBox text={'Question 1'} size={30} />
          <TextBox text={`/1`} size={20} color={colors.questionHeaderText} />
        </Text>

        <TextBox
          text={`Lorem ipsum is a dummy text?`}
          size={20}
          styles={{marginTop: 35, marginBottom: 35}}
        />

        <View style={style.options}>
          <View style={{flex: 9}}>
            <TextBox
              text={`Lorem ipsum is a dummy text for the question?`}
              size={18}
            />
          </View>
          <CheckBox
            circle={true}
            color={colors}
            size={28}
            borderColor={colors.themeColor}
          />
        </View>
        <View style={style.options}>
          <View style={{flex: 9}}>
            <TextBox
              text={`Lorem ipsum is a dummy text for the question?`}
              size={18}
            />
          </View>
          <CheckBox
            circle={true}
            color={colors}
            size={28}
            borderColor={colors.themeColor}
          />
        </View>
        <View style={style.options}>
          <View style={{flex: 9}}>
            <TextBox
              text={`Lorem ipsum is a dummy text for the question?`}
              size={18}
            />
          </View>
          <CheckBox
            circle={true}
            color={colors}
            size={28}
            borderColor={colors.themeColor}
          />
        </View>
        <View style={style.options}>
          <View style={{flex: 9}}>
            <TextBox
              text={`Lorem ipsum is a dummy text for the question?`}
              size={18}
            />
          </View>
          <CheckBox
            circle={true}
            color={colors}
            size={28}
            borderColor={colors.themeColor}
          />
        </View>
        <Spacer height={constants.height40} />
        <CTAButton
          color={colors.themeColor}
          text={constants.submit}
          buttonStyle={{alignSelf: 'center'}}
          onPress={() => navigation.navigate(routesConstants.boards)}
        />
        <Spacer height={constants.BottomHeight} />
      </ScrollView>
    </View>
  );
};

export default Quiz;
