export function getListAnimes(size, animes){
    let topAnime =[];

    for( let i = 0, I = size; i < I; i++) {
        topAnime.push(animes[i])

    }
    return topAnime;
}


export function randomBanner(animes){
    return Math.floor(Math.random() * animes.length)
}