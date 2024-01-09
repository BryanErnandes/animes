import React from "react";

import { Container, BannerView, StatusView, NomeStatus, NomeView, Nome, BannerImage } from "./styles";



export default function AnimeList({ data, navigatePagina }) {

    return (
        <Container>
            <BannerView activeOpacity={0.9} onPress={() => navigatePagina()}>
                <BannerImage
                    resizeMode="stretch"
                    src={data.images.jpg.image_url}
                />
                <StatusView>
                    <NomeStatus >{data.status}</NomeStatus>
                </StatusView>
                <NomeView>
                    <Nome numberOfLines={1}>{data.title}</Nome>
                </NomeView>
                
            </BannerView>
        </Container>
    )
}
