import React, {useEffect, useRef, useState} from 'react';
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
import {dispatch} from 'utils/globalFunctions';
import {userQuizAction, QuizAnswerAction} from 'redux/actions/home';
import {useSelector} from 'react-redux';
import {ShowAlertMessage} from 'utils/showAlertMessage';

const Quiz = ({navigation}: any) => {
  const {colors}: colors = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectIndex, setSelectIndex] = useState<number | null>(null);
  const style = styles(colors);
  const questionRef = useRef<any>([]);

  useEffect(() => {
    dispatch(userQuizAction());
  }, []);

  const {quizData} = useSelector((state: any) => state.homeReducer);
  const Options = ({item}: {item: Array<string>}) => {
    const onCheckBoxPress = (value: boolean, index: number) => {
      let newArray = [...questionRef.current];
      let obj = {
        questionId: quizData[currentQuestionIndex]?._id,
        answer: index,
      };
      const isChecked = newArray.findIndex(
        item =>
          item.answer === index && item.questionId === currentQuestionIndex,
      );
      if (isChecked === -1) {
        newArray.splice(currentQuestionIndex, 1, obj);
      } else {
        newArray.splice(currentQuestionIndex, 1);
      }

      questionRef.current = newArray;
    };

    return item?.map((text: any, index) => (
      <View style={style.options}>
        <View style={{flex: 9}}>
          <TextBox text={text} size={18} />
        </View>
        <CheckBox
          size={28}
          id={index}
          circle={true}
          color={colors}
          setIndex={setSelectIndex}
          borderColor={colors.themeColor}
          showCheck={index === selectIndex}
          value={(e: boolean) => onCheckBoxPress(e, index)}
        />
      </View>
    ));
  };

  const onSubmit = () => {
    if (currentQuestionIndex !== questionRef.current.length) {
      if (currentQuestionIndex === quizData.length - 1) {
        dispatch(QuizAnswerAction({quizData: questionRef.current}));
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      ShowAlertMessage('Please select one option.');
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={constants.quiz} LeftIcon={<BackButton />} />
      <Spacer />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          <TextBox
            text={`Question ${quizData ? currentQuestionIndex + 1 : 0}`}
            size={30}
          />
          <TextBox
            text={quizData ? `/${quizData.length}` : 0}
            size={20}
            color={colors.questionHeaderText}
          />
        </Text>

        <TextBox
          text={quizData[currentQuestionIndex]?.question}
          size={20}
          styles={{marginTop: 35, marginBottom: 35}}
        />
        <Options item={quizData[currentQuestionIndex]?.answer} />
        <Spacer height={constants.height40} />

        <CTAButton
          color={colors.themeColor}
          text={
            currentQuestionIndex === quizData.length - 1
              ? constants.submit
              : constants.next
          }
          buttonStyle={{alignSelf: 'center'}}
          onPress={() => (setSelectIndex(null), onSubmit())}
        />
        <Spacer height={constants.BottomHeight} />
      </ScrollView>
    </View>
  );
};

export default Quiz;
