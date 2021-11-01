import React from 'react'
import { View } from "react-native";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Message } from '../../components/Message';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Header avatar="https://github.com/melquisedeque-magalhaes.png" />

            <View>
                <Message avatar="https://github.com/melquisedeque-magalhaes.png" />
                <Message avatar="https://github.com/melquisedeque-magalhaes.png" />
                <Message avatar="https://github.com/melquisedeque-magalhaes.png" />
            </View>
            
            <Button />
        </View>
    )
}