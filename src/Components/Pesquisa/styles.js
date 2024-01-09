import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;

`;

export const BannerView = styled.TouchableOpacity`
margin-top: 5px
margin-end: 5px
margin-bottom: 10px
margin-start: 5px
`;

export const NomeStatus = styled.Text`
font-size: 15px;
font-weight: bold;
color: rgba(151, 0, 255, 0.8);
`;

export const Nome = styled.Text`
font-size: 15px;
font-weight: bold;
color: #fff;
`;
export const StatusView = styled.View`
background-color: rgba(0, 0, 0, 0.45)
border-bottom-start-radius: 8px
padding-start: 2px
z-index: 99;
position: absolute;
top:0px
left: 12px
right: 0px
`;

export const NomeView = styled.View`
background-color: rgba(0, 0, 0, 0.45)
z-index: 99;
position: absolute;
top:170px
left: 0px
right: 0px
justify-content: center;
align-items: center;
`;

export const BannerImage = styled.Image`
height: 190px;
width: 100%;
border-radius: 5px;
`;