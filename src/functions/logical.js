import store from './../store';
import {calculateSpeed, calculatePace, calculateAngle} from './calculations';
import {vars} from './../db.js';

export const controlEntityMoving = (timeDif, ent) => { // контролює рух істот і спелів
	if (ent.isMoving) {
		let dx = (ent.newCoords.x - ent.currentCoords.x); // порахували різницю
		let dy = (ent.newCoords.y - ent.currentCoords.y);

		if (ent.hasDestinationBeenChanged) { // рахуємо кут тільки якщо кінцеві координати змінилися
			let angle = calculateAngle(dx, dy) + 2.5; // бо інакше фігня якась

			store.commit('changeAngleEnt', {ent, angle});
			store.commit('setDestinationController', {ent, value: false});
		}

		if (Math.abs(dx) < 1) dx = 0; // нормалізували різницю
		if (Math.abs(dy) < 1) dy = 0;

		if (dx == 0 && dy == 0) {
			store.dispatch('stopEntity', ent);
		} else {
			let coords = calculatePace(timeDif, dx, dy);
			store.dispatch('moveEntity', {ent, coords});
		}
	}
}

export const updateLocationPosition = timeDif => { // оновлює позицію локації на екрані
	let charCoords = store.state.character.currentCoords;
	let fieldSize = 300; // !!це треба брати з бази даних!!
	let charSize = vars.charSize;
	let locationSizeX = 1080;
	let locationSizeY = 1350;

	let coef = (fieldSize / 2) - (charSize / 2);

	if (charCoords.x > coef) { // !!тут двічі повторюється код!!
		if (charCoords.x < locationSizeX - coef) {
			store.commit('changeLocationX', 0 - (charCoords.x - coef));
		}
	}

	if (charCoords.y > coef) {
		if (charCoords.y < locationSizeY - coef) {
			store.commit('changeLocationY', 0 - (charCoords.y - coef));
		}
	}
}

export const controlEntityState = (timeDif, ent) => {
	if (!ent.isAlive) return;
	
	let hp = ent.currentHP;
	let maxHP = ent.maxHP;

	if (hp <= 0) {
		store.dispatch('deathEnt', store.state.character);
	}
}