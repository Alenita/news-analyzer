export default class NewsApi {
    constructor(baseUrl, lan, parameters) {
        this.baseUrl = baseUrl;
        this.lan = lan;
        this.parameters = parameters;
        
        this.dateFormat()
    }

    dateFormat() {
        const currentDate = new Date ();
        const previousDate = new Date(new Date()-7*24*60*60*1000);
        const fromDate = previousDate.getFullYear() + '-' + (previousDate.getMonth() +1) + '-' + previousDate.getDate();
        const toDate =  currentDate.getFullYear() + '-' + (currentDate.getMonth() +1) + '-' + currentDate.getDate();

        return fromDate, toDate;
    }

    getCards (keyWord) {
        return fetch (`${this.baseUrl}${keyWord}&${this.lan}&from=${this.dateFormat.fromDate}&to=${this.dateFormat.toDate}&${this.parameters}`)
            .then(res => res.ok ? Promise.resolve(res.json()) : Promise.reject(`Ошибка: ${res.status}`))

            .catch(err => {
                console.log(err);
            });
    }
}


