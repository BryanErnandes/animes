import styled from 'styled-components/native'

export const Container = styled.View`
background:rgba(0, 0, 0, 0.20)
height: 70px;
flex-direction: row;
align-items: center;
justify-content: space-between
padding: 0px 10px;
margin: -4px 0px 0px 0px;


`;

export const Botao  = styled.TouchableOpacity`
background:rgba(0, 0, 0, 0.15);
height: 33px
width: 30px
border-radius: 20px;


`;


export const Title = styled.Text`
font-size: 30px;
color: #FF1B00;
font-weight: bold;

`;