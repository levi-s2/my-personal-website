fetch('http://localhost:3000/popularAnimes')
.then(function(res) {
    return res.json()
})
.then(function(topAnimes) {
    topAnimes => {
        let AnimeCard = topAnimes.map(function(anime) {
            return `
            <div class="card">
            <h2>${anime.name}</h2>
            <img src=${anime.imgURL}/>
            `
        })
        AnimeCard.append(div)
        console.log(AnimeCard)
    }
})