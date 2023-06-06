export type colors = {
  primary?: string;
  card?: string;
  text?: string;
  border?: string;
  notification?: string;

  themeColor: string;
  white: string;
  black: string;
  gray: string;
  commonWhite: string;
  commonBlack: string;
  matteBlack: string;
  placeholder: string;
  background: string;
  fadedTextColor: string;
  modalBackground: string;
  checkBoxBackground: string;
  checkBoxHead: string;
  darkGray: string;
  dividerColor: string;
  disable: string;
  red: string;
  learnAbout531text: string;
  learnAbout531Background: string;
  questionHeaderText: string;
  greyDot: string;
  modalButtonShadow: string;
  boxButtonBorder: string;
  boxButtonSelectBorder: string;
  navigationBarColor: string;
  textLightGray: string;
  textColor: string;
  countCard: string;
  
  
};
interface Theme {
  dark: boolean;
  colors: colors;
}

export const commonColor: any = {
  colors: {
    matteBlack: '#222222',
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    dividerColor: '#C3C2C2',
    modalBackground: 'rgba(0,0,0,0.7)',
    placeholder: 'rgba(200, 200, 200, 1)',
    fadedTextColor: 'rgba(148, 148, 148, 1)',
    
    red: 'rgba(222, 20, 20, 1)',
    learnAbout531text: '#CCFF00',
    learnAbout531Background: 'rgba(34, 34, 34, 1)',
    greyDot: '#565659',
    textLightGray:"rgba(255, 255, 255, 1)"

  },
};
const light: Theme = {
  dark: false,
  colors: {
    gray: '#949494',
    white: '#FFFFFF',
    black: '#000000',
    boxButtonBorder: '#000',
    boxButtonSelectBorder: '#222222',
    darkGray: '#ffffff',
    textColor: '#000',
    background: '#F5F6F0',
    themeColor: '#D4F369',
    checkBoxHead: '#D4F369',
    checkBoxBackground: '#000000',
    questionHeaderText: 'rgba(109, 109, 109, 1)',
    modalButtonShadow: '#fff',
    navigationBarColor:"#F5F6F0",
    disable: 'rgba(0,0,0,0.2)',
    countCard: '#000000',

    ...commonColor.colors,
  },
};

const dark: Theme = {
  dark: true,
  colors: {
    gray: '#D9D9D9',
    textColor: '#D9D9D9',
    white: '#000000',
    black: '#FFFFFF',
    darkGray: '#222222',
    themeColor: '#CCFF00',
    checkBoxHead: '#ffffff',
    checkBoxBackground: '#CCFF00',
    background: 'rgba(0, 0, 0, 1)',
    questionHeaderText: '#000',
    modalButtonShadow: '#222222',
    boxButtonBorder: '#fff',
    boxButtonSelectBorder: '#222222',
    navigationBarColor:"#000",
    disable: 'rgba(255,255,255,0.4)',
    countCard: '#222222',
    ...commonColor.colors,
  },
};

export default {light, dark};
