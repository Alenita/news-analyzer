
export default class GithubApi {
    constructor(url,owner,repo) {
        this.url = url;
        this.owner = owner;
        this.repo = repo;


    }

    getCommits() {
        return fetch (`${this.url}/${this.owner}/${this.repo}/commits`)
            .then(res => res.ok ? Promise.resolve(res.json()) : Promise.reject(`Ошибка: ${res.status}`))

            .catch(err => {
                console.log(err);
            });
    }
}