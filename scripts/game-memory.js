function gameMemory() {
    const fruties =  ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Апельсин', 'Мандарин'];

    fruties = fruties.sort(() => Math.random() - 0.5);
    alert('Запомни слова: ${fruties}');

    const frutiesFirstWord = prompt('Какое было первое слово?');

    const frutiesLastWord = prompt('Какое было последнее слово?');

    if (frutiesFirstWord == item[0] && frutiesLastWord === item[item.length - 1]) {
        alert('Угадал');
    } else if (frutiesFirstWord == item[0]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Не угадал');
    };
};