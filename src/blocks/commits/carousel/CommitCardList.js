export default class CommitCardList {
    constructor(list, result, callback) {
        this.list = list;
        this.result = result;
        this.callback = callback;

        this.renderCards();

        this.slider = new Flickity( this.list, {
            // Настройки плагина
            cellAlign: 'center',
            contain: true,
            freeScroll: true,
            wrapAround: true,
            groupCells: '90%',
         });
    }

    addCards(...args) {
        const { cardElement } = this.callback(...args);
        this.list.append(cardElement);
      }


    renderCards() {
        for (let i = 0; i < this.result.length; i++) {
            const cardData = this.result[i];
            this.addCards(cardData.commit.author.date,
                cardData.author.avatar_url,
                cardData.commit.committer.name,
                cardData.commit.committer.email, 
                cardData.commit.message)
        }
    }
}