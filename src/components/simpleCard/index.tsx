import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, TextBox} from 'components';
import style from './styles';
import {simpleCardProps} from './type';
import {dateTimeFormat, routesConstants} from 'theme/constants';
import {navigate} from 'routes/navigationServices';
import moment from 'moment';
import {fonts} from 'theme/fonts';

const SimpleCard = ({
  header,
  description,
  time,
  close,
  source,
  color,
  onPress,
  disabled = true,
  ticketId,
  id,
  isTicketClose
}: simpleCardProps) => {
  const styles = style(color);
  return (
    <TouchableOpacity
      onPress={() =>
        navigate(routesConstants.chat, {id, ticketId, isTicketClose})
      }
      disabled={disabled}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.InnerHeader}>
          {header && (
            <TextBox text={header} size={17} fontFamily={fonts.bold} />
          )}
          {description && (
            <TextBox
              text={close ? 'close' : description}
              size={13}
              color={close ? color.red : color.black}
              fontFamily={fonts.bold}
            />
          )}
        </View>
        {source && (
          <View style={styles.icons}>
            <Icons source={source} styles={styles.icon} size={30} disabled />
          </View>
        )}
      </View>
      {time && (
        <TextBox
          text={moment(time).format(dateTimeFormat)}
          size={10}
          styles={styles.time}
        />
      )}
    </TouchableOpacity>
  );
};

export default SimpleCard;
