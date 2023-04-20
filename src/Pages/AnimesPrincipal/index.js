import React, { useState } from "react";

import { ScrollView, Text } from "react-native";

import { Container, Topo, BannerBotao, Title, Banner, SliderLancamento, SlideAnime } from "./style"

import HeaderAnimes from "../../Components/HeaderAnimes";
import SliderLancamentos from "../../Components/SliderLancamentos";
import SliderAnimes from "../../Components/SliderAnimes";


export default function AnimesPrincipal() {

    const [personagens, setPersonagens] = useState([])
    const [hqs, setHqs] = useState([])

    return (
        <Container>


            <Topo>
                <HeaderAnimes />
            </Topo>

            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerBotao activeOpacity={0.9} onPress={() => alert("teste")}>
                    <Banner
                        resizeMode="stretch"
                        source={{
                            uri: 'https://anime.atsit.in/wp-content/uploads/2023/04/autor-de-oshi-no-ko-lanca-conto-que-inspirou-a-musica-de-abertura-do-anime.jpg',
                        }} />
                </BannerBotao>

                <Title>Temporada Atual</Title>

                <SliderLancamento
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => <SliderLancamentos />}


                />
                <Title>Mangas</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => <SliderAnimes />}


                />


            </ScrollView>




        </Container>

    )
}