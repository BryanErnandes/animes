import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1
background-color: rgba(0, 0, 0, 1)
`;


export const Topo = styled.View`
background-color: rgba(0, 0, 0, 1)
flex-direction: row;
align-items: center;
justify-content: center
margin-top: 1px;
margin-bottom: 0px

`;

export const Botao = styled.TouchableOpacity`
width: 20%;
height: 45px;
padding-top: 3px;
padding-left: 10px;
background-color: #332F2E;
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;

`;

export const Seach = styled.View`
flex-direction: row;
height: 40px;
width: 100%;
align-Items: center;
padding: 0px 16px;
margin-top: 0px;
margin-bottom: 15px;
;

`;

export const Input = styled.TextInput`
background-color: #332F2E;
height: 45px;
width: 80%;
padding: 10px 14px;
color: "#fff";
font-size: 19px;
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
;

`;
export const BannerBotao = styled.TouchableOpacity`

`;

export const ContainerBanner = styled.View`
height: 456px
`

export const ContainerTitle = styled.View`
background: rgba(0, 0, 0, 0.48)
z-index: 99;
position: absolute;
top:410px
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
height: 459px;
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
