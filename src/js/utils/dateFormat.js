export default function dateFormat(date) {
    const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const cardDate = document.createElement('time');
    cardDate.setAttribute('datetime', date);
    let info = new Date(date); 
    console.log(info);
    cardDate.textContent = info.getDate() + ' ' + monthArr[info.getMonth()] + ', ' + info.getFullYear();
    cardDate.classList.add('extra-text');
    return cardDate;
} 