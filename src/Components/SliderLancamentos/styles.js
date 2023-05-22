import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
padding: 0px 5px;
height: 135px;
width: 118px;

`;

export const Banner = styled.Image`
height: 114px;
width: 100%;
border-radius: 80px;

`;

export const ContainerTitle = styled.View`
background: rgba(0, 0, 0, 0.24)
border-bottom-right-radius: 49px;
border-bottom-left-radius: 49px;
z-index: 99;
position: absolute;
top:69px
left: 7px
right: 7px
padding: 0px 0px 20px 0px
justify-content: center;
align-items: center;`;


export const Title = styled.Text`
font-size: 17px;
font-weight: bold;
color: #fff`;