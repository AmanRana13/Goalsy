import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {
  TextBox,
  StatusHeader,
  Header,
  BackButton,
  CTAButton,
  Spacer,
} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import usePixel, {Width} from 'hook/DevicePixel';
import LearnAboutHeader from './learnAboutHeader';
import VideoPlayer from 'components/Video';

const LearnAbout531 = ({navigation}): any => {
  const scrollRef = useRef();
  const {colors}: any = useTheme();
  const style = styles(colors);
  const [selectedIcon, setSelectedIcon] = useState(4);
  const sizes = usePixel(220);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [selectedIcon]);

  const onHeaderClick = (value: number) => {
    setSelectedIcon(value);
  };
  const buttonName = (value: number) => {
    switch (value) {
      case 4:
        return 'Learn About 5';
      case 0:
        return 'Learn About 3';
      case 1:
        return 'Learn About 1';
      case 2:
        return 'Let’s Get Started';
      default:
        return '';
    }
  };
  const header = (value: number) => {
    switch (value) {
      case 4:
        return 'Overview';
      case 0:
        return '5-Vision';
      case 1:
        return '3-Goals';
      case 2:
        return '1-Activities';
      default:
        return '';
    }
  };
  const onButtonPress = (value: number) => {
    switch (value) {
      case 4:
        return setSelectedIcon(0);
      case 0:
        return setSelectedIcon(1);
      case 1:
        return setSelectedIcon(2);
      case 2:
        return navigation.navigate(routesConstants.boards);
      default:
        return setSelectedIcon(4);
    }
  };
  const videoLink = (value: number) => {
    switch (value) {
      case 4:
        return require('../../../../assets/videos/1.mp4');
      case 0:
        return require('../../../../assets/videos/2.mp4');
      case 1:
        return require('../../../../assets/videos/3.mp4');
      case 2:
        return require('../../../../assets/videos/4.mp4');
      default:
        return setSelectedIcon(4);
    }
  };

  const Title = (value: number) => {
    switch (value) {
      case 4:
        return constants.LearnAboutGoalsy;
      case 0:
        return constants.LearnAbout5;
      case 1:
        return constants.LearnAbout3;
      case 2:
        return constants.LearnAbout1;
      default:
        return constants.LearnAboutGoalsy;
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header title={Title(selectedIcon)} LeftIcon={<BackButton />} />
      <Spacer />
      <View style={{justifyContent: 'space-between'}}>
        <LearnAboutHeader
          color={colors}
          valueCallback={onHeaderClick}
          value={selectedIcon}
        />
      </View>
      <Spacer />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <TextBox
          text={header(selectedIcon)}
          size={25}
          styles={{alignSelf: 'center', marginTop: 10, marginBottom: 20}}
        />
        <TextBox text={constants.dummyText} />
        <Spacer />
        <VideoPlayer videoLink={videoLink(selectedIcon)} changeVideo={selectedIcon}/>
        <Spacer height={constants.height50} />

        <CTAButton
          text={buttonName(selectedIcon)}
          buttonStyle={[style.bottomButton, {width: sizes}]}
          color={colors.themeColor}
          type={constants.large}
          onPress={() => onButtonPress(selectedIcon)}
        />
        <Spacer height={constants.BottomHeight} />
      </ScrollView>
    </View>
  );
};

export default LearnAbout531;
