import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

const style = (color: colors) => StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: color.darkGray,
        paddingLeft: 10,
        marginVertical: 10,
        borderRadius: 15
    },
    icons: {
        marginRight: 20,
        borderColor: '#CCFF00',
        borderWidth: 2,
        borderRadius: 50,
    },
    text: { 
        marginTop: 6,
        flex: 6 ,paddingRight:10
    },
    button:{
        flex: 3,
        justifyContent: 'space-evenly',
      }

});

export default style;
