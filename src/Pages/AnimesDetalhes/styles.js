import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex: 1;
background-color:#0E58AE
`;

export const Header = styled.View`
z-index: 99;
position: absolute;
top: 9px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px 14px


`;
//add
export const BotaoBanner = styled.TouchableOpacity`
width: 35px;
height: 35px;
background: rgba(rgba(143, 132, 137, 0.5));
border-radius: 23px;
justift-content: center;
align-item: center;
padding: 2px 2px;

`

export const FavBanner = styled.TouchableOpacity`
width: 35px;
height: 35px;
background: rgba(rgba(143, 132, 137, 0.5));
border-radius: 23px;
justify-content: center;
align-item: center;
padding: 5px 5px;

`

export const AssiBanner = styled.TouchableOpacity`
width: 35px;
height: 35px;
background: rgba(143, 132, 137, 0.44);
border-radius: 23px;
justify-content: center;
position: absolute;
right: 55px;
padding: 5px 5px;
`


export const Banner = styled.Image`

height: 296px;
width: 100%;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;

`
export const Title = styled.Text`
color: #fff;
font-size: 23px;
padding: 0px 7px 0px 5px;
font-weight: bold;


`;

export const Titulo = styled.View`
display: flex;
flex-direction: row;
position: relative;
top: 5px;
padding: 3px 5px 7px 10px;

`;

export const Body = styled.View`

display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0px 14px 0px 14px;
`;

export const Notas = styled.Text`
font-size: 18px;
font-weight: bold;
color: #fff;
font-size: 20px;
margin: 0px 2px 0px 0px;

`;

export const Populidade = styled.Text`
font-size: 18px;
font-weight: bold;
color: #fff;

`;

export const ListaGeneros = styled.FlatList`
padding: 0px 9px 0px 5px;
margin: 8px 10px;
max-height: 35px;
min-height: 35px;
`;

export const Descricao = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;
padding: 0px 19px ;
margin-bottom: 10px;

`; 