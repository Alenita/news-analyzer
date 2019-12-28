import "../pages/analitics.css";


const data = JSON.parse(localStorage.getItem('info'));
const keyWord =  localStorage.getItem('findingWord');
const searchPhrase = document.querySelector('.total-stats__key-word');
const weekCount = document.querySelector('.total-stats__week-count');
const diagramMonth = document.querySelector('.diagram__date');
const titleCount = document.querySelector('.total-stats__heading-count');
const graph = document.querySelectorAll('.diagram__graph');
const diagramDate = document.querySelectorAll('.diagram__day-stat');

searchPhrase.textContent = '«' + localStorage.getItem('findingWord') + '»';
weekCount.textContent = data.totalResults;
titleCount.textContent = countPhrase(keyWord, data.articles);
diagramMonth.textContent = showMonth();

function showMonth() {
    const month = new Date(data.articles[0].publishedAt.slice(0, 10));
    return month.toLocaleDateString('ru', { month: 'long' });
}

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

function mentionsPerDay() {
    const days = {};
    for (let i = 0; i < data.articles.length; i++) {
      const daysMention = new Date(data.articles[i].publishedAt.slice(0, 10)).getDate();
      if (daysMention in days) {
        days[daysMention]++;
      }
      else {
        days[daysMention] = 1;
      }

    }
  renderGraph(days);
}



function dates() {
    const dateObj = [];
    for (let i = 6; i >= 0; i--) {
        const day = new Date(new Date().getTime()-i*24*60*60*1000).toLocaleDateString('ru', { day: 'numeric', });
        const date = new Date(new Date().getTime()-i*24*60*60*1000).toLocaleDateString('ru', { weekday: 'short' });
        const format =  day + ', ' + date; 
        dateObj.push(format);
    }
    renderDates(dateObj);
}

function renderDates(array) {
    for (let i = 0; i < array.length; i++ ) {
     diagramDate[i].textContent = array[i];
    }
}

function renderGraph(obj){
    for(let i = 0; i < Object.values(obj).length; i++) {
        if (Object.values(obj)[i] = 0) {
            graph[i].style.width = 0;
            graph[i].style.background = '#f5f6f7';
            graph[i].style.color = 'black';
        }
        graph[i].textContent = Object.values(obj)[i];
        const blueLine = Object.values(obj)[i]/data.totalResults*100;
        graph[i].style.width = `${blueLine}%`;
    }
}


dates();
mentionsPerDay();