import { CARD_PORTION} from '../../../js/constants/constants.js';
const addButton = document.querySelector('.search-results__more-cards');

export default class NewsCardList {
    constructor(list, callback) {
        this.list = list;
        this.cardPortion = CARD_PORTION;
        this.lastCard = 0;
        this.card = callback;

        
        //addButton.onclick = () =>  this.render();
    }

    _checkBalance(data) {
        if (this.lastCard < data.length) {
            addButton.classList.add('search-results__more-cards_visible');
            addButton.onclick = () =>  this.render(data);
            
            }
        else {
            addButton.classList.remove('search-results__more-cards_visible');
            //addButton.removeEventListener('click', this.render);
        };
    }

    _addCards(...args) {
        const { cardElement } = this.card(...args);
        this.list.appendChild(cardElement);
      }

    deleteCards() {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
          }
    }

    render(data) {
        const articles = data;
        for (let i = this.lastCard; i < Math.min(this.lastCard + this.cardPortion, articles.length); i++) {
            const article = articles[i];
            this._addCards(
                    article.url,
                    article.urlToImage,
                    article.publishedAt,
                    article.title, 
                    article.description,
                    article.source.name );
        }
        this.lastCard = this.lastCard + this.cardPortion; 
        this._checkBalance(data);
    }

}
