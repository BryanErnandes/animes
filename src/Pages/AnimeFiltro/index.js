import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import api from "../../services/api";

export default function AnimeFiltro() {

    const route = useRoute()
    //const [genres, setGenres] = useState()

    useEffect(() => {
        async function getFiltroAnime() {
            const response = await api.get('/genres/anime')
        }

        console.log(response.data.data);

        getFiltroAnime();
    }, [])


    return (
        <View>
            <Text>
                generos
            </Text>
        </View>
    )
}