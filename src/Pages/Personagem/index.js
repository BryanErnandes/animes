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

    const [character, setCharacter] = useState({});

    useEffect(() => {

        let isActive = true

        async function loadCharacters() {
            const characters = await api.get(`/characters/${route.params?.mal_id}/full`,)
                .catch((err) => {
                    console.log(err)
                })
                
                if (isActive) {
                    setCharacter(characters.data.data);
                    console.log(characters.data)
                }
        }
        if (isActive) {

            loadCharacters();
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