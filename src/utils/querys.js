import {append, api, infoObject, categoryObject} from '@utils/getData.js';
import { showFavorites } from '@utils/insert.js';

// Important Containers

export const header = document.querySelector('#header');
export const main = document.querySelector('#app');
export const footer = document.querySelector('#footer');
export const mainContainer = document.querySelector('.main-container');
export const cont1 = document.querySelector('.cont1');
export const cont2 = document.querySelector('.cont2');
export const cont3 = document.querySelector('.cont3');
export const genericCont = document.querySelector('.generic-cont');
export const favcont = document.querySelector('.fav-cont');
export const genericSubtitle = document.querySelector('.generic-cont-principal');
export const favContSubtitle = document.querySelector('.favorites-container-return-and-subtitles');

// Titles and subtitles

export const title = document.querySelector('.main-title');
export const sub1 = document.querySelector('.sub1');
export const sub2 = document.querySelector('.sub2');
export const sub3 = document.querySelector('.sub3');
export const sub4 = document.querySelector('.sub4');
export const sub5 = document.querySelector('.generic-cont--subtitle');

export const dinamicSubtitle = document.querySelector('.changing-subtitle--generic-cont');

// Buttons

export const seemore = document.querySelector('.see-more-button');
export const seeuniform = document.querySelector('#uniform');
export const seemaid = document.querySelector('#maid');
export const seewaifu = document.querySelector('#waifu');
export const returnBackFavorites = document.querySelector('.return-back-icon--favorites');
export const returnBackGeneric = document.querySelector('.return-back-icon--generic');

// From Card

export const card = document.querySelector('.card');

// Extras

export const imgLogo = document.querySelector('.nav-logo--icon');
export const imgFavorites = document.querySelector('.nav-icon--favorites');

// ACTIONS

export function returnBack() {
  history.back();
  return true;
}
returnBackGeneric.onclick = returnBack;
returnBackFavorites.onclick = returnBack;

export const navigationsHashes = () =>{

  if(location.hash.startsWith("#waifu")){
    waifu();
  }else if(location.hash.startsWith('#maid')){
    maid();
  }else if(location.hash.startsWith('#uniform')){
    uniform();
  }else if(location.hash.startsWith('#favorites')){
    favorite();
  }else if(location.hash === ""){
    home();
    if(returnBack){
      genericCont.classList.add('inactive');
      favcont.classList.add('inactive');
      sub5.classList.add('inactive');
    }
  }

  window.scrollTo(0,0,0);

}

export const waifu = () =>{

  sub5.innerHTML = 'Waifu';

  mainContainer.classList.add('inactive');
  footer.classList.add('inactive');
  title.classList.add('inactive');
  favcont.classList.add('inactive');
  sub4.classList.add('inactive');
  sub1.classList.remove('inactive');
  sub5.classList.remove('inactive');
  genericCont.classList.remove('inactive');
  returnBackGeneric.classList.remove('inactive');
  returnBackFavorites.classList.add('inactive');
  genericSubtitle.classList.remove('inactive');
  favContSubtitle.classList.add('inactive');

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.waifu}`, genericCont, 30, true);

}

export const maid = () =>{

  sub5.innerHTML = 'Maid';

  mainContainer.classList.add('inactive');
  genericCont.classList.remove('inactive');
  footer.classList.add('inactive');
  title.classList.add('inactive');
  favcont.classList.add('inactive');
  sub4.classList.add('inactive');
  sub1.classList.remove('inactive');
  sub5.classList.remove('inactive');
  returnBackGeneric.classList.remove('inactive');
  returnBackFavorites.classList.add('inactive');
  genericSubtitle.classList.remove('inactive')
  favContSubtitle.classList.add('inactive');

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.maid}`, genericCont, 30, true);

}

export const uniform = () =>{

  sub5.innerHTML = 'Uniform';

  mainContainer.classList.add('inactive');
  genericCont.classList.remove('inactive');
  footer.classList.add('inactive');
  title.classList.add('inactive');
  favcont.classList.add('inactive');
  sub4.classList.add('inactive');
  sub1.classList.remove('inactive');
  sub5.classList.remove('inactive');
  returnBackGeneric.classList.remove('inactive');
  returnBackFavorites.classList.add('inactive');
  genericSubtitle.classList.remove('inactive')
  favContSubtitle.classList.add('inactive');

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.uniform}`, genericCont, 30, true);

}

export const favorite = () =>{

  mainContainer.classList.add('inactive');
  genericCont.classList.add('inactive');
  footer.classList.add('inactive');
  title.classList.add('inactive');
  sub1.classList.add('inactive');
  sub4.classList.remove('inactive');
  favcont.classList.remove('inactive');
  returnBackGeneric.classList.add('inactive');
  returnBackFavorites.classList.remove('inactive');
  sub5.classList.add('inactive');
  genericSubtitle.classList.add('inactive');
  favContSubtitle.classList.remove('inactive');

  showFavorites(favcont);

}

export const home = () =>{

  genericCont.classList.add('inactive');
  returnBackGeneric.classList.add('inactive');
  returnBackFavorites.classList.add('inactive');
  sub5.classList.add('inactive');
  favcont.classList.add('inactive');
  sub4.classList.add('inactive');
  mainContainer.classList.remove('inactive');
  title.classList.remove('inactive');
  footer.classList.remove('inactive');
  sub1.classList.remove('inactive')
  genericSubtitle.classList.add('inactive');
  favContSubtitle.classList.add('inactive');

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.waifu}`, cont1, 8);

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.maid}`, cont2, 8);

  append(`${api}${infoObject.many}${infoObject.selected_tags}${categoryObject.uniform}`, cont3, 8);

}
