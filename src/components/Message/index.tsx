import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

interface MessageProps {
    avatar: string;
}

export function Message({ avatar }: MessageProps){
    return(
        <View style={styles.container}>
            <Text style={styles.msg}>
                Esse vai ser simplesmente fantástico! Bora aprender tudo em relação a montagem de APIs GraphQL. 
                Sem contar com as palestras e painéis.
            </Text>
            <View style={styles.infos}>
                <Avatar size="SMALL" img={avatar} />
                <Text style={styles.name}>Melqui</Text>
            </View>
        </View>
    )
}