import '../pages/index.css';

import NewsCardList from '../blocks/search-results/__cards/NewsCardList.js';
import NewsCard from '../blocks/search-results/__item/NewsCard.js';
import NewsApi from './modules/NewsApi.js';
import { BASE_URL, LAN, NEWS_PARAMETERS } from './constants/constants.js';

const searchInput = document.querySelector('.search__input');
const searchSubmit = document.querySelector('.search__submit');
const searchForm = document.querySelector('.search__form');
const notFound = document.querySelector('.not-found');
const preloader = document.querySelector('.preloader');
const resultList = document.querySelector('.search-results__list');
const searchBlock = document.querySelector('.search-results');
const newsapi = new NewsApi(BASE_URL, LAN, NEWS_PARAMETERS);
const createCard = (...args ) => new NewsCard (...args);
const addButton = document.querySelector('.search-results__more-cards');






function deleteCards() {
    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
      }
}



function validateInput(input) {
    if (input.value === "") {
        input.setCustomValidity('Нужно ввести ключевое слово');
        
        } else {
            input.setCustomValidity(' ');
           
         } 
    };

function renderPreloader (isLoading) {
    if (isLoading) {
        preloader.classList.add('preloader_visible');
    } else {
        preloader.classList.remove('preloader_visible');
    }
}

function handleSearch(event) {
    localStorage.clear();
    deleteCards();
    event.preventDefault();
    searchBlock.classList.add('search-results_visible');
    renderPreloader(true);
    searchSubmit.setAttribute('disabled', true);


    if (searchInput.validity.valid) {
        newsapi.getCards(searchInput.value)  
        
        .then((result) => {
            checkResults(result.articles);
            transferData(searchInput.value, result);
        })  

        .catch((er)=> {
            console.log(er);
            searchBlock.classList.remove('search-results_visible');
        })

        .finally(() =>{
            searchSubmit.removeAttribute('disabled');
            renderPreloader(false);
        })   
    }  else {
        searchSubmit.removeAttribute('disabled');
        renderPreloader(false);
        searchBlock.classList.remove('search-results_visible');
    }
}

function checkResults(result) {
    if (result.length == 0) {
        localStorage.clear();
        notFound.classList.add('not-found_visible');
        searchBlock.classList.remove('search-results_visible');
    } else {
        notFound.classList.remove('not-found_visible');
        searchBlock.classList.add('search-results_visible');
        addButton.classList.add('search-results__more-cards_visible');
        new NewsCardList (resultList, result, createCard).render();        
    } 

}

function transferData(word, data) {
    const apiInfo = JSON.stringify(data);
    localStorage.clear();
    localStorage.setItem('info', apiInfo);
    localStorage.setItem('findingWord', word);
}

searchForm.addEventListener('submit', (event) => handleSearch(event));
//searchForm.addEventListener('input', validateInput(searchInput));



