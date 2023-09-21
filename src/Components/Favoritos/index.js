import React from "react";

//import { View, Text } from "react-native";

import { Container, Botao, ContainerFavoritos, ImageBackground, FavoritosText, Title } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Favoritos({data, deleteFavorito, navigatePag}) {
    

    return (
        <Container>
             <Botao activeOpacity={0.8} onPress={ () => deleteFavorito(data.mal_id)}>
            <Ionicons name="trash-bin" size={21} color='#fff' />
        </Botao>
            <ContainerFavoritos activeOpacity={0.9} onPress={ () => navigatePag(data)}>
                <ImageBackground
                    resizeMode="cover"
                    source={{
                        uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }}  />
            </ContainerFavoritos>
        </Container>
    )
}