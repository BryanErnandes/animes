import React from "react";
//import {View, Text} from 'react-native'
import { Container, Perfil , Title, Botao } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

export default function HeaderAnimes() {
    return(
    <Container>
            <Title>Animes Lista</Title>
            <Botao>
                <AntDesign name="user" size={29} color="#EB5546" />
            </Botao>
       

    </Container>
    )
}