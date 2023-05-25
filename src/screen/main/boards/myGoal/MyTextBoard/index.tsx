import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {BackButton, Header, StatusHeader} from 'components';
import constants from 'theme/constants';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import BoxButtons from 'components/boxButtons';
import GoalCard from 'components/GoalCard';
import {ActivityCards, VisionCards} from './cards';

const MyTextBoard = () => {
  const {colors} = useTheme();
  const style = styles(colors);
  const [iconsPress, setIconPress] = useState(0);
  // TODO you need to separate the data at the time of development.

  console.log('::::::iconsPress', iconsPress);

  const data:any= [
    {
      id: 1,
      vision: 'My Vision',
      name: 'My Vision Name',
      category: 'My category',
      date: 'May 05, 2023',
      reminder: 'M,T,W: 12:00 PM',
    },
    {
      id: 2,
      vision: 'My Vision',
      name: 'My Vision Name',
      category: 'My category',
      date: 'May 05, 2023',
      reminder: 'M,T,W: 12:00 PM',
    },
    {
      id: 3,
      vision: 'My Vision',
      name: 'My Vision Name',
      category: 'My category',
      date: 'May 05, 2023',
      reminder: 'M,T,W: 12:00 PM',
    },
    {
      id: 4,
      vision: 'My Vision',
      name: 'My Vision Name',
      category: 'My category',
      date: 'May 05, 2023',
      reminder: 'M,T,W: 12:00 PM',
    },
    {
      id: 5,
      vision: 'My Vision',
      name: 'My Vision Name',
      category: 'My category',
      date: 'May 05, 2023',
      reminder: 'M,T,W: 12:00 PM',
    },
  ];
  const renderItems = (value, item) => {
    switch (value) {
      case 0:
        return <VisionCards item={item} color={colors} />;
      case 1:
        return <GoalCard item={item} color={colors} showButton={false} />;
      case 2:
        return <ActivityCards item={item} color={colors} />;
    }
  };
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.myTextBoard} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 20,
        }}>
        <BoxButtons
          arr={['Vision', 'Goal', 'Activity']}
          iconPress={iconsPress}
          setIconPress={setIconPress}
          color={colors}
          noOfItem={3}
          size={20}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => renderItems(iconsPress, item, colors)}
      />
    </View>
  );
};

export default MyTextBoard;
