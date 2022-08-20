import { likeWaifu, checkStorage, unlikeWaifu } from "@utils/getData.js";

export const addWaifu =(subcontainer, data, quantity = 30) => {

  subcontainer.innerHTML = "";

    for(let i=0; i<quantity; i++){

      let element = data.images[i];

      const createArticle = document.createElement('article')
      const createImg = document.createElement('img');
      const createButton = document.createElement('button');
      const createP = document.createElement('p');
      const textNode = document.createTextNode(`Favorites: ${element.favourites}`)

      createArticle.classList.add('card');
      createImg.classList.add('card--standar-img');
      createImg.src = element.url;
      createImg.setAttribute('id', element.image_id);

      if(checkStorage(element.image_id)){
        createButton.classList.remove('card-icon--no-favorites');
        createButton.classList.add('card-icon--favorites');
      }else{
        createButton.classList.add('card-icon--no-favorites')
      }

      createButton.addEventListener('click', () =>{

        if(createButton.className === 'card-icon--no-favorites'){
          createButton.classList.remove('card-icon--no-favorites');
          createButton.classList.add('card-icon--favorites');
          likeWaifu(element);

        }else{

          createButton.classList.remove('card-icon--favorites');
          createButton.classList.add('card-icon--no-favorites');
          likeWaifu(element);

        }
      })


      createButton.setAttribute('id', element.image_id);
      createP.classList.add('favorite-count');

      createP.appendChild(textNode);

      createArticle.appendChild(createImg);
      createArticle.appendChild(createButton);
      createArticle.appendChild(createP);
      subcontainer.appendChild(createArticle);

    }

}

export const showFavorites = (container) =>{

    if(localStorage.length === 0){
      return;
    }
    container.innerHTML = "";
    for(let i=0; i<localStorage.length; i++){

      const object = JSON.parse(localStorage.getItem(localStorage.key(i)));

      const card = document.createElement('article');
      const img = document.createElement('img');
      const button = document.createElement('button');
      const p = document.createElement('p');

      const pNode = document.createTextNode(`Favorites: ${object.favorites}`);

      card.classList.add('card');
      img.classList.add('card--standar-img');
      img.setAttribute('id', object.id);
      img.src = object.url;

      button.classList.add('card-icon--favorites');
      button.setAttribute('id', object.id);
      button.addEventListener('click', () =>{


      if(checkStorage(object.image_id)){
        button.classList.add('card-icon--favorites');
      }

        if(button.className === 'card-icon--favorites'){

        button.classList.add('card-icon--no-favorites');
        button.classList.remove('card-icon--favorites');

        unlikeWaifu(object);
        showFavorites(container);

        if(localStorage.length === 0){
          container.innerHTML = '';
        }

      }
      });

      p.classList.add('favorite-count');

      p.appendChild(pNode);
      card.appendChild(img);
      card.appendChild(button);
      card.appendChild(p);
      container.appendChild(card);
    }

}

