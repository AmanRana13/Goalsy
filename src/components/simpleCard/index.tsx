import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, TextBox} from 'components';
import style from './styles';
import {simpleCardProps} from './type';
import {routesConstants} from 'theme/constants';

const SimpleCard = ({
  item,
  source,
  color,
  onPress,
  isRed,
  disabled = true,
  navigation,
}: simpleCardProps) => {
  const styles = style(color);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routesConstants.chat)}
      disabled={disabled}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.InnerHeader}>
          {item?.header && <TextBox text={item?.header} size={16} />}
          {item?.description && (
            <TextBox
              text={item?.description}
              size={13}
              color={isRed ? color.red : color.black}
            />
          )}
        </View>
        {source && (
          <View style={styles.icons}>
            <Icons source={source} styles={styles.icon} size={30} disabled />
          </View>
        )}
      </View>
      {item?.time && (
        <TextBox text={item?.time} size={10} styles={styles.time} />
      )}
    </TouchableOpacity>
  );
};

export default SimpleCard;
