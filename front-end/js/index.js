
const filmsContainer = document.getElementById("films");

const filmTemplate = film => {
  return `<div class="film-block">
    <img src="images/focus.jpg" alt="film image" class="film-img focus__film">
        <div class="film-content">
            <h3>${film.name}</h3>
            <p>${film.author}</p>
            <p>${film.year}</p>
            <p>${film.description}</p>
        </div>
 </div>`;
};

const films = [
  {
    name: "roma",
    author: "nazik",
    year: 1999,
    description: "ramzes"
  },
  {
    name: "romagdfgdf",
    author: "nazgdfgfdik",
    year: 1999,
    description: "ramzgdfgfdes" 
  }
];

films.forEach(film => {
  console.log(filmTemplate(film));
  filmsContainer.insertAdjacentHTML("beforeend", filmTemplate(film));
});

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://rnazaruk-backend.appspot.com', false);

xhr.send();
  
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
