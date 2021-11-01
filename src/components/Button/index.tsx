import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../styles/themes'
import { styles } from './styles'

export function Button() {
    return(
        <TouchableOpacity style={styles.container}>
            <AntDesign name="github" color={COLORS.BLACK_PRIMARY} size={24} />
            <Text style={styles.text}>Entrar com Github</Text>
        </TouchableOpacity>
    )
}