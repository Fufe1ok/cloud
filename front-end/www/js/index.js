const filmsContainer = document.getElementById("films");

const filmTemplate = film => {
  return `<div class="film-block">
    <img src="images/focus.jpg" alt="film image" class="film-img focus__film">
        <div class="film-content">
            <h3>${film.name}</h3>2
            <p>${film.author}</p>
            <p>${film.year}</p>
            <p>${film.description}</p>
        </div>
 </div>`;
};

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://rnazaruk-backend.appspot.com/film", false);

xhr.send();
const response = JSON.parse(xhr.responseText);
const films = response.films;

console.log(films);

films.forEach(film => {
  filmsContainer.insertAdjacentHTML("beforeend", filmTemplate(film));
});

const url = "https://rnazaruk-backend.appspot.com/film";

const nameInput = document.getElementById("name__inout");
const authorInput = document.getElementById("author__input");
const yearInput = document.getElementById("year__input");
const descriptionInput = document.getElementById("description__input");

const postFilm = e => {
  const inputData = {
    name: nameInput.value,
    author: authorInput.value,
    year: yearInput.value,
    description: descriptionInput.value
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Hello:", data);
    })
    .catch(e => console.error(e));
};
