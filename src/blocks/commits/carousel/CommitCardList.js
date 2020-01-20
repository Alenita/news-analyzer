export default class CommitCardList {
    constructor(list) {
        this.list = list;
    }

    renderCards(card) {
        this.list.append(card);
    }

}