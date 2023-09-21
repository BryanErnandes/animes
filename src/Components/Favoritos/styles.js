import styled from "styled-components/native";

export const Container = styled.View`
flex: 1
`;

export const Botao = styled.TouchableOpacity`
width: 30px;
height: 32px;
z-index: 99;
position: absolute;
top: 10px;
left: 120px;
padding: 5px 5px;
background: rgba(5, 10, 1, 0.60);
border-radius: 10px;
`;

export const ContainerFavoritos = styled.TouchableOpacity`
margin-top: 5px;
padding: 0px 5px;
height: 240px;
width: 160px;
`;

export const ImageBackground = styled.Image`
height: 200px;
width: 100%;
`;

export const FavoritosText = styled.View`
`;

export const Title = styled.Text`
color: #fff;
font-size: 15px;
font-weight: bold;`;