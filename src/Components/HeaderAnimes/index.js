import React from "react";
//import {View, Text} from 'react-native'
import { Container, Perfil , Title, Botao } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

export default function HeaderAnimes({title}) {
    return(
    <Container>
            <Title>{title}</Title>
       

    </Container>
    )
}