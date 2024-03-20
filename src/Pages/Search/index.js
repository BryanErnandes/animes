import { useEffect, useState } from "react";

import api from '../../services/api'
import Pesquisa from "../../Components/Pesquisa"

//import { View, Text, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Titulo, FlatPesquisa } from "./styles"

export default function Search() {

    //const navigation = useNavigation();
    const route = useRoute();
    const [animes, setAnimes] = useState([])
    const navigation = useNavigation();

    useEffect(() => {

        async function getSeachAnime() {
            const response = await api.get(`/anime?q=${route.params?.name}`)
            setAnimes(response.data.data)
            //console.log(response.data);
        }

        getSeachAnime();

    }, [route.params?.name])

            function navigateDetalhes(item) {navigation.navigate("AnimesDetalhes", {mal_id: item.mal_id})}


    return (
        <Container>
            <FlatPesquisa
                data={animes}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.mal_id)}
                renderItem={({ item }) => <Pesquisa data={item} navigatePagina={ () => navigateDetalhes(item)}/>}
            />
        </Container>
    )
}