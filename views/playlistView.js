export function renderPlaylists(playlists, selectedIndex, expandedIndex, onSelect, onRemoveSong, onToggleExpand) {
    const playlistList = document.getElementById('playlist-list');
    playlistList.innerHTML = '';
  
    playlists.forEach((playlist, index) => {
      const details = document.createElement('details');
      if (index === expandedIndex) details.setAttribute('open', '');
  
      const summary = document.createElement('summary');
      summary.textContent = `${playlist.name} (${playlist.songs.length} songs)`;
  
      if (index === selectedIndex) summary.style.fontWeight = 'bold';
  
      summary.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (expandedIndex === index) {
          onToggleExpand(null); 
        } else {
          onSelect(index);      
          onToggleExpand(index); 
        }
      });
  
      details.appendChild(summary);
  
      const ul = document.createElement('ul');
      playlist.songs.forEach((song, songIndex) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} – ${song.artist}`;
  
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.title = 'Remove from playlist';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.color = 'red';
  
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          onRemoveSong(index, songIndex);
        });
  
        li.appendChild(removeBtn);
        ul.appendChild(li);
      });
  
      details.appendChild(ul);
      playlistList.appendChild(details);
    });
  }
  