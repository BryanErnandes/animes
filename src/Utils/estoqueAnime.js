import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavoritosAnimes(key) {
    const animesFavoritos = await AsyncStorage.getItem(key)

    let favoritosSalvo = JSON.parse(animesFavoritos) || [];

    return favoritosSalvo
}

//salva anime
export async function animesFavoritosSalvo(key, novosFavoritos) {
    let animeEstoqueFavorito = await getFavoritosAnimes(key);

    const hasFavoritoAnime = animeEstoqueFavorito.some( item => item.mal_id === novosFavoritos.mal_id )

    if(hasFavoritoAnime) {
        console.log("Esse Anime ja exsite");
        return;
    }

    animeEstoqueFavorito.push(novosFavoritos);

    await AsyncStorage.setItem(key, JSON.stringify(animeEstoqueFavorito));
    console.log("anime salvo com sucesso")

}

//deleta anime

export async function deleteAnime(mal_id) {
    let animeEstoqueFavorito = await getFavoritosAnimes('@favoritoAnime');

    let animesFavoritos = animeEstoqueFavorito.filter( item => {
        return (item.mal_id !== mal_id)
    })

    await AsyncStorage.setItem('@favoritoAnime', JSON.stringify(animesFavoritos));
    console.log('anime deletado');
    return animesFavoritos;
}

 //filtrar animes

export async function hasFavoritoAnime(anime) {
    let animeEstoqueFavorito = await getFavoritosAnimes('@favoritoAnime');

    const hasFavoritoAnime = animeEstoqueFavorito.find(item => item.mal_id === anime.mal_id);

    if(hasFavoritoAnime) {
        return true;
    }
    return false;
}
