const movies = [
  { id: 1, name: "The Shawshank Redemption", rating: 9.3, time: "2h 22m", title: "Drama", img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
  { id: 2, name: "The Godfather", rating: 9.2, time: "2h 55m", title: "Crime", img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { id: 3, name: "The Dark Knight", rating: 9.0, time: "2h 32m", title: "Action", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 4, name: "Pulp Fiction", rating: 8.9, time: "2h 34m", title: "Crime", img: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 5, name: "Fight Club", rating: 8.8, time: "2h 19m", title: "Drama", img: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" },
  { id: 6, name: "Forrest Gump", rating: 8.8, time: "2h 22m", title: "Drama", img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
  { id: 7, name: "Inception", rating: 8.7, time: "2h 28m", title: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { id: 8, name: "The Matrix", rating: 8.7, time: "2h 16m", title: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg" },
  { id: 9, name: "Goodfellas", rating: 8.7, time: "2h 26m", title: "Crime", img: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg" },
  { id: 10, name: "Interstellar", rating: 8.6, time: "2h 49m", title: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 11, name: "Se7en", rating: 8.6, time: "2h 7m", title: "Thriller", img: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2022/01/20182552/778k7hm3i6f4jp6zwyfm9dds3hfut945m728oaa1108nx24g1njsdsfym4u8u1c52he7sf0g07q6fh5o-721x1024.jpg" },
  { id: 12, name: "Gladiator", rating: 8.5, time: "2h 35m", title: "Action", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 13, name: "The Green Mile", rating: 8.6, time: "3h 9m", title: "Drama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHnJWBqGTtOt2VZcYhig9GhnMqJMjHfoUig&s" },
  { id: 14, name: "The Lord of the Rings: Return of the King", rating: 8.9, time: "3h 21m", title: "Fantasy", img: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" },
  { id: 15, name: "The Lion King", rating: 8.5, time: "1h 28m", title: "Animation", img: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg" }
];

let inp = document.querySelector("input");
let btn = document.querySelector("button");


function myFunction(data) {
  const grid = document.getElementById("moviesGrid");
  grid.innerHTML = "";

  data.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.img}" alt="">
      <div class="movie-info">
        <h3>${movie.name}</h3>
        <span>Жанр: ${movie.title}</span>
        <span>Рейтинг: ${movie.rating}</span>
        <span>Время: ${movie.time}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}


myFunction(movies);

btn.addEventListener('click', () => {
  let filtered = movies.filter(item =>
    item.name.toLowerCase().includes(inp.value.toLowerCase())
  );

  myFunction(filtered);
});
