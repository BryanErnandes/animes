import { useEffect, useState } from "react";

import api from '../../services/api'
import AnimeList from '../../Components/Pesquisa/animeList'
//import { View, Text, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, AnimeContainer, FlatBanners, MangaView, MangaTitle } from "./styles"
import { ScrollView } from "react-native";

export default function Search() {

    const navigation = useNavigation();
    const route = useRoute();
    const [animes, setAnimes] = useState([])
    const [mangas, setMangas] = useState([])

    useEffect(() => {

        async function getSeachAnime() {
            const response = await api.get(`/anime?q=${route.params?.name}`)
            const response2 = await api.get(`/manga?q=${route.params?.name}`)
            setAnimes(response.data.data)
            setMangas(response2.data.data)
            //console.log(response2.data.data);
        }

        getSeachAnime();

    }, [route.params?.name])

    function Pesquisa(item) {

        navigation.navigate("AnimesDetalhes", { mal_id: item.mal_id })
        console.log(item.mal_id)
    }


    return (
        <Container>
            <ScrollView>

            <MangaView>
                    <MangaTitle>Animes</MangaTitle>
                </MangaView>

                <FlatBanners
                    data={animes}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => String(item.mal_id)}
                    renderItem={({ item }) => <AnimeList data={item} navigatePagina={() => Pesquisa(item)} />}
                />


                <MangaView>
                    <MangaTitle>Mangás</MangaTitle>
                </MangaView>

                <FlatBanners
                    data={mangas}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => String(item.mal_id)}
                    renderItem={({ item }) => <AnimeList data={item} navigatePagina={() => Pesquisa(item)} />}
                />

            </ScrollView>

        </Container>
    )
}