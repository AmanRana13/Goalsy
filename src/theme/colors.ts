interface Theme {
  dark: boolean;
  colors: colors;
}
export interface colors {
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
  modal: string;
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
    disable: 'rgba(0,0,0,0.2)',
    red: 'rgba(222, 20, 20, 1)',
    learnAbout531text: '#CCFF00',
    learnAbout531Background: 'rgba(34, 34, 34, 1)',
    greyDot: '#565659',
  },
};
const light: Theme = {
  dark: false,
  colors: {
    gray: '#949494',
    white: '#FFFFFF',
    black: '#000000',

    darkGray: '#ffffff',

    background: '#F5F6F0',
    themeColor: '#D4F369',
    checkBoxHead: '#D4F369',
    checkBoxBackground: '#000000',
    questionHeaderText: 'rgba(109, 109, 109, 1)',
    modalButtonShadow:"#fff",
    ...commonColor.colors,
  },
};

const dark: Theme = {
  dark: true,
  colors: {
    gray: '#D9D9D9',
    white: '#000000',
    black: '#FFFFFF',
    darkGray: '#222222',
    themeColor: '#CCFF00',
    checkBoxHead: '#ffffff',
    checkBoxBackground: '#CCFF00',
    background: 'rgba(0, 0, 0, 1)',
    questionHeaderText: '#000',
    modalButtonShadow:"#222222",
    ...commonColor.colors,
  },
};

export default {light, dark};
