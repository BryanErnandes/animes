import { useState, useEffect } from "react";

import { ScrollView, Text } from "react-native";

import { Container, Topo, BannerBotao, Title, TitleBanner, ListGenres, ContainerTitle, Banner, SliderLancamento, SlideAnime } from "./style"

import api from "../../services/api"
import { getListAnimes, randomBanner } from '../../Utils/animes'

import HeaderAnimes from "../../Components/HeaderAnimes";
import SliderLancamentos from "../../Components/SliderLancamentos";
import SliderAnimes from "../../Components/SliderAnimes";
import Generos from "../../Components/Genres"

import {useNavigation} from "@react-navigation/native"


export default function AnimesPrincipal() {

    const [nowSeason, setNowSeason] = useState([])
    // [episodes, setEpisodes] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [mangas, setMangas] = useState([])
    const [topAnime, setTopAnime] = useState([])
    const [topManga, setTopManga] = useState([])

    const [animeBanner, setAnimeBanner] = useState({})

    const navigation = useNavigation();


    useEffect(() => {
        let isActive = true
        const ac = new AbortController();

        async function getAnimes() {
            //const response = await api.get('/seasons/now')

            const [nowSeason, recommendations, mangas, topAnime, topManga] = await Promise.all([
                api.get('/seasons/now'),

                api.get('/recommendations/anime'),

                api.get('/manga'),

                api.get('/top/anime'),

                api.get('/top/manga'),
            ])

            //console.log(recommendations.data)
            //setNowSeason(nowSeason.data)

            if (isActive) {

                const listSeason = getListAnimes(20, nowSeason.data.data)
                //const listEpisodes = getListAnimes(20, episodes.data)
                const listRecommendations = getListAnimes(10, recommendations.data.data)
                const listManga = getListAnimes(20, mangas.data.data)
                const listTopAnime = getListAnimes(10, topAnime.data.data)
                const listTopManga = getListAnimes(10, topManga.data.data)

                setAnimeBanner(nowSeason.data.data[randomBanner(nowSeason.data.data)])
                console.log(randomBanner(nowSeason.data.data))

                setNowSeason(listSeason);
                //setEpisodes(listEpisodes);
                setRecommendations(listRecommendations);
                setMangas(listManga);
                setTopAnime(listTopAnime);
                setTopManga(listTopManga);


            }
        }

        getAnimes();

        return () => {
            isActive = false
            ac.abort()
        }
    }, [])

    function DetalhesPagina(item) {

        navigation.navigate("AnimesDetalhes", {mal_id: item.mal_id})
        console.log(item.mal_id)
    }

    function MangasDetalhes(item) {

        navigation.navigate("MangasDetalhes", {mal_id: item.mal_id})
        console.log(item.mal_id)
    }

    
    return (
        <Container>


            <Topo>
                <HeaderAnimes />
            </Topo>

            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerBotao activeOpacity={0.9} onPress={() => DetalhesPagina(animeBanner)}>

                    <Banner
                        resizeMode="cover"
                        source={{
                            uri: `${animeBanner.images.jpg.image_url}`,
                        }} />
                    <ContainerTitle>
                        <TitleBanner numberOfLines={1}>{animeBanner.title}</TitleBanner>
                        <ListGenres
                            data={animeBanner?.genres}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                            numColumns={3}
                            keyExtractor={(item) => String(item.mal_id)}
                            renderItem={({ item }) => <Generos data={item} navigatePagina={() => DetalhesPagina(item)} />}
                        />
                    </ContainerTitle>
                </BannerBotao>

                <Title>Temporada atual</Title>

                <SliderLancamento
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowSeason}
                    renderItem={({ item }) => <SliderLancamentos data={item} navigatePagina={() => DetalhesPagina(item)} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />
                {/*<Title>Recomendados</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={recommendations}
                    renderItem={({ item }) => <Episodios data={item} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />
                {/*<Title>Episodios</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => <Episodios />}


                    />*/}
                <Title>Mangás</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={mangas}
                    renderItem={({ item }) => <SliderAnimes data={item} navigatePagina={() => MangasDetalhes(item)} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />

                <Title>Animes Populares</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topAnime}
                    renderItem={({ item }) => <SliderAnimes data={item} navigatePagina={() => DetalhesPagina(item)} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />


                <Title>Mangás Populares</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topManga}
                    renderItem={({ item }) => <SliderAnimes data={item} navigatePagina={() => MangasDetalhes(item)} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />


            </ScrollView>




        </Container>

    )
}