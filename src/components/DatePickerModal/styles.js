import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../themes/colors'
import { FontFamily } from '../../themes/fontFamily/fontFamily'

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    outerContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingBottom: '3%'
    },
})
