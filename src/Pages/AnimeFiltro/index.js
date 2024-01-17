import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Container, Nome, FlatGenres, Titulo } from "./styles";

import { useRoute } from "@react-navigation/native";

import api from "../../services/api";
import Filtro from "../../Components/Filtro";

export default function AnimeFiltro() {

    const route = useRoute()
    const [generos, setGeneros] = useState()

    useEffect(() => {
        async function getFiltroAnime() {
            const response = await api.get('/genres/anime')
            setGeneros(response.data.data)
            // console.log(response.data.data);
        }

        getFiltroAnime();
    }, [])


    return (
        <Container>
            <Titulo>
                <Nome>Categorias</Nome>
            </Titulo>

            <FlatGenres
                data={generos}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.mal_id)}
                renderItem={({ item }) => <Filtro data={item} />}
            />
        </Container>
    )
}