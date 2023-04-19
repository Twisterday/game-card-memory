// class Card extends Phaser.GameObjects.Sprite {
// 	constructor(scene, value, position) {
// 		super(scene, position.x, position.y, 'card')
// 		this.scene = scene;
// 		this.value = value;
// 		this.scene.add.existing(this);
// 		this.setInteractive();
// 		this.opened = false;
// 	}

// 	flip() {
// 		this.scene.tweens.add({
// 			targets: this,
// 			scaleX: 0,
// 			ease: 'Linear',
// 			duration: 150,
// 			onComplete: () => {
// 				this.show();
// 			}
// 		});
// 	}

// 	starterFlip() {
// 		this.scene.tweens.add({
// 			targets: this,
// 			scaleX: 0,
// 			ease: 'Linear',
// 			duration: 150,
// 			onComplete: () => {
// 				this.scene.tweens.add({
// 					targets: this,
// 					scaleX: 1,
// 					ease: 'Linear',
// 					duration: 150,
// 				});
// 			}
// 		});
// 	}

// 	show() {
// 		this.setTexture('card' + this.value);
// 		this.scene.tweens.add({
// 			targets: this,
// 			scaleX: 1,
// 			ease: 'Linear',
// 			duration: 150,
// 		});
// 	}

// 	open() {
// 		this.opened = true;
// 		this.flip()
// 		this.setTexture('card' + this.value);
// 	}
// 	close() {
// 		this.opened = false;
// 		this.setTexture('card');
// 	}
// }
class Card extends Phaser.GameObjects.Sprite {
	constructor(scene, value, position) {
		super(scene, position.x, position.y, 'card')
		this.scene = scene;
		this.value = value;
		this.scene.add.existing(this);
		this.setInteractive();
		this.opened = false;
		this.starterFlip();
	}

	flip() {
		this.scene.tweens.add({
			targets: this,
			scaleX: 0,
			ease: 'Linear',
			duration: 150,
			onComplete: () => {
				this.show();
			}
		});
	}

	starterFlip() {
		this.scene.tweens.add({
			targets: this,
			scaleX: 0,
			ease: 'Linear',
			duration: 150,
			onComplete: () => {
				this.scene.tweens.add({
					targets: this,
					scaleX: 1,
					ease: 'Linear',
					duration: 150,
				});
			}
		});
	}

	show() {
		this.setTexture('card' + this.value);
		this.scene.tweens.add({
			targets: this,
			scaleX: 1,
			ease: 'Linear',
			duration: 150,
		});
	}

	open() {
		this.opened = true;
		this.flip()
		this.setTexture('card' + this.value);
	}
	close() {
		this.opened = false;
		this.setTexture('card');
	}
}