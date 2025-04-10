import { songs } from '../models/songsData.js';

const songList = document.getElementById('songList');
const genreFilter = document.getElementById('genreFilter');
const artistFilter = document.getElementById('artistFilter');

const genres = [...new Set(songs.map(song => song.genre))].sort();
const artists = [...new Set(songs.map(song => song.artist))].sort();

genres.forEach(genre => {
  const option = document.createElement('option');
  option.value = genre;
  option.textContent = genre;
  genreFilter.appendChild(option);
});

artists.forEach(artist => {
  const option = document.createElement('option');
  option.value = artist;
  option.textContent = artist;
  artistFilter.appendChild(option);
});

// Display songs
function renderSongs(songs) {
  songList.innerHTML = '';
  songs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = `${song.title} – ${song.artist} [${song.genre}]`;
    songList.appendChild(li);
  });
}

// Filter logic
function filterSongs() {
  const genre = genreFilter.value;
  const artist = artistFilter.value;

  const filtered = songs.filter(song => {
    const matchGenre = genre === '' || song.genre === genre;
    const matchArtist = artist === '' || song.artist === artist;
    return matchGenre && matchArtist;
  });

  renderSongs(filtered);
}

genreFilter.addEventListener('change', filterSongs);
artistFilter.addEventListener('change', filterSongs);

// Initial render
renderSongs(songs);
