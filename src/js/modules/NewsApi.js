export default class NewsApi {
    constructor(baseUrl, lan, parameters) {
        this.baseUrl = baseUrl;
        this.lan = lan;
        this.parameters = parameters;
    }

    getCards (keyWord) {
        const currentDate = new Date ();
        const previousInMs = 6*24*60*60*1000;
        const previousDate = new Date(currentDate.getTime()-previousInMs);
        const fromDate = previousDate.toISOString().slice(0, 10);
        const toDate =  currentDate.toISOString().slice(0, 10);
        return fetch (`${this.baseUrl}${keyWord}&from=${fromDate}&to=${toDate}&language=ru&${this.parameters}`)
        
            .then(res => res.ok ? Promise.resolve(res.json()) : Promise.reject(`Ошибка: ${res.status}`))

            .catch(err => {
                console.log(err);
            });
    }
}


