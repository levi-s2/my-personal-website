const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
fetch('https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById')
.then(function(res) {
    return res.json()
})
.then(function(data) {
    console.log(data)
})