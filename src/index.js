import {cont1, cont2, cont3, navigationsHashes } from '@utils/querys.js';
import '@utils/insert.js';
import '@utils/getData.js';
import '@style/style.css'
import '@style/favorite.css';

window.addEventListener('DOMContentLoaded', navigationsHashes, false);
window.addEventListener('hashchange', navigationsHashes, false);
