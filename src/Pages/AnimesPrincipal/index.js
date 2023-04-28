import { useState, useEffect } from "react";

import { ScrollView, Text } from "react-native";

import { Container, Topo, BannerBotao, Title, TitleBanner, ContainerTitle, Banner, SliderLancamento, SlideAnime } from "./style"

import api from "../../services/api"
import { getListAnimes, randomBanner } from '../../Utils/animes'

import HeaderAnimes from "../../Components/HeaderAnimes";
import SliderLancamentos from "../../Components/SliderLancamentos";
import SliderAnimes from "../../Components/SliderAnimes";
import Episodios from "../../Components/Episodios"


export default function AnimesPrincipal() {

    const [nowSeason, setNowSeason] = useState([])
    // [episodes, setEpisodes] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [mangas, setMangas] = useState([])
    const [topAnime, setTopAnime] = useState([])
    const [topManga, setTopManga] = useState([])

    const [animeBanner, setAnimeBanner] = useState({})


    useEffect(() => {
        let isActive = true

        async function getAnimes() {
            //const response = await api.get('/seasons/now')

            const [nowSeason, recommendations, mangas, topAnime, topManga] = await Promise.all([
                api.get('/seasons/now'),

                api.get('recommendations/anime'),

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
                const listManga = getListAnimes(10, mangas.data.data)
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
    }, [])
    return (
        <Container>


            <Topo>
                <HeaderAnimes />
            </Topo>

            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerBotao activeOpacity={0.9} onPress={() => alert("teste")}>

                    <ContainerTitle>
                        <TitleBanner>{animeBanner.title}</TitleBanner>
                    </ContainerTitle>
                    <Banner
                        resizeMode="stretch"
                        source={{
                            uri: 'https://anime.atsit.in/wp-content/uploads/2023/04/autor-de-oshi-no-ko-lanca-conto-que-inspirou-a-musica-de-abertura-do-anime.jpg',
                        }} />
                </BannerBotao>

                <Title>Temporada {nowSeason.season}</Title>

                <SliderLancamento
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowSeason}
                    renderItem={({ item }) => <SliderLancamentos data={item} />}
                    keyExtractor={(item) => String(item.mal_id)}
                />
                <Title>Recomendados</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowSeason}
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
                <Title>Mangas</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={mangas}
                    renderItem={({ item }) => <SliderAnimes data={item}
                        keyExtractor={(item) => String(item.mal_id)}
                    />}


                />

                <Title>Animes Populares</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topAnime}
                    renderItem={({ item }) => <SliderAnimes data={item}
                        keyExtractor={(item) => String(item.mal_id)}
                    />}


                />


                <Title>Mangas Populares</Title>

                <SlideAnime
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topManga}
                    renderItem={({ item }) => <SliderAnimes data={item}
                        keyExtractor={(item) => String(item.mal_id)}
                    />}


                />


            </ScrollView>




        </Container>

    )
}