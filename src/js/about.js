import "../pages/about.css"

import GithubApi from './modules/GithubApi.js';
import CommitCard from '../blocks/commits/carousel/carousel-cell/CommitCard.js';
import CommitCardList from '../blocks/commits/carousel/CommitCardList.js';
import Flickity from 'flickity';
import { GITHUB_URL, OWNER, REPO } from './constants/constants.js';

const githubApi = new GithubApi (GITHUB_URL, OWNER, REPO);
const createCard = (...args ) => new CommitCard (...args);
const commitList = document.querySelector('.carousel');

const slider = new Flickity( '.carousel', {
    // Настройки плагина
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: '90%',
 });

 githubApi.getCommits()
    .then((result) => {
        console.log(result);
        new CommitCardList (commitList, result, createCard).renderCards();
    })

    .catch((err) => {
        console.log(err);
    })