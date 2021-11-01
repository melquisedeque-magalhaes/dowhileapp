import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { styles } from "./styles";

interface AvatarProps {
    img: string;
    size: 'SMALL' | 'MEDIUM'
}

export function Avatar({ img, size }: AvatarProps){
    return(
        <LinearGradient 
            colors={['#ff008e', '#ffcd1e']} 
            style={[{
                borderRadius: size === 'MEDIUM' ? 28 : 20,
                padding: size === 'MEDIUM' ? 4 : 3
            }]}
        >
            <Image 
                style={[
                    styles.avatar, {
                        width: size === 'MEDIUM' ? 48 : 32,
                        height: size === 'MEDIUM' ? 48 : 32,
                    }
                ]} 
                source={{ uri: img }} 
            />
        </LinearGradient>
    )
}