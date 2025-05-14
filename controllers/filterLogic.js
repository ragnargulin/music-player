import { songs } from '../models/songsData.js';
import { playlists, selectedPlaylistIndex, addSongToSelected } from '../models/playlistsData.js';
import { renderSongs } from '../views/songView.js';
import { renderPlaylists } from '../views/playlistView.js';

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

  function filterSongs() {
    const genre = genreFilter.value;
    const artist = artistFilter.value;

    const filtered = songs.filter(song => {
      const matchGenre = genre === '' || song.genre === genre;
      const matchArtist = artist === '' || song.artist === artist;
      return matchGenre && matchArtist;
    });

    renderSongs(filtered, handleAddSong);
  }

  function handleAddSong(song) {
    if (selectedPlaylistIndex === null) {
      alert('Select a playlist first!');
      return;
    }

    addSongToSelected(song);
    alert(`Added "${song.title}" to ${playlists[selectedPlaylistIndex].name}`);
    renderPlaylists(playlists, selectedPlaylistIndex, index => {
      selectPlaylist(index);
      renderPlaylists(playlists, selectedPlaylistIndex, arguments.callee);
    });
  }

  genreFilter.addEventListener('change', filterSongs);
  artistFilter.addEventListener('change', filterSongs);

  renderSongs(songs, handleAddSong);
}
