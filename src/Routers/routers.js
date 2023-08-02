import React from "react";

import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import AnimesPrincipal from "../Pages/AnimesPrincipal";
import AnimesLogin from "../Pages/AnimesLogin";
import AnimesDetalhes from "../Pages/AnimesDetalhe"
//import MangasDetalhes from "../Pages/MangaDetalhes"

const Tab = createBottomTabNavigator()

function Marvel() {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={AnimesPrincipal} options={{ headerShown: false }}/>
            <Tab.Screen name="Login" component={AnimesLogin} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator()

export default function MarvelRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pag1" component={Marvel} options={{ headerShown: false }}/>
            <Stack.Screen name="Pag2" component={Marvel} options={{ headerShown: false }}/>
            <Stack.Screen name="AnimesDetalhes" component={AnimesDetalhes} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}