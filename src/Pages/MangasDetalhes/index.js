import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


import { Container, Topo, Botao, ContainerBanner, ImageBackground, Note, Nota, Nota1, Rank, Rank2, Popularity, Popularity3, Members, Members4, Favorites, Favorites5, TitleView, Title, ListGenre, CharacterContainer, BotaoChar, BotaoVol, CharactersTitle, CharacterView, CharactersView, BannerView, CharactersBanner, CharactersName, VolumeContainer, VolumeTitle, VolumeView, BannerVolume, VolumeBanner, Descricao, Sinopse } from "./styles";

import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


import Entypo from 'react-native-vector-icons/Entypo';
import HeaderAnimes from '../../Components/HeaderAnimes'
import { getListAnimes } from "../../Utils/animes";
import api from "../../services/api";
import MangaDetails from "../../Components/MangaDetails";
import Information from "../../Components/information";


export default function MangasDetalhes() {

    const navigation = useNavigation();
    const route = useRoute();


    const [modalVisible, setModalVisible] = useState(false);

    const [manga, setManga] = useState({});
    const [banner, setBanner] = useState({
        mal_id: '',
        title: '',
        images: { jpg: { image_url: '' } }
    });
    const [characters, setCharacters] = useState([]);
    const [picture, setPicture] = useState([])

    useEffect(() => {
        let isActive = true

        async function loadManga() {

            const manga = await api.get(`/manga/${route.params?.mal_id}`,)
                .catch((err) => {
                    console.log(err)
                })

            const character1 = await api.get(`/manga/${route.params?.mal_id}/characters`,)
                .catch((err) => {
                    console.log(err)
                })

            const pictures = await api.get(`/manga/${route.params?.mal_id}/pictures`)
                .catch((err) => {
                    console.log(err)
                })

            if (isActive) {

                setManga(manga.data.data)
                setBanner(manga.data.data)
                setCharacters(character1.data.data);
                setPicture(pictures.data.data)
                console.log(manga.data)
            }
        }

        if (isActive) {
            loadManga();
        }
        return () => {
            isActive = false
        }
    }, [])

    {/*function PersonagensManga(item) {

        navigation.navigate("PersonagensMangas", { mal_id: item.mal_id })
        console.log(item.mal_id)
    }

    function Personagem(item) {

        navigation.navigate("Personagem", { mal_id: item.mal_id })
        console.log(item.mal_id)
    }*/}

    return (
        <Container>
            <ScrollView>
                <Topo>
                    <HeaderAnimes title='Detalhes Manga' />
                    <Botao activeOpacity={0.70}>
                        <Entypo name="heart-outlined" size={39} color="#EB5546" />
                    </Botao>
                </Topo>
                <ContainerBanner>
                    <ImageBackground
                        resizeMode="stretch"
                        source={{
                            uri: `${banner.images.jpg.image_url}`,
                        }} />
                    <Note>
                        <Nota>Rank</Nota>
                        <Nota1>{manga.score}</Nota1>
                        <Rank>Popularity</Rank>
                        <Rank2>{manga.rank}</Rank2>
                        <Popularity>Popularity</Popularity>
                        <Popularity3>{manga.popularity}</Popularity3>
                        <Members>Members</Members>
                        <Members4>{manga.members}</Members4>
                        <Favorites>Favorites</Favorites>
                        <Favorites5>{manga.favorites}</Favorites5>
                    </Note>
                </ContainerBanner>
                <TitleView style={styles.shadow}>
                    <Title>{manga.title}</Title>
                    <ListGenre
                        data={manga?.genres}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        numColumns={3}
                        keyExtractor={(item) => String(item.mal_id)}
                        renderItem={({ item }) => <MangaDetails data={item} />} />
                </TitleView>

                <CharacterContainer >
                        <CharactersTitle>Personagens</CharactersTitle>
                    <CharacterView>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {characters?.map((character, index) => {

                                const { images, name, mal_id } = character.character
                                return <CharactersView style={styles.shadow} to={`/character/${mal_id}`} key={index}>
                                    <BannerView>
                                        <BotaoChar activeOpacity={0.70} onPress={() => navigation.navigate('Personagem', `${character.mal_id}`)}>
                                            <CharactersBanner
                                                resizeMode="cover"
                                                src={images?.jpg.image_url} />
                                            <View>
                                                <CharactersName>{name}</CharactersName>
                                            </View>
                                        </BotaoChar>
                                    </BannerView>
                                </CharactersView>
                            })}
                        </ScrollView>
                    </CharacterView>
                </CharacterContainer>

                <VolumeContainer >
                    <VolumeTitle>Fotos</VolumeTitle>

                    <VolumeView >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {picture.map(pictures => (
                                <BannerVolume style={styles.episodeShadow} key={pictures.mal_id}>
                                    <VolumeBanner
                                        resizeMode="stretch"
                                        src={pictures.jpg.image_url} />

                                </BannerVolume>
                            ))}
                        </ScrollView>

                    </VolumeView>
                </VolumeContainer>

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
                                <Text style={styles.modalText}>Tipo: {manga.type}</Text>
                                <Text style={styles.modalText}>Capitulos: {manga.chapters}</Text>
                                <Text style={styles.modalText}>Volumes: {manga.volumes}</Text>
                                <Text style={styles.modalText}>Status: {manga.status}</Text>
                                <View style={styles.flatList}>
                                    <Text style={styles.modalText}>Serializações: </Text>
                                    <FlatList
                                        data={manga?.serializations}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.modalText}>Autor: </Text>
                                    <FlatList
                                        data={manga?.authors}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.modalText}>Gêneros Explícitos: </Text>
                                    <FlatList
                                        data={manga?.explicit_genres}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.modalText}>Temas: </Text>
                                    <FlatList
                                        data={manga?.themes}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => String(item.mal_id)}
                                        renderItem={({ item }) => <Information data={item} />} />
                                </View>
                                <View style={styles.flatList}>
                                    <Text style={styles.modalText}>Demografia: </Text>
                                    <FlatList
                                        data={manga?.demographics}
                                        showsVerticalScrollIndicator={false}
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
                    <Sinopse>{manga.synopsis}</Sinopse>
                </Descricao>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    flatListText: {
        color: "#fff",
        fontSize: 21,
        fontWeight: 'bold',
        marginEnd: 10,
        marginStart: 21
    },

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
})