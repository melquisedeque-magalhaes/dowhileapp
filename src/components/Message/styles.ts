import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../styles/themes'

export const styles = StyleSheet.create({
    container: {
        
    },
    msg: {
        color: COLORS.WHITE,
        fontSize: 15,
        lineHeight: 24,
        fontFamily: FONTS.REGULAR
    },
    infos: {
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    name: {
        color: COLORS.GRAY_TERTIARY,
        fontSize: 15,
        lineHeight: 24,
        fontFamily: FONTS.REGULAR,
        marginLeft: 8
    }
})