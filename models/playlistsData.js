export let playlists = loadPlaylists();
export let selectedPlaylistIndex = null;

export function selectPlaylist(index) {
  selectedPlaylistIndex = index;
}

export function addPlaylist(name) {
  const newPlaylist = { name, songs: [] };
  playlists.push(newPlaylist);
  savePlaylists();
}

export function addSongToSelected(song) {
  if (selectedPlaylistIndex === null) return false;
  playlists[selectedPlaylistIndex].songs.push(song);
  savePlaylists();
  
  return true;
}

export function removeSongFromPlaylist(playlistIndex, songIndex) {
  playlists[playlistIndex].songs.splice(songIndex, 1);
  savePlaylists();
}


function savePlaylists() {
  sessionStorage.setItem('playlists', JSON.stringify(playlists));
}

function loadPlaylists() {
  const data = sessionStorage.getItem('playlists');
  return data ? JSON.parse(data) : [];
}
