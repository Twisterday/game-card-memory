class GameScene extends Phaser.Scene {
	constructor() {
		super("Game");
	}
	preload = function () {
		this.load.image('bg', '/assets/sprites/backg.png'); //Загрузка бг на клієнт
		this.load.image('card', '/assets/sprites/card.png'); //Загрузка карти на клієнт
	}
	create() {
		this.createBackground();
		this.createCard();
	}
	createBackground() {
		this.add.sprite(0, 0, 'bg').setOrigin(0, 0); //Загружає бг на сторіну в координатах 0,0
	}
	createCard() {
		this.cards = [];
		let positions = this.getCardsPositions();

		for (let position of positions) { //Цикл який проходиться по кожній позиції і для кожної позиції створює новий спрайт
			this.cards.push(new Card(this, position));
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
