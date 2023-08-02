import React from "react";

import { View, Text, Image } from "react-native"


export default function AnimesLogin() {
    return (
        <View>
            <View>
                <Image
                    resizeMode="cover"
                    source={{
                        uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg"
                    }} />
                <View>
                    <Text>Nome</Text>
                </View>
            </View>
            <Text>Favoritos</Text>
            <View>
                <Image
                    resizeMode="cover"
                    source={{
                        uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg",
                    }} />
                <View>
                    <Text>Nome: </Text>
                    <Text>Nota: </Text>
                    <Text> c  mn </Text>
                </View>
            </View>
            <Text>Assistidos</Text>
            <View>
                <Image
                    resizeMode="cover"
                    source={{
                        uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg",
                    }} />
            </View>

        </View>
    )
}