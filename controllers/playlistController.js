import { playlists, selectPlaylist, selectedPlaylistIndex } from '../models/playlistsData.js';

const playlistForm = document.getElementById('playlist-form');
const playlistInput = document.getElementById('playlist-name');
const playlistList = document.getElementById('playlist-list');

export function initPlaylistController() {
  playlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = playlistInput.value.trim();
    if (!name) return;

    const newPlaylist = { name, songs: [] };
    playlists.push(newPlaylist);
    playlistInput.value = '';
    renderPlaylists(); // Refresh playlist UI
  });

  renderPlaylists(); 
}

export function renderPlaylists() {
  playlistList.innerHTML = ''; 

  playlists.forEach((playlist, index) => {
    const li = document.createElement('li');
    li.textContent = `${playlist.name} (${playlist.songs.length} songs)`;
    li.style.cursor = 'pointer';

    if (selectedPlaylistIndex === index) {
      li.style.fontWeight = 'bold';
    }

    li.addEventListener('click', () => {
      selectPlaylist(index);
      renderPlaylists(); 
    });

    playlistList.appendChild(li);
  });
}
