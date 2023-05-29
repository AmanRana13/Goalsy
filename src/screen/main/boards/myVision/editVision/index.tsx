import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackButton,
  CTAButton,
  Header,
  Icons,
  InputField,
  Spacer,
  StatusHeader,
  DropDown,
} from 'components';
import constants, {routesConstants} from 'theme/constants';
import {useTheme} from '@react-navigation/native';
import TextBox from 'components/textBox';
import appImages from 'theme/images';
import styles from './styles';
import {fonts} from 'theme/fonts';
import EditUserCard from 'components/EditUserCard';
import InviteUserModal from 'components/inviteUserModal';
import { goBack } from 'routes/navigationServices';

const categoryList = [
  {id: 1, value: 'category 1'},
  {id: 2, value: 'category 2'},
  {id: 3, value: 'category 3'},
];

const data = {
  id: 1,
  userName: 'Evelyn',
  buttonName: constants.updateInviteAccess,
};

const EditVision = ({navigation}) => {
  const {colors} = useTheme();
  const style = styles(colors);
  const onCategorySelect = e => {};
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={style.container}>
      <StatusHeader />
      <Header LeftIcon={<BackButton />} title={constants.editVision} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={constants.height20} />
        <DropDown
          list={categoryList}
          onPress={onCategorySelect}
          color={colors}
          label={constants.selectCategory}
        />
        <InputField
          colors={colors}
          TextInputProps={{
            placeholder: constants.visionName,
            returnKeyType: 'done',
            value: 'Hello',
          }}
          label={constants.visionName}
        />
        <TextBox
          text={constants.VisionIcon}
          styles={{paddingVertical: 10}}
          fontFamily={fonts.regular}
          size={16}
        />
        <Icons
          source={appImages.plus}
          size={60}
          styles={{paddingVertical: 5}}
        />
        <Spacer />
        <TextBox
          text={constants.InvitedUser}
          styles={{paddingTop: 10}}
          fontFamily={fonts.regular}
          size={16}
        />
        <EditUserCard
          color={colors}
          item={{
            source: appImages.dummyUser,
            userName: 'Hello',
            description: 'Access Type:  View, Edit and Invite',
          }}
          setOpenModal={setOpenModal}
        />
        <Spacer height={constants.height50} />
        <View style={{alignSelf: 'center'}}>
          <CTAButton
            text={constants.update}
            buttonStyle={style.buttonStyle}
            color={colors.themeColor}
            type={constants.large}
            onPress={() => goBack()}
          />
        </View>
        <Spacer height={constants.height50} />
      </ScrollView>
      <InviteUserModal
        visible={openModal}
        onUpdatePress={() => setOpenModal(false)}
        color={colors}
        item={data}
      />
    </View>
  );
};

export default EditVision;
