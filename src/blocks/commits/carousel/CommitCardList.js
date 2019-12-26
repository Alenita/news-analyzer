export default class CommitCardList {
    constructor(list, result, callback) {
        this.list = list;
        this.result = result;
        this.callback = callback;

        this.renderCards();
    }

    addCards(...args) {
        const { cardElement } = this.card(...args);
        this.list.appendChild(cardElement);
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