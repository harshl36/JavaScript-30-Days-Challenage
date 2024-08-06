// TMDb API key and URLs
const apiKey = '595fba2c64a5ff041465287dc96bc4a4'; // Replace with your actual TMDb API key
const apiReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVmYmEyYzY0YTVmZjA0MTQ2NTI4N2RjOTZiYzRhNCIsIm5iZiI6MTcyMjk2MDI4NS42NjY5MTYsInN1YiI6IjY2YjI0NTdjNGFhYmVjNTdmYWVhZmI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HvzIgViavD73r5gIN8_MaoDWY315Txrxe4YJD8n5zWE'; 
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const movieDetails = document.getElementById('movie-details');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');

searchButton.addEventListener('click', searchMovies);
modalCloseButton.addEventListener('click', () => {
    modal.classList.add('animate-fadeOut');
    setTimeout(() => {
        modal.classList.remove('animate-fadeOut');
        modal.style.display = 'none';
    }, 300);
});

function searchMovies() {
    const query = searchInput.value.trim();
    console.log("Search query:", query);

    if (query) {
        const searchUrl = `${baseUrl}/search/movie?query=${encodeURIComponent(query)}`;
        console.log("Fetching data from:", searchUrl);

        fetch(searchUrl, {
            headers: {
                'Authorization': `Bearer ${apiReadAccessToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log("Response received:", response);
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            if (data.results && data.results.length > 0) {
                displayMovies(data.results);
            } else {
                console.log("No movies found");
                resultsContainer.innerHTML = '<p class="no-results">No movies found.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultsContainer.innerHTML = '<p class="error">An error occurred while fetching data.</p>';
        });
    } else {
        console.log("Empty query");
    }
}

function displayMovies(movies) {
    if (movies.length === 1) {
        resultsContainer.innerHTML = createMovieCard(movies[0], true);
    } else {
        resultsContainer.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
    }
}

function createMovieCard(movie, isSingle = false) {
    const cardClass = isSingle ? 'movie-card single' : 'movie-card';
    return `
        <div class="${cardClass}">
            <img src="${imageBaseUrl + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-date">${movie.release_date}</p>
                <button onclick="getMovieDetails(${movie.id})" class="details-button">
                    Details
                </button>
            </div>
        </div>
    `;
}

function getMovieDetails(movieId) {
    const detailUrl = `${baseUrl}/movie/${movieId}?append_to_response=credits`;
    console.log("Fetching movie details from:", detailUrl);

    fetch(detailUrl, {
        headers: {
            'Authorization': `Bearer ${apiReadAccessToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Movie details received:", data);
        displayMovieDetails(data);
    })
    .catch(error => {
        console.error('Error:', error);
        movieDetails.innerHTML = '<p class="error">An error occurred while fetching movie details.</p>';
    });
}

function displayMovieDetails(movie) {
    modalTitle.textContent = movie.title;
    movieDetails.innerHTML = `
        <div class="movie-details">
            <img src="${imageBaseUrl + movie.poster_path}" alt="${movie.title}">
            <div class="movie-details-info">
                <p class="movie-overview">${movie.overview}</p>
                <p class="movie-info-item"><strong>Release Date:</strong> ${movie.release_date}</p>
                <p class="movie-info-item"><strong>Rating:</strong> ${movie.vote_average}/10</p>
                <p class="movie-info-item"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    modal.classList.add('animate-fadeIn');
}