const gameMemory = () => {
    const fruties =  ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Апельсин', 'Мандарин'];
    newFruties = fruties.map(el => ' ' + el);
    newFruties.sort(()=>Math.random()-0.5);
    alert(`Запомни слова: ${newFruties}`)

    const frutiesFirstWord = prompt('Какое было первое слово?');

    const frutiesLastWord = prompt('Какое было последнее слово?');

    if (frutiesFirstWord.toLowerCase()===newFruties[0].toLowerCase() && frutiesLastWord.toLowerCase()===newFruties[6].toLowerCase()) {
        alert('Угадал')
    } else if (frutiesFirstWord.toLowerCase()===newFruties[0].toLowerCase() && frutiesLastWord.toLowerCase()===newFruties[6].toLowerCase()) {
        alert('Вы были близки к победе!')
    } else {
        alert('Не угадал')
    }
}
gameMemory()