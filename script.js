fetch('http://localhost:3000/popularBooks')
.then(r => r.json())
.then(books => {
    let booksCard = books.map(function(book){
        return `
            <div class="animeCard">
            <h2>${book.name}</h2>
            <h2>${book.author}</h2>
            <img src=${book.imgURL}/>
            </div>
            `
    })
    document.querySelector("#card").innerHTML += booksCard.join('')
})

