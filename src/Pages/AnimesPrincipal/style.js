import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1
background-color: rgba(0, 0, 0, 0.83)
`;


export const Topo = styled.View`
background-color: rgba(0, 0, 0, 0.83)
flex-direction: row;
align-items: center;
justify-content: space-between
padding: 0px 10px;
margin: -4px 0px 0px 0px;

`;

export const Botao = styled.View`
background-color: rgba(0, 0, 0, 0.83)
flex-direction: row;
align-items: center;
justify-content: space-between

`;
export const BannerBotao = styled.TouchableOpacity`

`;

export const ContainerBanner = styled.View`
height: 509px
`

export const ContainerTitle = styled.View`
background: rgba(0, 0, 0, 0.48)
z-index: 99;
position: absolute;
top:455px
left: 0px
right: 0px
justify-content: center;
align-items: center;
`


export const TitleBanner = styled.Text`
font-size: 19px
font-weight: bold;
padding: 0px 5px 0px 5px
color: #fff;
`

export const ListGenres = styled.FlatList`
font-size: 23px;
color: #fff`; 

export const Title = styled.Text`
font-size: 29px;
font-weight: bold;
padding: 3px;
position: relative;
left: 5px;
color: #fff`;

export const Banner = styled.Image`
height: 505px;
width: 100%;

`;

export const SliderLancamento = styled.FlatList`
margin-right: 6px;
margin-left: 6px;
`;

export const SlideAnime = styled.FlatList`
margin-right: 6px;
margin-left: 6px
margin-bottom: 8px;
`;
