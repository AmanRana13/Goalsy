import React, {useMemo} from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {fonts} from 'theme/fonts';
import appImages from 'theme/images';
import moment from 'moment';
import {useTheme} from '@react-navigation/native';

const CustomCalender = () => {
  const {colors} = useTheme();
  const INITIAL_DATE = Date();
  const appColors = {background: 'transparent'};
  const textColor = {primary: colors.calenderSunday, secondary: '#625F5F'};
  let customStyles = {
    container: {
      backgroundColor: appColors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: textColor.primary,
      marginTop: 4,
    },
  };

  LocaleConfig.locales['en'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb.',
      'Mar',
      'April',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = 'en';

  const sundays = useMemo(() => {
    const sundays = {};
    const startDate = new Date(2012, 11, 31);
    const endDate = new Date(2050, 11, 31);
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      if (currentDate.getDay() === 0) {
        sundays[moment(currentDate).format('YYYY-MM-DD')] = {customStyles};
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return sundays;
  }, []);
  const markedDates = {
    ...sundays,
    [`${moment().format('YYYY-MM-DD')}`]: {
      marked: true,
      dotColor: textColor.primary,
      customStyles: {
        text: {
          color: textColor.secondary,
          marginTop: 4,
        },
      },
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      disabledDaysIndexes={[0]}
      theme={{
        'stylesheet.calendar.header': {
          //style of the view of day names container.
          header: {
            backgroundColor: appColors.background,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 16,
          },
          week: {
            marginTop: 10,
            paddingRight: 4,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1.5,
            borderBottomColor: textColor.secondary,
          },
          //style of the day names on the header.
          dayHeader: {
            marginBottom: 14,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: textColor.secondary,
          },
          sundayDayHeader: {
            marginBottom: 14,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: textColor.primary,
          },
          disabledDayHeader: {
            color: textColor.primary,
          },
          //style of the month name on the header.
          monthText: {
            fontSize: 18,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: '#fff',
          },
        },
        'stylesheet.calendar.main': {
          // single date container
          dayContainer: {
            flex: 1,
            alignItems: 'center',
          },
          // Style of dates view.
          monthView: {
            backgroundColor: appColors.background,
          },
          // style of the single date
          week: {
            marginVertical: 0,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
        },
        textDayStyle: {
          includeFontPadding: false,
          fontFamily: fonts.bold,
          fontWeight: '600',
          color: textColor.secondary,
          fontSize: 16,
          textAlignVertical: 'center',
          alignSelf: 'center',
        },
        arrowStyle: {padding: 0},
        textSectionTitleColor: '#000000',
        textSectionTitleDisabledColor: '#000000',
        selectedDayBackgroundColor: '#000000',
        selectedDayTextColor: '#000000',
        monthTextColor: textColor.primary,
        indicatorColor: textColor.primary,
        textDayFontSize: 16,
      }}
      initialDate={moment().format('YYYY-MM-DD')}
      minDate={'2012-05-10'}
      maxDate={'2050-05-30'}
      markingType={'custom'}
      markedDates={markedDates}
      onDayPress={date => {}}
      hideExtraDays={true}
      firstDay={0}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableAllTouchEventsForDisabledDays={true}
      renderArrow={direction =>
        direction === 'left' ? (
          <Image
            resizeMode={'contain'}
            source={appImages.calLeft}
            style={{marginLeft: -8, width: 16, height: 16}}
          />
        ) : (
          <Image
            resizeMode={'contain'}
            source={appImages.calRight}
            style={{marginRight: -1, width: 16, height: 16}}
          />
        )
      }
    />
  );
};

export default CustomCalender;
