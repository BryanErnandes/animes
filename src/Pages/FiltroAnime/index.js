import { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
} from 'react-native'
import api from '../../services/api'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Detalhes() {

    const route = useRoute()

    const navigation = useNavigation()

    const [anime, setAnime] = useState({});

    useEffect(() => {

        let isActive = true

        async function getAnimeFiltro() {
            const response = await api.get(`/anime/${route.params?.mal_id}`,)
                .catch((err) => {
                    console.log(err)
                })
                
                if (isActive) {
                    setAnime(response.data.data);
                    console.log(response.data)
                }
        }
        if (isActive) {

            getAnimeFiltro();
        }
        return () => {
            isActive = false
        }
    }, [])

    return (
        <SafeAreaView>
            <Text>dsadsadas</Text>
        </SafeAreaView>
    )
}