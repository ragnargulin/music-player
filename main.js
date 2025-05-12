import { initFilters } from './controllers/filterLogic.js';
import { initPlaylistController } from './controllers/playlistController.js';

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initPlaylistController();
});
