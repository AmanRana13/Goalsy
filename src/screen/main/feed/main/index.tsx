import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

// components
import {StatusHeader, Header} from 'components';

import constants, {routesConstants} from 'theme/constants';

// style
import styles from './styles';
import Icons from 'components/icons';
import appImages from 'theme/images';
import Spacer from 'components/spacer';
import usePixel from 'hook/DevicePixel';
import TextBox from 'components/textBox';
import {fonts} from 'theme/fonts';
const data = [
  {
    id: 1,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: true,
  },
  {
    id: 2,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: false,
  },
  {
    id: 3,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: false,
  },
  {
    id: 4,
    post: appImages.dummyPost,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isLiked: true,
  },
];
const Feed = ({navigation}): any => {
  const sizes = usePixel(360);
  const {colors}: any = useTheme();
  const style = styles(colors, sizes);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header
        RightIcon={
          <Icons
            disabled={false}
            size={30}
            source={[appImages.search, appImages.searchDark]}
            onPress={() => {
              navigation.navigate(routesConstants.search);
            }}
          />
        }
        RightIcon2={
          <Icons
            disabled={false}
            size={30}
            source={[appImages.plus, appImages.plusDark]}
            onPress={() => {
              navigation.navigate(routesConstants.createPost);
            }}
          />
        }
        title={constants.feed}
      />
      <Spacer />

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Icons
                disabled={true}
                source={item.post}
                styles={style.postImage}
                resize="cover"
              />
              <TextBox text={item.text} size={14} styles={style.postText} />
              <View style={style.likeCommentContainer}>
                <Icons
                  disabled={false}
                  size={30}
                  source={[appImages.heart, appImages.heartDark]}
                  imageStyle={item.isLiked ? null : {tintColor: colors.gray}}
                />
                <Icons
                  disabled={false}
                  size={30}
                  source={[appImages.comment, appImages.commentDark]}
                  onPress={() => {
                    navigation.navigate(routesConstants.comments);
                  }}
                  styles={{marginLeft: 8}}
                />
              </View>
              <View
                style={
                  data.length != index + 1
                    ? style.postFooter
                    : style.postFooterWithoutBorder
                }
              />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;
