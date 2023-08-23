import React from "react";

import { View, Text } from "react-native";

import { Container, ContainerFavoritos, ImageBackground, FavoritosText, Title } from './styles'

export default function Favoritos() {

    return (
        <Container>
            <ContainerFavoritos>
                <ImageBackground
                    resizeMode="cover"
                    source={{
                        uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg"
                    }} />
                <FavoritosText>
                    <Title numberOfLines={1}>FDSFSDFDGG</Title>
                </FavoritosText>
            </ContainerFavoritos>
        </Container>
    )
}