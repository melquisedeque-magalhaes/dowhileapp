import React from "react";
import { View } from "react-native";

import Logo from '../../assets/Logo DoWhile - 2021.svg'
import { Avatar } from "../Avatar";
import { styles } from "./styles";

interface HeaderProps {
    avatar: string
}

export function Header({ avatar }: HeaderProps){
    return(
        <View style={styles.container}>
            <Logo />

            <Avatar img={avatar} size="MEDIUM" />
        </View>
    )
}