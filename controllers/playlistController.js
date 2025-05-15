import {
  playlists, selectPlaylist, selectedPlaylistIndex, addPlaylist, removeSongFromPlaylist, addSongToSelected
} from '../models/playlistsData.js';

import { renderPlaylists } from '../views/playlistView.js';
import { renderSongs } from '../views/songView.js';
import { songs } from '../models/songsData.js';

let expandedPlaylistIndex = null;

export function initPlaylistController() {
  const playlistForm = document.getElementById('playlist-form');
  const playlistInput = document.getElementById('playlist-name');

  playlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = playlistInput.value.trim();
    if (!name) return;

    addPlaylist(name);
    playlistInput.value = '';
    rerender();
  });

  rerender();
}

function handlePlaylistSelect(index) {
  selectPlaylist(index);
  rerender();
}

function handleRemoveSong(playlistIndex, songIndex) {
  removeSongFromPlaylist(playlistIndex, songIndex);
  rerender();
}

function rerender() {
  renderPlaylists(playlists, selectedPlaylistIndex, expandedPlaylistIndex, handlePlaylistSelect, handleRemoveSong, handleToggleExpand);
  renderSongs(songs, handleAddSong, selectedPlaylistIndex !== null);
}

function handleAddSong(song) {
  if (selectedPlaylistIndex === null) return;

  const playlist = playlists[selectedPlaylistIndex];
  playlist.songs.push(song);
  rerender();
}

function handleToggleExpand(index) {
  expandedPlaylistIndex = index;
  rerender();
}

