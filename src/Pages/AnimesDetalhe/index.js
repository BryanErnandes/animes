import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getListAnimes } from "../../Utils/animes";


//import { ScrollView, ActivityIndicator, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Container, ContainerBanner, Topo, Botao, ImageBackground, Titulo, Title, ListGenre, CharacterContainer, CharactersTitle, CharacterView, CharactersView, BannerView, CharactersBanner, CharactersName, EpisodeContainer, EpisodesTitle, EpisodesView, BannerEpisode, EpisodeBanner, EpisodeNum, EpisodeName, Descricao, Note, Nota, Sinopse, Popularity, Members, Favorites, Rank, Nota1, Rank2, Popularity3, Members4, Favorites5, Theme, ThemeView, ThemeText, ThemeTitle } from "./styles";
import { Modal, Pressable, ScrollView, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import HeaderAnimes from "../../Components/HeaderAnimes";
import DetailsGenres from "../../Components/DetailGenre/Index";
import Information from "../../Components/information"
//import OpenMusic from "../../Components/OpenMusic"
import api from '../../services/api';

import { animesFavoritosSalvo, hasFavoritoAnime, deleteAnime, } from '../../Utils/estoqueAnime'


export default function AnimesDetalhes() {


    const navigation = useNavigation();
    const route = useRoute();

    const [banner, setBanner] = useState({
        mal_id: "",
        title: "",
        images: { jpg: { image_url: "" } }
    });

    const [video, setVideo] = useState([])

    const [characters, SetCharacters] = useState([]);
    //const [episodes, setEpisodes] = useState([])
    const [anime, setAnime] = useState({});
    const [theme, setTheme] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [favoritosAnimes, setFavoritosAnimes] = useState(false);

    useEffect(() => {

        let isActive = true


        async function loadAnime() {

            const anime1 = await api.get(`/anime/${route.params?.mal_id}`,)
                .catch((err) => {
                    console.log(err)
                })

            const theme1 = await api.get(`/anime/${route.params?.mal_id}/themes`,)
                .catch((err) => {
                    console.log(err)
                })

            const character1 = await api.get(`/anime/${route.params?.mal_id}/characters`,)
                .catch((err) => {
                    console.log(err)
                })

            const video1 = await api.get(`/anime/${route.params?.mal_id}/videos/episodes`,)
                .catch((err) => {
                    console.log(err)
                })


            if (isActive) {
                // const listCharacter = getListAnimes(8, character1.data.data)


                setAnime(anime1.data.data);
                setBanner(anime1.data.data);
                setTheme(theme1.data.data);
                setVideo(video1.data.data);
                SetCharacters(character1.data.data);
                console.log(anime1.data)

                const isFavorito = await hasFavoritoAnime(anime1.data.data)
                setFavoritosAnimes(isFavorito)


            }

        }

        if (isActive) {

            loadAnime();
        }
        return () => {
            isActive = false
        }
    }, [])

    async function animesFavoritos(anime) {

        if (favoritosAnimes) {
            await deleteAnime(anime.mal_id);
            setFavoritosAnimes(false);
            //alert('anime removido');

        }
        else {
            animesFavoritosSalvo('@favoritoAnime', anime)
            setFavoritosAnimes(true);

        }
    }

    return (

        <Container>
            <ScrollView>
                <Topo>
                    <HeaderAnimes title="Detalhes Anime" />
                    <Botao activeOpacity={0.8} onPress={() => animesFavoritos(anime)}>
                        {favoritosAnimes ? (
                            <Entypo name="heart" size={39} color='#FA3800' />
                        ) : (
                            <Entypo name="heart-outlined" size={39} color='#FA3800' />
                        )}
                    </Botao>
                </Topo>
                <ContainerBanner>
                    <ImageBackground
                        resizeMode="stretch"
                        source={{
                            uri: `${banner.images.jpg.image_url}`,
                        }} />

                    <Note>
                        <Nota>Score</Nota>
                        <Nota1>{anime.score}</Nota1>
                        <Rank>Rank</Rank>
                        <Rank2>{anime.rank} </Rank2>
                        <Popularity>Popularity</Popularity>
                        <Popularity3>{anime.popularity}</Popularity3>
                        <Members>Members</Members>
                        <Members4>{anime.members}</Members4>
                        <Favorites>Favorites</Favorites>
                        <Favorites5>{anime.favorites}</Favorites5>
                    </Note>
                </ContainerBanner>
                <Titulo  style={styles.shadow}>
                    <Title numberOfLines={2}>{anime.title}</Title>
                    <ListGenre
                        data={anime?.genres}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        numColumns={4}
                        keyExtractor={(item) => String(item.mal_id)}
                        renderItem={({ item }) => <DetailsGenres data={item} />}
                    />
                </Titulo>
                <CharacterContainer >
                    <CharactersTitle>Personagens</CharactersTitle>
                    <CharacterView>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {characters?.map((character, index) => {
                                const { images, name, voice_actors, mal_id } = character.character
                                return <CharactersView style={styles.shadow} to={`/character/${mal_id}`} key={index}>
                                    <BannerView>
                                        <CharactersBanner
                                            resizeMode="cover"
                                            src={images?.jpg.image_url} />
                                        <View>
                                            <CharactersName>{name}</CharactersName>
                                        </View>

                                    </BannerView>
                                </CharactersView>
                            })}
                        </ScrollView>
                    </CharacterView>
                </CharacterContainer>

                <EpisodeContainer >
                    <EpisodesTitle>Episodios</EpisodesTitle>
                    <EpisodesView >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {video.map(videos => (
                                <BannerEpisode style={styles.episodeShadow} key={videos.mal_id}>
                                    <EpisodeBanner
                                        resizeMode="stretch"
                                        src={videos.images.jpg.image_url} />
                                    <View>
                                        <EpisodeName numberOfLines={1}>{videos.title}</EpisodeName>
                                        <EpisodeNum>{videos.episode}</EpisodeNum>
                                    </View>

                                </BannerEpisode>
                            ))}
                        </ScrollView>

                    </EpisodesView>
                </EpisodeContainer>


                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Tipo: {anime.type}</Text>
                                <Text style={styles.modalText}>Episodios: {anime.episodes}</Text>
                                <Text style={styles.modalText}>Duração: {anime.duration}</Text>
                                <Text style={styles.modalText}>Transmissão: {anime.season} {anime.year}</Text>
                                <Text style={styles.modalText}>Status: {anime.status}</Text>
                                <Text style={styles.modalText}>Avaliação: {anime.rating}</Text>
                                <Text style={styles.modalText}>Fonte: {anime.source}</Text>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Estudio:</Text>
                                    <FlatList
                                        data={anime?.studios}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Demografia:</Text>
                                    <FlatList
                                        data={anime?.demographics}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Temas:</Text>
                                    <FlatList
                                        data={anime?.themes}
                                        showsVerticalScrollIndicator={false}
                                        horizontal={false}
                                        numColumns={3}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.textStyle}>Mais Informações</Text>
                    </Pressable>
                </View>

                <Descricao>
                    <Sinopse>
                        {anime.synopsis}
                    </Sinopse>
                </Descricao>

                <Theme>
                    <ThemeView style={styles.ThemeShadow}>
                        <ThemeTitle>Openings:</ThemeTitle>
                        <ThemeText>{theme.openings}</ThemeText>

                        <ThemeTitle>Endings:</ThemeTitle>
                        <ThemeText>{theme.endings}</ThemeText>
                    </ThemeView>


                </Theme>


            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 6,
    },
    episodeShadow: {
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 9,
    },
    ThemeShadow: {
        shadowColor: "rgba(0, 0, 0, 1)",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 6,
    },
    centeredView: {
        flex: 1,
        marginEnd: 10,
        marginStart: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.93)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    button: {
        marginTop: 8,
        marginEnd: 80,
        marginStart: 80,
        borderRadius: 19,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.19)'

    },
    buttonClose: {
        backgroundColor: '#2196F3',
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.43)'
    },
    textStyle: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    flatList: {
        flexDirection: 'row',

    },
    flatListText: {
        color: "#fff",
        fontSize: 21,
        fontWeight: 'bold',
        marginEnd: 10,
        marginStart: 21
    },
    ViewText: {
    },
    type: {
        marginTop: 5,
        marginEnd: 160,
        marginStart: 0,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    demografia: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    episodios: {
        marginTop: 5,
        marginEnd: 109,
        marginStart: 0,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    duracao: {
        marginTop: 5,
        marginEnd: 15,
        marginStart: 0,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    Estreia: {
        marginTop: 5,
        marginEnd: 40,
        marginStart: 0,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    rating: {
        marginTop: 5,
        marginEnd: 45,
        marginStart: 15,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    Fonte: {
        marginTop: 5,
        marginEnd: 94,
        marginStart: 0,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    openButton: {
        marginEnd: 90,
        marginStart: 90,
    }
});
