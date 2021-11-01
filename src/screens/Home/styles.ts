import { StyleSheet } from 'react-native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { COLORS } from '../../styles/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK_SECONDARY,
        paddingTop: getStatusBarHeight() + 16,
        paddingHorizontal: 16,

        justifyContent: 'space-between',
        paddingBottom: getBottomSpace() + 16
    }
})