import React from "react";
//import { View, Text } from "react-native";

import { BannerEpisode, EpisodeBanner, EpisodeContainer, EpisodesTitle, EpisodeName, EpisodeNum, EpisodesView } from "./style";
import { StyleSheet, View } from "react-native";

export default function Catalogo({ data }) {
    return (
        <EpisodeContainer >
            <EpisodesTitle>Episodios</EpisodesTitle>
            <EpisodesView >
                <BannerEpisode style={styles.episodeShadow}>
                    <EpisodeBanner
                        resizeMode="stretch"
                        src={data.images.jpg.image_url} />
                    <View>
                        <EpisodeName numberOfLines={1}>{data.title}</EpisodeName>
                        <EpisodeNum>{data.episode}</EpisodeNum>
                    </View>

                </BannerEpisode>

            </EpisodesView>
        </EpisodeContainer>
    )
}

const styles = StyleSheet.create({
episodeShadow: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: {
        width: 1,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 9,
},

})