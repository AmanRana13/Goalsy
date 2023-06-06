import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {Spacer, TextBox} from 'components';
import {fonts} from 'theme/fonts';
import {routesConstants} from 'theme/constants';
import {friendCount} from 'screen/main/home/type';
import {colors} from 'theme/colors';

const CountsCard = ({
  colors,
  navigation,
  friendCount = 0,
  friendRequestCount = 0,
}: {
  colors: colors;
  navigation: any;
  friendCount: any;
  friendRequestCount: any;
}) => {
  const style = styles(colors);
  const Card = useCallback(({count, title, onPress}: friendCount) => {
    return (
      <TouchableOpacity onPress={onPress} style={{flex: 1}}>
        <TextBox
          text={count}
          size={20}
          color={colors.themeColor}
          styles={{alignSelf: 'center'}}
        />
        <TextBox
          text={title}
          size={17}
          fontFamily={fonts.medium}
          styles={{alignSelf: 'center'}}
          color={colors.commonWhite}
        />
      </TouchableOpacity>
    );
  }, []);
  return (
    <View style={style.container}>
      <Card
        count={friendCount}
        title={'Friends'}
        onPress={() =>
          navigation.navigate(routesConstants.Friend, {
            screen: routesConstants.Friend,
          })
        }
      />
      <Spacer styles={style.spacer} />
      <Card
        count={friendRequestCount}
        title={'Friend Requests '}
        onPress={() =>
          navigation.navigate(routesConstants.Friend, {
            screen: routesConstants.friendRequest,
          })
        }
      />
    </View>
  );
};

export default CountsCard;

const styles = (colors: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.countCard,
      flexDirection: 'row',
      flex: 1,
      paddingVertical: 8,
      borderRadius: 10,
    },
    spacer: {
      borderLeftWidth: 3,
      borderColor: '#ffffff31',
      borderRadius: 2,
      height: '100%',
    },
  });
