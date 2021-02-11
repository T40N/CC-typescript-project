import { iconClasses } from './iconClasses';
function getCard(card) {
    const match = card[Math.floor(Math.random() * (card.length))];
    let newCard = [];
    while (newCard.length < 8) {
        let c = iconClasses[Math.floor(Math.random() * (iconClasses.length))];
        if (c != match && newCard.indexOf(c) == -1)
            newCard.push(c);
    }
    newCard[Math.floor(Math.random() * (newCard.length))] = match;
    return { match: match, items: newCard };
}
export default getCard;
