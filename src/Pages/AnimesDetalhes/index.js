import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


import { ScrollView, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'
import { Container, Header, BotaoBanner, AssiBanner, FavBanner, Banner, Titulo, Title, ListaGeneros, Descricao, Body, Notas, Populidade } from "./styles";

import api from '../../services/api'
//add
export default function AnimesDetalhes() {


    const navigation = useNavigation();
    const route = useRoute();

    const [anime, setAnime] = useState({});

    useEffect(() => {

        let isActive = true


        async function loadAnime() {

            const response = await api.get(`/anime/${route.params?.mal_id}`,)
                .catch((err) => {
                    console.log(err)
                })


            if (isActive) {
                setAnime(response.data);
                console.log(response.data)
            }

        }

        if (isActive) {

            loadAnime();
        }
        return () => {
            isActive = false
        }
    }, [])

    return (

        <Container>
            <Banner
                resizeMode="cover"
                source={{
                    uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg",
                }} />

            <Titulo>
                <Title>{anime.episodes}ghfghf</Title>

            </Titulo>



        </Container>
    )
}
  