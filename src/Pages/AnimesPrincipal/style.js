import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1
background: rgba(0, 0, 0, 0.83)

`;


export const Topo = styled.View`
z-index: 99;
position: absolute;
width: 100%;

`;

export const BannerBotao = styled.TouchableOpacity``;

export const Title = styled.Text`
font-size: 22px;
font-weight: bold;
padding: 10px;
position: relative;
left: 5px;
color: #fff`;

export const Banner = styled.Image`
height: 500px;
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