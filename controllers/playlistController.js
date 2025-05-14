import { playlists, selectPlaylist, selectedPlaylistIndex, addPlaylist } from '../models/playlistsData.js';
import { renderPlaylists } from '../views/playlistView.js';

const playlistForm = document.getElementById('playlist-form');
const playlistInput = document.getElementById('playlist-name');

export function initPlaylistController() {
  playlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = playlistInput.value.trim();
    if (!name) return;

    addPlaylist(name);
    playlistInput.value = '';
    renderPlaylists(playlists, selectedPlaylistIndex, handlePlaylistSelect);
  });

  renderPlaylists(playlists, selectedPlaylistIndex, handlePlaylistSelect);
}

function handlePlaylistSelect(index) {
  selectPlaylist(index);
  renderPlaylists(playlists, selectedPlaylistIndex, handlePlaylistSelect);
}
