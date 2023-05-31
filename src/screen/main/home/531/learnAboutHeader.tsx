import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from 'components/icons';
import appImages from 'theme/images';
import {TextBox} from 'components';
import styles from './styles';
import {header} from './type';
import BoxButtons from 'components/boxButtons';

const LearnAboutHeader = ({color, valueCallback, value}: header) => {
  const style = styles(color);
  const [iconPress, setIconPress] = useState(value);
  const arr = [5, 3, 1];

  useEffect(() => {
    valueCallback(iconPress);
  }, [iconPress]);

  useEffect(() => {
    setIconPress(value);
  }, [value]);
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        style={[
          iconPress === 4
            ? {
                ...style.innerButton,
                backgroundColor: color.learnAbout531Background,
                borderColor: color.boxButtonSelectBorder,
              }
            : style.innerButton,
        ]}
        onPress={() => setIconPress(4)}>
        <Icons
          source={
            iconPress === 4
              ?  appImages.goal2Dark
              : [appImages.goal2,appImages.goal3Dark,]
          }
          disabled={true}
        />
      </TouchableOpacity>
      <BoxButtons
        color={color}
        arr={arr}
        iconPress={iconPress}
        setIconPress={setIconPress}
        noOfItem={4}
      />
    </View>
  );
};

export default LearnAboutHeader;
