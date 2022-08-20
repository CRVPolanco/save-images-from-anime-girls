import { addWaifu, showFavorites } from "@utils/insert.js";
import { card, favcont } from "@utils/querys.js";

export const api = "https://api.waifu.im/random/";

export const infoObject = {
  many: '?many=true',
  selected_tags: '&selected_tags=',
  excluded_tags: '&excluded_tags=',
  is_nsfw: "&is_nsfw=",

}
export const categoryObject = {
  /*Is_nsfw = false*/
  maid: 'maid&',
  uniform: 'uniform&',
  waifu: 'waifu&',
  marin_kitagawa: 'marin-kitagawa&',
  oppai: 'oppai&',
  selfies: 'selfies&'
}

export const getWaifuImg = async (api)=>{

  const rta = await fetch(`${api}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const response = rta.json();
  return response;

}

export async function append(api ,cont, quantity){

  const data = await getWaifuImg(api);
  addWaifu(cont, data, quantity);

}

export const likeWaifu = (waifu) =>{

  const data = waifu;

  const object = {
    id: data.image_id ?? data.id,
    url: data.url,
    favorites: data.favourites,
  }

  if(checkStorage(object.id)){
    localStorage.removeItem(object.id);
  }else{
    localStorage.setItem(String(object.id), JSON.stringify(object));
  }

}

export const checkStorage = (data) => {
  if(localStorage.getItem(data)){
    return true;
  }
  return false;
}
export const unlikeWaifu = (object) =>{
  if(localStorage.length===0){
    showFavorites(favcont);
  }
  const data = object;
  localStorage.removeItem(data.id);
  showFavorites(favcont);
}

/*
Paso 1: se le agrega la imagen al localstorage con su id, es decir,
abcdefg: {
  a: 'a',
  b: 'b',
}
Paso 2: en la misma función de insertar, se chequea si existe ese mismo id en el localStorage, y sino se crea uno nuevo, si se encuentra el key, se borra.

Paso 2.1:
*/
