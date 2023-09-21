import AsyncStorage from "@react-native-async-storage/async-storage";


export async function getFavoritosManga(key) {
    const mangasFavoritos = await AsyncStorage.getItem(key)

    let favoritosSalvo = JSON.parse(mangasFavoritos) || [];

    return favoritosSalvo
}

//salva manga

export async function mangasFavoritosSalvo(key, novosFavoritos) {
    let mangaEstoqueFavorito = await getFavoritosManga(key);

    const hasFavoritoManga = mangaEstoqueFavorito.some( item => item.mal_id === novosFavoritos.mal_id )

    if(hasFavoritoManga) {
        console.log("Esse manga ja exite");
        return;
    }

    mangaEstoqueFavorito.push(novosFavoritos);

    await AsyncStorage.setItem(key, JSON.stringify(mangaEstoqueFavorito));
    console.log("manga salvo com sucesso")

}

//deleta manga

export async function deleteManga(mal_id) {
    let mangaEstoqueFavorito = await getFavoritosManga('@favoritoManga');

    let mangasFavoritos = mangaEstoqueFavorito.filter( item => {
        return (item.mal_id !== mal_id)
    })

    await AsyncStorage.setItem('@favoritoManga', JSON.stringify(mangasFavoritos));
    console.log('anime deletado');
    return mangasFavoritos;
}

 //filtrar manga
 
export async function hasFavoritoManga(manga) {
    let mangaEstoqueFavorito = await getFavoritosManga('@favoritoManga');

    const hasFavoritoManga = mangaEstoqueFavorito.find(item => item.mal_id === manga.mal_id);

    if(hasFavoritoManga) {
        return true;
    }
    return false;
}