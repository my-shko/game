export const calculateSpeed = (dx, dy, speed) => { // рахує швидкість руху по кожній з координат
  let distance = Math.pow(Math.pow(dx, 2) + Math.pow(dy, 2), 1/2);
  
  let speedX = speed * dx / distance;
  let speedY = speed * dy / distance;
  
  return {
    x: speedX,
    y: speedY
  }
}

export const calculatePace = (timeDif, dx, dy) => { // рахує кількість пікселів, на які пройде анімація за проміжок часу
	let speed = calculateSpeed(dx, dy, 50);

	let paceX = timeDif * speed.x;
	let paceY = timeDif * speed.y;

	return {x: paceX, y: paceY};
}

export const calculateAngle = (dx, dy) => { // рахує різницю між поточною та цільовою точкою
	return Math.atan2(dy, dx);
}