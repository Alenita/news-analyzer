import "../pages/about.css"

import GithubApi from './modules/GithubApi.js';
import CommitCard from '../blocks/commits/carousel/carousel-cell/CommitCard.js';
import CommitCardList from '../blocks/commits/carousel/CommitCardList.js';
import Flickity from 'flickity';
import { GITHUB_URL, OWNER, REPO } from './constants/constants.js';
const slider = new Flickity( '.carousel', {
    // Настройки плагина
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: '90%',
 });
const githubApi = new GithubApi (GITHUB_URL, OWNER, REPO);
const commitCard = new CommitCard();
const commitsList = new CommitCardList(slider);



 githubApi.getCommits()
    .then((result) => {
        console.log(result);
        result.forEach(cardData => commitsList.renderCards(commitCard.createCard(cardData)));
    })

    .catch((err) => {
        console.log(err);
    })