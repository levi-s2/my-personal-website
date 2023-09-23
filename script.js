//geting data from the database and displaying the books on the website
fetch('http://localhost:3000/popularBooks')
.then(r => r.json())
.then(books => {
  const bookCard = document.querySelector("#book-cards")
  books.forEach(book => {
    bookCard.innerHTML += 
    `
            <div class="bookCard">
            <h2>${book.name}</h2>
            <h2>${book.author}</h2>
            <li><span class="like-button">like</span></li>
            <img src=${book.imgURL}/>
            </div>
            `

             //functionality of the like button
             

let likes = document.querySelectorAll('.like-button')

for (heart of likes) {
  heart.addEventListener('click', addLike)
}

function addLike(event) {
  let like = event.target
  if ( like.textContent === 'like') {
    like.textContent = 'LIKED';
    
  } else {
    like.textContent = 'like';
}
}
    
  })
}
)

const newItem = document.getElementById("new-item");
const theList = document.getElementById("books");

//adds the value the user inputs as an element of a list

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))

const createNewTask = e => { 
  e.preventDefault(); 
  const newTask = document.createElement('li');

  newTask.innerText = newItem.value;
  createButton(newTask);
  theList.appendChild(newTask);
  e.target.reset();
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


