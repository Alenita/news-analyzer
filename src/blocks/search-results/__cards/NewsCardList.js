import { CARD_PORTION} from '../../../js/constants/constants.js';
const addButton = document.querySelector('.search-results__more-cards');

export default class NewsCardList {
    constructor(list, result, callback) {
        this.list = list;
        this.data = result;
        this.cardPortion = CARD_PORTION;
        this.lastCard = 0;
        this.card = callback;

        
        addButton.onclick = () =>  this.render();
    }

    checkBalance() {
        if (this.lastCard >= this.data.length) {
            addButton.classList.remove('search-results__more-cards_visible');
            }
        return;
    }

    addCards(...args) {
        const { cardElement } = this.card(...args);
        this.list.appendChild(cardElement);
      }

    render() {
        const articles = this.data;
        for (let i = this.lastCard; i < Math.min(this.lastCard + this.cardPortion, articles.length); i++) {
            const article = articles[i];
            this.addCards(
                    article.url,
                    article.urlToImage,
                    article.publishedAt,
                    article.title, 
                    article.description,
                    article.source.name );
        }
        this.lastCard = this.lastCard + this.cardPortion; 
        this.checkBalance();
    }
}
