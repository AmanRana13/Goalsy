import { StyleSheet } from 'react-native';
import { Width } from 'hook/DevicePixel';
import { colors } from 'theme/colors';

const styles = (color: colors) =>
    StyleSheet.create({
        container: {
            borderRadius: 20,
            width: Width * 0.125,
            height: Width * 0.07,
            justifyContent: 'center',
            backgroundColor: color.checkBoxBackground,
        },
        innerContainer: {
            aspectRatio: 1,
            borderRadius: 50,
            height: Width * 0.05,
            marginHorizontal: Width * 0.01,
            backgroundColor: color.checkBoxHead,
        },
    });
export default styles