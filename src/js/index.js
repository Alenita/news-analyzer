import '../pages/index.css';

import SearchResults from '../blocks/search-results/SearchResults.js';
import NewsCard from '../blocks/search-results/__item/NewsCard.js';
import NewsApi from './modules/NewsApi.js';
import { BASE_URL, LAN, NEWS_PARAMETERS } from './constants/constants.js';

const searchInput = document.querySelector('.search__input');
const searchSubmit = document.querySelector('.search__submit');
const searchForm = document.querySelector('.search__form');
const notFound = document.querySelector('.not-found__no-results');
const preloader = document.querySelector('.preloader');
const resultList = document.querySelector('.search-results__list');
const searchBlock = document.querySelector('.search-results');
const serverError = document.querySelector('.not-found__server-error');

const newsApi = new NewsApi(BASE_URL, LAN, NEWS_PARAMETERS);
const newsCard = new NewsCard();
const searchResults = new SearchResults (resultList);

function validateInput() {
    if (searchInput.value === "") {
        searchInput.setCustomValidity('Нужно ввести ключевое слово');
        return false;
        } else {
            searchInput.setCustomValidity('');
            return true;
         } 
    };

function renderPreloader (isLoading) {
    if (isLoading) {
        preloader.classList.add('preloader_visible');
    } else {
        preloader.classList.remove('preloader_visible');
    }
}

function handleSearch() {
    
    localStorage.clear();
    searchResults.deleteCards();
    event.preventDefault();
    searchBlock.classList.add('search-results_visible');
    renderPreloader(true);
    notFound.classList.remove('not-found__no-results_visible');
    serverError.classList.remove('not-found__server-error_visible');
    searchSubmit.setAttribute('disabled', true);
    searchInput.setAttribute('disabled', true);
    
    if (validateInput()) {
        newsApi.getCards(searchInput.value)  
        
        .then((result) => {
            checkResults(result.articles);
            transferData(searchInput.value, result);
        })  

        .catch((er)=> {
            console.log(er);
            searchBlock.classList.remove('search-results_visible');
            serverError.classList.add('not-found__server-error_visible');
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
        notFound.classList.add('not-found__no-results_visible');
        searchBlock.classList.remove('search -results_visible');
    } else {
        notFound.classList.remove('not-found_visible');
        searchBlock.classList.add('search-results_visible');
        searchResults.render(result, newsCard);
    } 
}

function transferData(word, data) {
    const apiInfo = JSON.stringify(data);
    localStorage.clear();
    localStorage.setItem('info', apiInfo);
    localStorage.setItem('findingWord', word);
}

//проверка на перезагрузку и отрисовка карточек из хранилища
if (localStorage.getItem('info') !== null) {
    searchInput.value = localStorage.getItem('findingWord');
    const cardsInfo = JSON.parse(localStorage.getItem('info'));
    searchBlock.classList.add('search-results_visible');
    checkResults(cardsInfo.articles);
};

searchInput.addEventListener('input', validateInput);
searchForm.addEventListener('submit', handleSearch);


 