const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
fetch('http://localhost:3000/popularAnimes')
.then(function(res) {
    return res.json()
})
.then(function(data) {
    console.log(data)
})