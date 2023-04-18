class GameScene extends Phaser.Scene {
	constructor() {
		super("Game");
	}
	preload = function () {
		this.load.image('bg', 'assets/sprites/backg.png'); //Загрузка бг на клієнт
		this.load.image('card', 'assets/sprites/card.png'); //Загрузка карти на клієнт

		this.load.image('card1', 'assets/sprites/card1.png');
		this.load.image('card2', 'assets/sprites/card2.png');
		this.load.image('card3', 'assets/sprites/card3.png');
		this.load.image('card4', 'assets/sprites/card4.png');
		this.load.image('card5', 'assets/sprites/card5.png');
	}
	create() {
		this.createBackground();
		this.createCard();
		this.openedCard = null;
		this.openedCardCount = 0;
	}
	createBackground() {
		this.add.sprite(0, 0, 'bg').setOrigin(0, 0); //Загружає бг на сторіну в координатах 0,0
	}
	createCard() {
		this.cards = [];
		let positions = this.getCardsPositions();
		Phaser.Utils.Array.Shuffle(positions);// Змішування позицій карт 

		for (let value of config.cards) {
			for (let i = 0; i < 2; i++) {
				this.cards.push(new Card(this, value, positions.pop()));
			}
		}

		this.input.on("gameobjectdown", this.onCardClicked, this);
	}

	onCardClicked(pointer, card) {
		if (card.opened) {
			return false;
		}
		if (this.openedCard) {
			if (this.openedCard.value === card.value) {
				this.openedCard = null;
				++this.openedCardCount;
			} else {
				this.openedCard.close();
				this.openedCard = card;
			}
		} else {
			this.openedCard = card;
		}

		card.open();

		if (this.openedCardCount === this.cards.length / 2) {
			setTimeout(function () {
				alert("Congratulations on the victory, you will be redirected to the next page, to confirm the action click 'OK'");
				window.location.href = "https://github.com/Twisterday";
			}, 150);
		}

	}

	getCardsPositions() {
		let positions = [];
		let cardWidth = 160 + 15;
		let cardHeight = 250 + 15;
		let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2; // обчислення для позиціонування карт по центру вікна
		let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 4; // обчислення для позиціонування карт по центру вікна

		for (let row = 0; row < config.rows; row++) {
			for (let col = 0; col < config.cols; col++) {
				positions.push({
					x: offsetX + col * cardWidth,
					y: offsetY + row * cardHeight,
				});
			}
		}
		return positions;
	}
}
