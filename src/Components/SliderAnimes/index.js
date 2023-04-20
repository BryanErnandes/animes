import React from "react";
//import { View, Text } from "react-native";

import { Container, Banner, Title, ContainerTitle } from "./styles";

export default function SliderAnimes() {
    return(
        <Container>
            <Banner
            resizeMode ="cover"
            source={{
                uri: 'https://anime.atsit.in/wp-content/uploads/2023/04/autor-de-oshi-no-ko-lanca-conto-que-inspirou-a-musica-de-abertura-do-anime.jpg',
            }} />
            <ContainerTitle>
                <Title numberOfLines={1}>oshi no ko</Title>
            </ContainerTitle>
             
        </Container>
    )
}