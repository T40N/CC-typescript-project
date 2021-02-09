var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var iconClasses = [
    "devicon-aftereffects-plaind colored",
    "devicon-amazonwebservices-original colored",
    "devicon-android-plain colored",
    "devicon-angularjs-plain colored",
    "devicon-apache-plain colored",
    "devicon-appcelerator-original colored",
    "devicon-appwrite-plain colored",
    "devicon-atom-original colored",
    "devicon-babel-plain colored",
    "devicon-backbonejs-plain colored",
    "devicon-bash-plain colored",
    "devicon-behance-plain colored",
    "devicon-bitbucket-original colored",
    "devicon-bootstrap-plain colored",
    "devicon-bower-plain colored",
    "devicon-c-plain colored",
    "devicon-cakephp-plain colored",
    "devicon-ceylon-plain colored",
    "devicon-chrome-plain colored",
    "devicon-clojure-line colored",
    "devicon-clojurescript-plain colored",
    "devicon-codeigniter-plain colored",
    "devicon-codepen-plain colored",
    "devicon-coffeescript-original colored",
    "devicon-composer-line colored",
    "devicon-confluence-original colored",
    "devicon-couchdb-plain colored",
    "devicon-cplusplus-plain colored",
    "devicon-csharp-plain colored",
    "devicon-css3-plain colored",
    "devicon-cucumber-plain colored",
    "devicon-d3js-plain colored",
    "devicon-debian-plain colored",
    "devicon-devicon-plain colored",
    "devicon-django-plain colored",
    "devicon-docker-plain colored",
    "devicon-doctrine-plain colored",
    "devicon-dot-net-plain colored",
    "devicon-drupal-plain colored",
    "devicon-electron-original colored",
    "devicon-eleventy-plain colored",
    "devicon-elm-plain colored",
    "devicon-ember-original-wordmark colored",
    "devicon-erlang-plain colored",
    "devicon-express-original colored",
    "devicon-facebook-plain colored",
    "devicon-firebase-plain colored",
    "devicon-firefox-plain colored",
    "devicon-flask-original colored",
    "devicon-flutter-plain colored",
    "devicon-foundation-plain colored",
    "devicon-gatling-plain colored",
    "devicon-gatsby-plain colored",
    "devicon-gimp-plain colored",
    "devicon-git-plain colored",
    "devicon-github-original colored",
    "devicon-gitlab-plain colored",
    "devicon-go-plain colored",
    "devicon-google-plain colored",
    "devicon-googlecloud-plain colored",
    "devicon-gradle-plain colored",
    "devicon-grails-plain colored",
    "devicon-groovy-plain colored",
    "devicon-grunt-plain colored",
    "devicon-gulp-plain colored",
    "devicon-haskell-plain colored",
    "devicon-handlebars-plain colored",
    "devicon-haxe-plain colored",
    "devicon-heroku-original colored",
    "devicon-html5-plain colored",
    "devicon-ie10-original colored",
    "devicon-illustrator-plain colored",
    "devicon-inkscape-plain colored",
    "devicon-intellij-plain colored",
    "devicon-ionic-original colored",
    "devicon-jasmine-plain colored",
    "devicon-java-plain colored",
    "devicon-javascript-plain colored",
    "devicon-jeet-plain colored",
    "devicon-jenkins-line colored",
    "devicon-jetbrains-plain colored",
    "devicon-jquery-plain colored",
    "devicon-kotlin-plain colored",
    "devicon-krakenjs-plain colored",
    "devicon-kubernetes-plain colored",
    "devicon-laravel-plain colored",
    "devicon-less-plain-wordmark colored",
    "devicon-linkedin-plain colored",
    "devicon-linux-plain colored",
    "devicon-materialui-plain colored",
    "devicon-meteor-plain  colored",
    "devicon-mocha-plain colored",
    "devicon-mongodb-plain colored",
    "devicon-moodle-plain colored",
    "devicon-mysql-plain colored",
    "devicon-nestjs-plain colored",
    "devicon-nginx-original colored",
    "devicon-nodejs-plain colored",
    "devicon-nodewebkit-plain colored",
    "devicon-npm-original-wordmark colored",
    "devicon-objectivec-plain colored",
    "devicon-oracle-original colored",
    "devicon-photoshop-plain colored",
    "devicon-php-plain colored",
    "devicon-phpstorm-plain colored",
    "devicon-postgresql-plain colored",
    "devicon-premierepro-plain colored",
    "devicon-protractor-plain colored",
    "devicon-pycharm-plain colored",
    "devicon-python-plain colored",
    "devicon-rails-plain colored",
    "devicon-react-original colored",
    "devicon-redhat-plain colored",
    "devicon-redis-plain colored",
    "devicon-redux-original colored",
    "devicon-rocksdb-plain colored",
    "devicon-ruby-plain colored",
    "devicon-rubymine-plain colored",
    "devicon-rust-plain colored",
    "devicon-safari-plain colored",
    "devicon-sass-original colored",
    "devicon-scala-plain colored",
    "devicon-sequelize-plain colored",
    "devicon-sketch-line colored",
    "devicon-slack-plain colored",
    "devicon-sourcetree-original colored",
    "devicon-sqlalchemy-plain colored",
    "devicon-microsoftsqlserver-plain colored",
    "devicon-ssh-original colored",
    "devicon-stylus-original colored",
    "devicon-swift-plain colored",
    "devicon-symfony-original colored",
    "devicon-tomcat-line colored",
    "devicon-travis-plain colored",
    "devicon-trello-plain colored",
    "devicon-twitter-original colored",
    "devicon-typescript-plain colored",
    "devicon-typo3-plain colored",
    "devicon-ubuntu-plain colored",
    "devicon-uwsgi-plain colored",
    "devicon-vagrant-plain colored",
    "devicon-vim-plain colored",
    "devicon-visualstudio-plain colored",
    "devicon-vuejs-plain colored",
    "devicon-webpack-plain colored",
    "devicon-webstorm-plain colored",
    "devicon-windows8-original colored",
    "devicon-woocommerce-plain colored",
    "devicon-wordpress-plain colored",
    "devicon-xd-plain colored",
    "devicon-yarn-plain colored",
    "devicon-yii-plain colored",
    "devicon-yunohost-plain colored",
    "devicon-zend-plain colored"
];
function getCard(card) {
    var match = card[Math.floor(Math.random() * (card.length))];
    var newCard = [];
    while (newCard.length < 8) {
        var c = iconClasses[Math.floor(Math.random() * (iconClasses.length))];
        if (c != match && newCard.indexOf(c) == -1 && card.indexOf(c) == -1)
            newCard.push(c);
    }
    newCard[Math.floor(Math.random() * (newCard.length))] = match;
    return { match: match, items: newCard };
}
function renderCard(cardNum, icons, checkClick) {
    var items = __spreadArrays(icons);
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
            checkClick(item, cardNum);
        });
        cards[cardNum].appendChild(container);
    });
}
function getRandomCard(size) {
    var card = [];
    while (card.length < size) {
        var icon = iconClasses[Math.floor(Math.random() * (iconClasses.length))];
        if (card.indexOf(icon) == -1)
            card.push(icon);
    }
    return card;
}
var Engine = /** @class */ (function () {
    function Engine() {
        var _this = this;
        this.correctAnswers = 0;
        this.firstCard = getRandomCard(8);
        this.nc = getCard(this.firstCard);
        this.secondCard = this.nc.items;
        this.match = this.nc.match;
        this.checkClick = function (iconClass, cardNum) {
            if (_this.match === iconClass) {
                var newCard = void 0;
                if (cardNum == 0) {
                    newCard = getCard(_this.secondCard);
                    _this.firstCard = newCard.items;
                    _this.match = newCard.match;
                }
                else {
                    newCard = getCard(_this.firstCard);
                    _this.secondCard = newCard.items;
                    _this.match = newCard.match;
                }
                renderCard(cardNum, newCard.items, _this.checkClick);
            }
            else
                console.log('Nope!');
        };
        renderCard(0, this.firstCard, this.checkClick);
        renderCard(1, this.secondCard, this.checkClick);
    }
    return Engine;
}());
var engine = new Engine();
