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
const addButton = document.querySelector('.search-results__more-cards');
const serverError = document.querySelector('.server-error');

const newsapi = new NewsApi(BASE_URL, LAN, NEWS_PARAMETERS);
const createCard = (...args ) => new NewsCard (...args);
//проверка на перезагрузку страницы
let flag = 0;


function deleteCards() {
    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
      }
}

function validateInput() {
    if (searchInput.value === "") {
        searchInput.setCustomValidity('Нужно ввести ключевое слово');
        return
        } else {
            searchInput.setCustomValidity('');
            return
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
    validateInput(searchInput);
    localStorage.clear();
    deleteCards();
    event.preventDefault();
    searchBlock.classList.add('search-results_visible');
    renderPreloader(true);
    searchSubmit.setAttribute('disabled', true);
    searchInput.setAttribute('disabled', true);
    flag = 1;

    if (searchInput.validity.valid) {
        newsapi.getCards(searchInput.value)  
        
        .then((result) => {
            checkResults(result.articles);
            new NewsCardList (resultList, result.articles, createCard).render();  
            transferData(searchInput.value, result);
        })  

        .catch((er)=> {
            console.log(er);
            searchBlock.classList.remove('search-results_visible');
        })

        .finally(() =>{
            searchSubmit.removeAttribute('disabled');
            searchInput.removeAttribute('disabled');
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
             
    } 
}

function transferData(word, data) {
    const apiInfo = JSON.stringify(data);
    localStorage.clear();
    localStorage.setItem('info', apiInfo);
    localStorage.setItem('findingWord', word);
}

if (!flag && localStorage.getItem('info') !== null) {
    searchInput.value = localStorage.getItem('findingWord');
    const cardsInfo = JSON.parse(localStorage.getItem('info'));
    searchBlock.classList.add('search-results_visible');
    checkResults(cardsInfo.articles);
    new NewsCardList (resultList, cardsInfo.articles, createCard).render();
};
searchInput.addEventListener('input', validateInput);
searchForm.addEventListener('submit', handleSearch);




