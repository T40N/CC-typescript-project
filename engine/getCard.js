"use strict";
exports.__esModule = true;
var iconClasses_1 = require("./iconClasses");
function getCard(card) {
    var match = card[Math.floor(Math.random() * (card.length))];
    var newCard = [];
    while (newCard.length < 8) {
        var c = iconClasses_1.iconClasses[Math.floor(Math.random() * (iconClasses_1.iconClasses.length))];
        if (c != match && newCard.indexOf(c) == -1)
            newCard.push(c);
    }
    newCard[Math.floor(Math.random() * (newCard.length))] = match;
    return { match: match, items: newCard };
}
exports["default"] = getCard;
