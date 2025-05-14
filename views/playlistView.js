export function renderPlaylists(playlists, selectedIndex, onSelect) {
    const playlistList = document.getElementById('playlist-list');
    playlistList.innerHTML = '';
  
    playlists.forEach((playlist, index) => {
      const li = document.createElement('li');
      li.textContent = `${playlist.name} (${playlist.songs.length} songs)`;
      li.style.cursor = 'pointer';
  
      if (index === selectedIndex) {
        li.style.fontWeight = 'bold';
      }
  
      li.addEventListener('click', () => onSelect(index));
  
      playlistList.appendChild(li);
    });
  }
  