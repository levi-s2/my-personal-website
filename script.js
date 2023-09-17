//geting data from the database and displaying the books on the website
fetch('http://localhost:3000/popularBooks')
.then(r => r.json())
.then(books => {
    let booksCard = books.map(function(book){
        return `
            <div class="animeCard">
            <h2>${book.name}</h2>
            <h2>${book.author}</h2>
            <ul>
            <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
          </ul>
            <img src=${book.imgURL}/>
            </div>
            `
    })
    document.querySelector("#book-cards").innerHTML += booksCard.join('')
})


const newItem = document.getElementById("new-item");
const theList = document.getElementById("books");

//adds the value the user inputs as an element of a list

const createNewTask = event => { 
  event.preventDefault(); 
  const newTask = document.createElement('li');

  newTask.innerText = newItem.value;
  createButton(newTask);
  theList.appendChild(newTask);

  event.target.reset();
};

//creates a delete button for each book added to the list

const createButton = task => {
   const btn = document.createElement('button');
    btn.innerText = " X";

    task.appendChild(btn);
    btn.addEventListener('click',  (e) => deleteTask(e));
}

const deleteTask = (e) => {
  const selectedTask = e.target.parentElement;
  theList.removeChild(selectedTask);
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))







const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let likes = document.querySelectorAll('.like-glyph')

for (heart of likes) {
  heart.addEventListener('click', addLike)
}

function addLike(e) {
  e.target = heart
  if ( heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    
  } else {
    heart.innerText = EMPTY_HEART;
}
}