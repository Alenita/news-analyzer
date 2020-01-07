import { MONTH_ARR } from '../constants/constants.js'
export default function dateFormat(date) {
    const cardDate = document.createElement('time');
    cardDate.setAttribute('datetime', date);
    let info = new Date(date); 
    console.log(info);
    cardDate.textContent = info.getDate() + ' ' + MONTH_ARR[info.getMonth()] + ', ' + info.getFullYear();
    cardDate.classList.add('extra-text');
    return cardDate;
} 