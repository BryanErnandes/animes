import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1
background: rgba(99, 40, 200, 0.8)
`;


export const Topo = styled.View`
z-index: 99;
position: absolute;
width: 100%;

`;

export const BannerBotao = styled.TouchableOpacity``;


export const ContainerTitle = styled.View`
background: rgba(0, 0, 0, 0.48)
z-index: 99;
position: absolute;
top:431px
left: 0px;
right: 0px
padding: 0px 0px 32px 0px
justify-content: center;
align-items: center;`


export const TitleBanner = styled.Text`
font-size: 36px
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
height: 543px;
width: 100%;

`;

export const SliderLancamento = styled.FlatList`
margin-right: 17px;
margin-left: 8px;
`;

export const SlideAnime = styled.FlatList`
margin-right: 17px;
margin-left: 8px
margin-bottom: 8px;
`;

SliderLancamento