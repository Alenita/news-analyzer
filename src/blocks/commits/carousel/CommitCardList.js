export default class CommitCardList {
    constructor(list, result, callback) {
        this.list = list;
        this.result = result;
        this.callback = callback;

        this.renderCards();
    }

    _addCards(...args) {
        const { cardElement } = this.callback(...args);
        this.list.append(cardElement);
      }


    renderCards() {
        this.result.forEach((item) => {
            const cardData = item;
            this._addCards(cardData.commit.author.date,
                cardData.author.avatar_url,
                cardData.commit.committer.name,
                cardData.commit.committer.email, 
                cardData.commit.message)
        })
    }
}