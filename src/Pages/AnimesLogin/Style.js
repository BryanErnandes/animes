import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.83)
`;

export const PerfilView = styled.View`
`;

export const ImagePerfil = styled.Image`
height: 180px
width: 100%`;

export const ImageView = styled.View`
background-color: #fff;
width: 25%
flex-direction: row;
z-index: 99;
position: absolute;
top:132px
left: 5px
right: 0px
padding-top: 1px;
padding-end: 1px;
padding-bottom: 1px;
padding-start: 1px;
border-radius: 40px;
`;

export const PerfilImage = styled.Image`
height: 95px
width: 100%
border-radius: 80px;
`;


export const ViewText = styled.View``;

export const TextPerfil = styled.Text`
margin-top: 50px;
margin-start: 5px;
color: #fff;
font-size: 20px
font-weight: bold`;

export const AnimesView = styled.View`
margin-top: 60px
margin-end: 5px;
margin-start: 5px
`;

export const AnimesText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 28px`;

export const AnimesList = styled.FlatList`
`;

export const MangaView = styled.View`
margin-top: 5px
margin-end: 5px;
margin-start: 5px
`;

export const MangaText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 28px`;

export const MangaList = styled.FlatList`
`;
