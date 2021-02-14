const iconClasses = [
	"devicon-aftereffects-plain colored",
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
	"devicon-zend-plain colored",
];

interface Card {
	match: string;
	items: string[];
}

function getCard(card: string[]): Card {
	const match = card[Math.floor(Math.random() * card.length)];
	let newCard = [];

	while (newCard.length < card.length) {
		let icon = iconClasses[Math.floor(Math.random() * iconClasses.length)];

		if (icon != match && newCard.indexOf(icon) == -1 && card.indexOf(icon) == -1)
			newCard.push(icon);
	}

	newCard[Math.floor(Math.random() * newCard.length)] = match;

	return {match: match, items: newCard};
}

function renderCard(cardNum: number, icons: string[], checkClick) {
	const items = [...icons];

	const cards = document.querySelectorAll(".game-card");

	while (cards[cardNum].childNodes.length > 0) {
		cards[cardNum].removeChild(cards[cardNum].childNodes[0]);
	}

	items.forEach(item => {
		const container = document.createElement("div");
		const icon = document.createElement("i");

		container.appendChild(icon);
		icon.setAttribute("class", item);
		container.setAttribute("id", `icon${items.indexOf(item)}`);
		container.addEventListener("click", () => {
			checkClick(item, cardNum);
		});

		cards[cardNum].appendChild(container);
	});
}

function getRandomCard(size: number): string[] {
	let card = [];

	while (card.length < size) {
		let icon = iconClasses[Math.floor(Math.random() * iconClasses.length)];

		if (card.indexOf(icon) == -1) card.push(icon);
	}

	return card;
}

class Engine {
	missedAnswers = 0;
	counter = 0;
	seconds = 0;
	firstCard = getRandomCard(8);
	nc = getCard(this.firstCard);
	secondCard = this.nc.items;
	match = this.nc.match;
	oldCard = -1;

	constructor() {
		renderCard(0, this.firstCard, this.checkClick);
		renderCard(1, this.secondCard, this.checkClick);
		this.timer();
	}

	timer = () => {
		setTimeout(() => {
			this.seconds++;
			this.timer();
			console.log(this.seconds);
		}, 1000);
	};

	checkClick = (iconClass: string, cardNum: number) => {
		const icons = document.getElementsByClassName(`${iconClass}`);

		if (this.match === iconClass) {
			if (this.counter == 19) {
				setTimeout(() => {
					// Here saving data to local storage
					location.href = "score.html";
				}, 500);
			}

			let newCard: Card;

			if (this.oldCard === -1) {
				newCard = getCard(this.secondCard);
				this.firstCard = newCard.items;
				this.match = newCard.match;

				icons[cardNum].classList.add("correct");

				setTimeout(() => {
					icons[cardNum].classList.remove("correct");
					renderCard(0, newCard.items, this.checkClick);
				}, 500);
			} else {
				newCard = getCard(this.firstCard);
				this.secondCard = newCard.items;
				this.match = newCard.match;

				icons[cardNum].classList.add("correct");

				setTimeout(() => {
					icons[cardNum].classList.remove("correct");
					renderCard(1, newCard.items, this.checkClick);
				}, 500);
			}

			this.counter++;
			console.log(this.counter);
			this.oldCard *= -1;
		} else {
			icons[0].classList.add("inCorrect");

			setTimeout(() => {
				icons[0].classList.remove("inCorrect");
			}, 500);

			console.log("Nope!");
			this.missedAnswers++;
			console.log(this.missedAnswers);
		}
	};
}

const engine = new Engine();
