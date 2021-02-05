var doubles = {
    match: "devicon-flask-original",
    first: [
        "devicon-apache-plain",
        "devicon-atom-original",
        "devicon-confluence-original",
        "devicon-c-plain",
        "devicon-flask-original"
    ],
    second: [
        "devicon-flask-original",
        "devicon-html5-plain",
        "devicon-jquery-plain",
        "devicon-linux-plain",
        "devicon-mongodb-plain"
    ]
};
var doubles2 = {
    match: "devicon-flask-original",
    first: [
        "devicon-materialui-plain colored",
        "devicon-redhat-plain colored",
        "devicon-sourcetree-original colored",
        "devicon-typo3-plain colored",
        "devicon-yunohost-plain colored"
    ],
    second: [
        "devicon-flask-original",
        "devicon-html5-plain",
        "devicon-jquery-plain",
        "devicon-linux-plain",
        "devicon-mongodb-plain"
    ]
};
var getCard = function (obj) {
    return { match: doubles2.match, items: doubles2.first };
};
var change = function (counter) {
    var cards = document.querySelectorAll('.game-card');
    while (cards[counter].childNodes.length > 0) {
        cards[counter].removeChild(cards[counter].childNodes[0]);
    }
    doubles2.first.forEach(function (item) {
        var container = document.createElement('div');
        var icon = document.createElement('i');
        container.appendChild(icon);
        icon.setAttribute('class', item);
        icon.style.fontSize = '50px';
        container.style.width = '50px';
        container.style.height = '50px';
        container.style.margin = '10px';
        container.addEventListener('click', function () {
            console.log(container.children[0].className);
        });
        cards[counter].appendChild(container);
    });
};
// doubles.first.forEach(item=>{
//    const cards=document.querySelectorAll('.game-card')
//    const container=document.createElement('div')
//    const icon=document.createElement('i')
//    container.appendChild(icon)
//    icon.setAttribute('class', item)
//    icon.style.fontSize='50px'
//    container.style.width='50px'
//    container.style.height='50px'
//    container.style.margin='10px'
//    container.addEventListener('click', ()=>{
//       if(container.children[0].className==doubles.match)
//          change(0)
//    })
//    cards[0].appendChild(container)
// })
// doubles.second.forEach(item=>{
//    const cards=document.querySelectorAll('.game-card')
//    const container=document.createElement('div')
//    const icon=document.createElement('i')
//    container.appendChild(icon)
//    icon.setAttribute('class', item)
//    icon.style.fontSize='50px'
//    container.style.width='50px'
//    container.style.height='50px'
//    container.style.margin='10px'
//    container.addEventListener('click', ()=>{
//       if(container.children[0].className==doubles.match)
//          change(1)
//    })
//    cards[1].appendChild(container)
// })
function renderCard(cardNum, match, items, checkClick) {
    var cards = document.querySelectorAll('.game-card');
    while (cards[cardNum].childNodes.length > 0) {
        cards[cardNum].removeChild(cards[cardNum].childNodes[0]);
    }
    items.forEach(function (item) {
        var container = document.createElement('div');
        var icon = document.createElement('i');
        container.appendChild(icon);
        icon.setAttribute('class', item);
        icon.style.fontSize = '50px';
        container.style.width = '50px';
        container.style.height = '50px';
        container.style.margin = '10px';
        container.addEventListener('click', function () {
            checkClick(item, match, cardNum);
        });
        cards[cardNum].appendChild(container);
    });
}
var Engine = /** @class */ (function () {
    function Engine() {
        this.correctAnswers = 0;
        this.firstCard = doubles.first;
        this.secondCard = doubles.second;
        this.match = doubles.match;
        var cards = document.querySelectorAll('.game-card');
        renderCard(0, this.match, this.firstCard, this.checkClick);
        renderCard(1, this.match, this.secondCard, this.checkClick);
    }
    Engine.prototype.checkClick = function (iconClass, match, cardNum) {
        if (match === iconClass) {
            var newCard = (cardNum === 0 ? getCard(this.secondCard) : getCard(this.secondCard));
            renderCard(cardNum, newCard.match, newCard.items, this.checkClick);
        }
    };
    return Engine;
}());
var engine = new Engine();
