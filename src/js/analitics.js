import "../pages/analitics.css";

import {STAT_MONT} from './constants/constants.js';

const data = JSON.parse(localStorage.getItem('info'));

const keyWord =  localStorage.getItem('findingWord');
console.log(data.articles);
const searchPhrase = document.querySelector('.total-stats__key-word');
searchPhrase.textContent = '«' + localStorage.getItem('findingWord') + '»';

const weekCount = document.querySelector('.total-stats__week-count');
weekCount.textContent = data.totalResults;

const titleCount = document.querySelector('.total-stats__heading-count');
titleCount.textContent = countPhrase(keyWord, data.articles);


function countPhrase(key, articles) {
    let count = 0;
    articles.forEach(function (item) {
        item.title = item.title.toLowerCase();
        key = key.toLowerCase();
        if(item.title.includes(key)) {
            return count++;
        }
    })
    return count;
};


let array = data.articles.map((item) => new Date(item.publishedAt));
array = array.sort();
const days = [];
const dates = [];
const mentions = [];
for (let i = 0; i < array.length; i++) {
    days.push(array[i].getDate());

}
console.log(days);
console.log(array);

/*dateInWork(data.publishedAt)
function dateInWork (dates) {

}*/



