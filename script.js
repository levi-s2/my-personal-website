fetch('http://localhost:3000/popularAnimes')
.then(r => r.json())
.then(animes => {
    let animeCard = animes.map(function(anime){
        return `
            <div class="animeCard">
            <h2>${anime.name}</h2>
            <img src=${anime.imgURL}/>
            </div>
            `
    })
    document.querySelector("#card").innerHTML += animeCard.join('')
})

