import store from './../store';
import {controlEntityMoving, updateLocationPosition} from './logical';

const updateMainCharacter = (timeDif) => { // оновлюємо головного персонажа
	controlEntityMoving(timeDif, store.state.character); // контролюємо рух по полю
}

const updateCurrentLocation = (timeDif) => { // оновлюємо локацію на екрані:
	updateLocationPosition(timeDif); // позицію
}

const updateMobs = timeDif => {
  store.state.mobs.forEach(mob => {
    controlEntityMoving(timeDif, mob);
  });
}

export const update = () => {
  let prev = performance.now();

  requestAnimationFrame(function update(time) {
  	let timeDif = (time - prev) / 1000;

  	updateMainCharacter(timeDif);
  	updateCurrentLocation(timeDif);
    updateMobs(timeDif);

    prev = time;
    requestAnimationFrame(update);
  });
}

export const initialize = () => {
  store.state.mobs.forEach(mob => {
    store.dispatch('setNewDestinationEnt', {ent: mob, coords: {x: 60, y: 60}});
  });
}