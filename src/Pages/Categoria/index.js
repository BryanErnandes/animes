import { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
} from 'react-native'
import api from '../../services/api'
import CategoriaAnimes from '../../Components/CategoriasAnimes';

import { Container, Nome, FlatGenres, Titulo } from "./styles";

import { useNavigation, useRoute } from '@react-navigation/native'

export default function Detalhes() {

    const route = useRoute()

    //const navigation = useNavigation()

    const [anime, setAnime] = useState([]);

    useEffect(() => {

        let isActive = true

        async function Categoria() {
            const response = await api.get(`/genres/anime`,)
            setAnime(response.data.data);
            console.log(response.data.data)
        }
        if (isActive) {

            Categoria();
        }
        return () => {
            isActive = false
        }
    }, [])

    return (
        <Container>
            <Nome>Categories</Nome>
            <FlatGenres
                data={anime}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.mal_id)}
                renderItem={({ item }) => <CategoriaAnimes data={item}/>}
            />
        </Container>
    )
}