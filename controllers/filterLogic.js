import { songs } from '../models/songsData.js';
import { playlists, selectedPlaylistIndex } from '../models/playlistsData.js';
import { renderPlaylists } from './playlistController.js';


export function initFilters() {
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

  function renderSongs(songsToRender) {
    songList.innerHTML = '';
    songsToRender.forEach(song => {
      const li = document.createElement('li');
      li.textContent = `${song.title} – ${song.artist} [${song.genre}]`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Playlist';
      addButton.style.marginLeft = '10px';

      addButton.addEventListener('click', () => {
        if (selectedPlaylistIndex === null) {
          alert('Select a playlist first!');
          return;
        }

        playlists[selectedPlaylistIndex].songs.push(song);
        alert(`Added "${song.title}" to ${playlists[selectedPlaylistIndex].name}`);

        renderPlaylists();
      });

      li.appendChild(addButton);
      songList.appendChild(li);
    });
  }

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

  renderSongs(songs);
}
