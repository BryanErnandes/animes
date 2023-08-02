import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


//import { ScrollView, ActivityIndicator, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Container, ContainerBanner, Topo, ImageBackground, Titulo, Title, ListGenre, Characters, CharactersBanner, Descricao, Note, Nota, Sinopse, Popularity, Members, Favorites, Rank, Nota1, Rank2, Popularity3, Members4, Favorites5, Theme, ThemeText, ThemeTitle } from "./styles";
import { Modal, Pressable, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import HeaderAnimes from "../../Components/HeaderAnimes";
import DetailsGenres from "../../Components/DetailGenre/Index";
import Demografia from "../../Components/Demografia";
import Temas from "../../Components/Temas";
import Estudio from "../../Components/Estudio"
import OpenMusic from "../../Components/OpenMusic"
import api from '../../services/api';


export default function AnimesDetalhes() {


    const navigation = useNavigation();
    const route = useRoute();

    const [banner, setBanner] = useState({
        mal_id: "",
        title: "",
        images: { jpg: { image_url: "" } }
    });

    const [character, SetCharacter] = useState({});

    const [anime, setAnime] = useState({});
    const [theme, setTheme] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {

        let isActive = true


        async function loadAnime() {

            const anime = await api.get(`/anime/${route.params?.mal_id}`,)
                .catch((err) => {
                    console.log(err)
                })

            const theme = await api.get(`/anime/${route.params?.mal_id}/themes`,)
                .catch((err) => {
                    console.log(err)
                })

            const character = await api.get(`/anime/${route.params?.mal_id}/characters`,)
                .catch((err) => {
                    console.log(err)
                })


            if (isActive) {
                setAnime(anime.data.data);
                setBanner(anime.data.data);
                setTheme(theme.data.data);
                SetCharacter(character.data.data);
                console.log(character.data)
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
            <ScrollView>
                <Topo>
                    <HeaderAnimes />
                </Topo>
                <ContainerBanner>
                    <ImageBackground
                        resizeMode="cover"
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
                <Titulo>
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

               {/*<Characters>
                    <CharactersBanner 
                     resizeMode="cover"
                     source={{
                         uri: `${characters.images.jpg.image_url}`,
                     }} />

                    </Characters>*/}
                    <Nota>
                        fdfd{character.name}
                    </Nota>

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
                                <Text style={styles.type}>Type: {anime.type}</Text>
                                <Text style={styles.episodios}>Episodes: {anime.episodes}</Text>
                                <Text style={styles.duracao}>Duration: {anime.duration}</Text>
                                <Text style={styles.Estreia}>Broadcast: {anime.season} {anime.year}</Text>
                                <Text style={styles.modalText}>Status: {anime.status}</Text>
                                <Text style={styles.rating}>Rating: {anime.rating}</Text>
                                <Text style={styles.Fonte}>Source: {anime.source}</Text>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Studios:</Text>
                                    <FlatList
                                        data={anime?.studios}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Estudio data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Demographic:</Text>
                                    <FlatList
                                        data={anime?.demographics}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Demografia data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.flatListText}>Themes:</Text>
                                    <FlatList
                                        data={anime?.themes}
                                        showsVerticalScrollIndicator={false}
                                        horizontal={false}
                                        numColumns={3}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Temas data={item} />} />
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
                        <Text style={styles.textStyle}>More information</Text>
                    </Pressable>
                </View>

                <Descricao>
                    <Sinopse>
                        {anime.synopsis}
                    </Sinopse>
                </Descricao>

                <Theme>
                    <ThemeTitle>Openings:</ThemeTitle>
                    <ThemeText>{theme.openings}</ThemeText>

                    <ThemeTitle>Endings:</ThemeTitle>
                    <ThemeText>{theme.endings}</ThemeText>

                </Theme>


            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
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
        marginEnd: 153,
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
        marginTop: 5,
        marginEnd: 10,
        marginStart: 5,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    rating: {
        marginTop: 5,
        marginEnd: 5,
        marginStart: 15,
        marginBottom: 5,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 21,
    },
    Fonte: {
        marginTop: 5,
        marginEnd: 84,
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
