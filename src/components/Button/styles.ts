import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../styles/themes'

export const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: COLORS.YELLOW,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        fontFamily: FONTS.BOLD,
        textTransform: 'uppercase',
        marginLeft: 8,
        color: COLORS.BLACK_PRIMARY
    }
})