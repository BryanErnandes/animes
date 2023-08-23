import React from "react";

import { Container, PerfilView, ImagePerfil, ImageView, PerfilImage, ViewText, TextPerfil, AnimesView, AnimesText, AnimesList, MangaView, MangaText, MangaList } from "./Style"
import { ScrollView } from "react-native"

import Favoritos from '../../Components/Favoritos'


export default function AnimesLogin() {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PerfilView>
                <ImagePerfil
                    resizeMode="cover"
                    source={{
                        uri: "https://static3.mangalivre.net/capas/5sW1GXOQtueQ7L6LYcAOkg/9712/62e6b4752d774_external_cover.jpg"
                    }} />
                <ImageView>
                    <PerfilImage
                        resizeMode="cover"
                        source={{
                            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        }} />
                    <TextPerfil>
                        nome
                    </TextPerfil>
                </ImageView>
            </PerfilView>

            <   AnimesView>
                <AnimesText>
                    Animes Favoritos
                </AnimesText>
                <AnimesList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={() => <Favoritos />} />

            </AnimesView>

            <MangaView>
                <MangaText>
                    Mangas Favoritos
                </MangaText>
                <MangaList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={() => <Favoritos />} />

            </MangaView>

            </ScrollView>
            
        </Container>
    )
}