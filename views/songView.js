export function renderSongs(songs, onAdd) {
    const songList = document.getElementById('songList');
    songList.innerHTML = '';
  
    songs.forEach(song => {
      const li = document.createElement('li');
      li.textContent = `${song.title} – ${song.artist} [${song.genre}]`;
  
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Playlist';
      addButton.style.marginLeft = '10px';
  
      addButton.addEventListener('click', () => onAdd(song));
  
      li.appendChild(addButton);
      songList.appendChild(li);
    });
  }
  