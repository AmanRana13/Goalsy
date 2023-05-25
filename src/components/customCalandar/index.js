import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {fonts} from 'theme/fonts';
import appImages from 'theme/images';
import moment from 'moment';

const INITIAL_DATE = Date();
const appColors = {background: 'transparent'};
const textColor = {orange: '#000000', lightBlack: '#625F5F'};

let customStyles = {
  container: {
    backgroundColor: appColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: textColor.orange,
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

const sundays = {
  '2022-01-02': {customStyles},
  '2022-01-09': {customStyles},
  '2022-01-16': {customStyles},
  '2022-01-23': {customStyles},
  '2022-01-30': {customStyles},
  '2022-02-06': {customStyles},
  '2022-02-13': {customStyles},
  '2022-02-20': {customStyles},
  '2022-02-27': {customStyles},
  '2022-03-06': {customStyles},
  '2022-03-13': {customStyles},
  '2022-03-20': {customStyles},
  '2022-03-27': {customStyles},
  '2022-04-03': {customStyles},
  '2022-04-10': {customStyles},
  '2022-04-17': {customStyles},
  '2022-04-24': {customStyles},
  '2022-05-01': {customStyles},
  '2022-05-08': {customStyles},
  '2022-05-15': {customStyles},
  '2022-05-22': {customStyles},
  '2022-05-29': {customStyles},
  '2022-06-05': {customStyles},
  '2022-06-12': {customStyles},
  '2022-06-19': {customStyles},
  '2022-06-26': {customStyles},
  '2022-07-03': {customStyles},
  '2022-07-10': {customStyles},
  '2022-07-17': {customStyles},
  '2022-07-24': {customStyles},
  '2022-07-31': {customStyles},
  '2022-08-07': {customStyles},
  '2022-08-14': {customStyles},
  '2022-08-21': {customStyles},
  '2022-08-28': {customStyles},
  '2022-09-04': {customStyles},
  '2022-09-11': {customStyles},
  '2022-09-18': {customStyles},
  '2022-09-25': {customStyles},
  '2022-10-02': {customStyles},
  '2022-10-09': {customStyles},
  '2022-10-16': {customStyles},
  '2022-10-23': {customStyles},
  '2022-10-30': {customStyles},
  '2022-11-06': {customStyles},
  '2022-11-13': {customStyles},
  '2022-11-20': {customStyles},
  '2022-11-27': {customStyles},
  '2022-12-04': {customStyles},
  '2022-12-11': {customStyles},
  '2022-12-18': {customStyles},
  '2022-12-25': {customStyles},
  '2023-01-01': {customStyles},
  '2023-01-08': {customStyles},
  '2023-01-15': {customStyles},
  '2023-01-22': {customStyles},
  '2023-01-29': {customStyles},
  '2023-02-05': {customStyles},
  '2023-02-12': {customStyles},
  '2023-02-19': {customStyles},
  '2023-02-26': {customStyles},
  '2023-03-05': {customStyles},
  '2023-03-12': {customStyles},
  '2023-03-19': {customStyles},
  '2023-03-26': {customStyles},
  '2023-04-02': {customStyles},
  '2023-04-09': {customStyles},
  '2023-04-16': {customStyles},
  '2023-04-23': {customStyles},
  '2023-04-30': {customStyles},
  '2023-05-07': {customStyles},
  '2023-05-14': {customStyles},
  '2023-05-21': {customStyles},
  '2023-05-28': {customStyles},
  '2023-06-04': {customStyles},
  '2023-06-11': {customStyles},
  '2023-06-18': {customStyles},
  '2023-06-25': {customStyles},
  '2023-07-02': {customStyles},
  '2023-07-09': {customStyles},
  '2023-07-16': {customStyles},
  '2023-07-23': {customStyles},
  '2023-07-30': {customStyles},
  '2023-08-06': {customStyles},
  '2023-08-13': {customStyles},
  '2023-08-20': {customStyles},
  '2023-08-27': {customStyles},
  '2023-09-03': {customStyles},
  '2023-09-10': {customStyles},
  '2023-09-17': {customStyles},
  '2023-09-24': {customStyles},
  '2023-10-01': {customStyles},
  '2023-10-08': {customStyles},
  '2023-10-15': {customStyles},
  '2023-10-22': {customStyles},
  '2023-10-29': {customStyles},
  '2023-11-05': {customStyles},
  '2023-11-12': {customStyles},
  '2023-11-19': {customStyles},
  '2023-11-26': {customStyles},
  '2023-12-03': {customStyles},
  '2023-12-10': {customStyles},
  '2023-12-17': {customStyles},
  '2023-12-24': {customStyles},
  '2024-01-07': {customStyles},
  '2024-01-14': {customStyles},
  '2024-01-21': {customStyles},
  '2024-01-28': {customStyles},
  '2024-02-04': {customStyles},
  '2024-02-11': {customStyles},
  '2024-02-18': {customStyles},
  '2024-02-25': {customStyles},
  '2024-03-03': {customStyles},
  '2024-03-10': {customStyles},
  '2024-03-17': {customStyles},
  '2024-03-24': {customStyles},
  '2024-03-31': {customStyles},
  '2024-04-07': {customStyles},
  '2024-04-14': {customStyles},
  '2024-04-21': {customStyles},
  '2024-04-28': {customStyles},
  '2024-05-05': {customStyles},
  '2024-05-12': {customStyles},
  '2024-05-19': {customStyles},
  '2024-05-26': {customStyles},
  '2024-06-02': {customStyles},
  '2024-06-09': {customStyles},
  '2024-06-16': {customStyles},
  '2024-06-23': {customStyles},
  '2024-06-30': {customStyles},
  '2024-07-07': {customStyles},
  '2024-07-14': {customStyles},
  '2024-07-21': {customStyles},
  '2024-07-28': {customStyles},
  '2024-08-04': {customStyles},
  '2024-08-11': {customStyles},
  '2024-08-18': {customStyles},
  '2024-08-25': {customStyles},
  '2024-09-01': {customStyles},
  '2024-09-08': {customStyles},
  '2024-09-15': {customStyles},
  '2024-09-22': {customStyles},
  '2024-09-29': {customStyles},
  '2024-10-06': {customStyles},
  '2024-10-13': {customStyles},
  '2024-10-20': {customStyles},
  '2024-10-27': {customStyles},
  '2024-11-03': {customStyles},
  '2024-11-10': {customStyles},
  '2024-11-17': {customStyles},
  '2024-11-24': {customStyles},
  '2024-12-01': {customStyles},
  '2024-12-08': {customStyles},
  '2024-12-15': {customStyles},
  '2024-12-22': {customStyles},
  '2024-12-29': {customStyles},
  '2025-01-05': {customStyles},
  '2025-01-12': {customStyles},
  '2025-01-19': {customStyles},
  '2025-01-26': {customStyles},
  '2025-02-02': {customStyles},
  '2025-02-09': {customStyles},
  '2025-02-16': {customStyles},
  '2025-02-23': {customStyles},
  '2025-03-02': {customStyles},
  '2025-03-09': {customStyles},
  '2025-03-16': {customStyles},
  '2025-03-23': {customStyles},
  '2025-03-30': {customStyles},
  '2025-04-06': {customStyles},
  '2025-04-13': {customStyles},
  '2025-04-20': {customStyles},
  '2025-04-27': {customStyles},
  '2025-05-04': {customStyles},
  '2025-05-11': {customStyles},
  '2025-05-18': {customStyles},
  '2025-05-25': {customStyles},
  '2025-06-01': {customStyles},
  '2025-06-08': {customStyles},
  '2025-06-15': {customStyles},
  '2025-06-22': {customStyles},
  '2025-06-29': {customStyles},
  '2025-07-06': {customStyles},
  '2025-07-13': {customStyles},
  '2025-07-20': {customStyles},
  '2025-07-27': {customStyles},
  '2025-08-03': {customStyles},
  '2025-08-10': {customStyles},
  '2025-08-17': {customStyles},
  '2025-08-24': {customStyles},
  '2025-08-31': {customStyles},
  '2025-09-07': {customStyles},
  '2025-09-14': {customStyles},
  '2025-09-21': {customStyles},
  '2025-09-28': {customStyles},
  '2025-10-05': {customStyles},
  '2025-10-12': {customStyles},
  '2025-10-19': {customStyles},
  '2025-10-26': {customStyles},
  '2025-11-02': {customStyles},
  '2025-11-09': {customStyles},
  '2025-11-16': {customStyles},
  '2025-11-23': {customStyles},
  '2025-11-30': {customStyles},
  '2025-12-07': {customStyles},
  '2025-12-14': {customStyles},
  '2025-12-21': {customStyles},
  '2025-12-28': {customStyles},
};

const markedDates = {
  ...sundays,
  [`${moment().format('YYYY-MM-DD')}`]: {
    marked: true,
    dotColor: textColor.orange,
    customStyles: {
      text: {
        color: textColor.lightBlack,
        marginTop: 4,
      },
    },
  },
};

const CustomCalender = () => {
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
            borderBottomColor: textColor.lightBlack,
          },
          //style of the day names on the header.
          dayHeader: {
            marginBottom: 14,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: textColor.lightBlack,
          },
          sundayDayHeader: {
            marginBottom: 14,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: textColor.orange,
          },
          disabledDayHeader: {
            color: textColor.orange,
          },
          //style of the month name on the header.
          monthText: {
            fontSize: 18,
            fontFamily: fonts.bold,
            fontWeight: '600',
            color: textColor.orange,
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
          color: textColor.lightBlack,
          fontSize: 16,
          textAlignVertical: 'center',
          alignSelf: 'center',
        },
        arrowStyle: {padding: 0},
        textSectionTitleColor: '#000000',
        textSectionTitleDisabledColor: '#000000',
        selectedDayBackgroundColor: '#000000',
        selectedDayTextColor: '#000000',
        sundaytextSectionTitleColor: 'red',
        monthTextColor: textColor.orange,
        indicatorColor: textColor.orange,
        textDayFontSize: 16,
      }}
      initialDate={moment().format('YYYY-MM-DD')}
      minDate={'2012-05-10'}
      maxDate={'2025-05-30'}
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
            style={{marginLeft: -8, margingwidth: 16, height: 16}}
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
