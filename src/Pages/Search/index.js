import { useEffect, useState } from "react";

import api from '../../services/api'
import AnimeList from '../../Components/Pesquisa/animeList'
//import { View, Text, Image } from "react-native"
import { useRoute } from "@react-navigation/native";

import { Container, Titulo, FlatPesquisa } from "./styles"

export default function Search() {

    //const navigation = useNavigation();
    const route = useRoute();
    const [animes, setAnimes] = useState([])

    useEffect(() => {

        async function getSeachAnime() {
            const response = await api.get(`/anime?q=${route.params?.name}`)
            setAnimes(response.data.data)
            //console.log(response.data);
        }

        getSeachAnime();

    }, [route.params?.name])


    return (
        <Container>
            <FlatPesquisa
                data={animes}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.mal_id)}
                renderItem={({ item }) => <AnimeList data={item}/>}
            />
        </Container>
    )
}