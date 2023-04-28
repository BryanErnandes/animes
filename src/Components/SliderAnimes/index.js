import React from "react";
//import { View, Text } from "react-native";

import { Container, Banner, Title, ContainerTitle } from "./styles";

export default function SliderAnimes({data}) {
    return(
        <Container>
            <Banner
            resizeMode ="cover"
            source={{
                uri: `${data.images.jpg.image_url}`,
            }} />
            <ContainerTitle>
                <Title numberOfLines={1}>{data.title}</Title>
            </ContainerTitle>
             
        </Container>
    )
}