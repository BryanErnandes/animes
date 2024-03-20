import React, { useEffect, useState } from "react";

import { Container, PerfilView, ImagePerfil, ImageView, PerfilImage, ViewText, TextPerfil, AnimesContaine, AnimeView, AnimesView, AnimesText, MangasContaine, MangaView, MangaText, Botao, ContainerFavoritos, ImageBackground, FavoritosText, Title } from "./Style"
import { ScrollView, View, StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Favoritos from '../../Components/Favoritos'
import { getFavoritosAnimes, deleteAnime } from "../../Utils/estoqueAnime";
import { getFavoritosManga, deleteManga } from "../../Utils/estoqueManga";

import { useNavigation, useIsFocused } from "@react-navigation/native"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";


export default function AnimesLogin() {

    const [anime, setAnime] = useState([])
    const [mangas, setMangas] = useState([])

    const navigation = useNavigation();
    const isFocused = useIsFocused()

    useEffect(() => {
        let isActive = true;

        async function getFavoritos() {
            const resultado = await getFavoritosAnimes('@favoritoAnime')

            if (isActive) {
                setAnime(resultado);
                console.log(resultado)
            }
        }

        async function getMangasFavoritos() {
            const result = await getFavoritosManga('@favoritoManga')

            if (isActive) {
                setMangas(result);
                console.log(result)
            }
        }

        if (isActive) {
            getFavoritos();
            getMangasFavoritos();
        }

        return () => {
            isActive = false
        }
    }, [isFocused])

    async function hanledDelete(mal_id) {
        const resultado = await deleteAnime(mal_id);
        setAnime(resultado);
    }


    {/*function navigateDetalhesPag(item) {
        navigation.navigate('AnimesDetalhes', { mal_id: item.mal_id })
    }*/}

    async function hanledDelete2(mal_id) {
        const result = await deleteManga(mal_id);
        setMangas(result);
    }


    {/*function navigateDetalhesPags(item) {
        navigation.navigate('MangasDetalhes', { mal_id: item.mal_id })
    }*/}


    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PerfilView>
                    <ImagePerfil
                        resizeMode="cover"
                        source={{
                            uri: "https://t.ctcdn.com.br/3L7e0dfUxiKO8zUJcip-8fqcEJk=/1200x675/smart/i521738.jpeg"
                        }} />
                    <ImageView>
                        <PerfilImage
                            resizeMode="cover"
                            source={{
                                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            }} />
                        <TextPerfil>
                            name
                        </TextPerfil>
                    </ImageView>
                </PerfilView>

                <AnimesContaine>
                    <AnimesText>
                        Animes Favorites
                    </AnimesText>

                    {anime.length === 0 && (
                        <Title>You don't have any favorite anime</Title>
                    )}

                    <AnimeView>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {anime.map(animes => (
                                <AnimesView style={styles.shadow} key={animes.mal_id}>
                                    <Botao activeOpacity={0.8} onPress={() => hanledDelete(animes.mal_id)}>
                                        <Ionicons name="trash-bin" size={21} color='#fff' />
                                    </Botao>
                                    <ContainerFavoritos activeOpacity={0.9}>
                                        <ImageBackground
                                            resizeMode="cover"
                                            source={{
                                                uri: `${animes.images.jpg.image_url}`,
                                            }} />
                                        <FavoritosText>
                                            <Title numberOfLines={1}>{animes.title}</Title>
                                        </FavoritosText>
                                    </ContainerFavoritos>
                                </AnimesView>

                            ))}
                        </ScrollView>
                    </AnimeView>

                    <MangasContaine>
                        <AnimesText>
                            Mangá Favorites
                        </AnimesText>

                        {mangas.length === 0 && (
                            <Title>You don't have any favorite mangás</Title>
                        )}

                        <AnimeView>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {mangas.map(manga => (
                                    <AnimesView style={styles.shadow} key={manga.mal_id}>
                                        <Botao activeOpacity={0.8} onPress={() => hanledDelete2(manga.mal_id)}>
                                            <Ionicons name="trash-bin" size={21} color='#fff' />
                                        </Botao>
                                        <ContainerFavoritos activeOpacity={0.9} >
                                            <ImageBackground
                                                resizeMode="cover"
                                                source={{
                                                    uri: `${manga.images.jpg.image_url}`,
                                                }} />

                                            <FavoritosText>
                                                <Title numberOfLines={1}>{manga.title}</Title>
                                            </FavoritosText>
                                        </ContainerFavoritos>
                                    </AnimesView>

                                ))}
                            </ScrollView>
                        </AnimeView>
                    </MangasContaine>

                </AnimesContaine>

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
});
