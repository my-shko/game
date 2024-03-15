import { createStore } from 'vuex'

export default createStore({
  state: {
    character: {
      name: 'character',
      currentCoords: {x: 20, y: 20},
      newCoords: {x: null, y: null},
      angle: 0,
      speed: 1,
      isMoving: false,
      hasDestinationBeenChanged: false,
      maxHP: 100,
      currentHP: 90,
      maxMP: 50,
      currentMP: 30,
      isAlive: true
    },
    mobs: [
      {
        name: 'mob',
        currentCoords: {x: 50, y: 20},
        newCoords: {x: null, y: null},
        angle: 0,
        speed: 0.5,
        isMoving: false,
        hasDestinationBeenChanged: false
      }
    ],
    location: {
      coords: {x: 0, y: 0}
    },
    anims: []
  },
  getters: {
  },
  mutations: {
    changeCurrentCoordsEnt(state, params) {
      params.ent.currentCoords.x += params.coords.x;
      params.ent.currentCoords.y += params.coords.y;

      //console.log('Current coords of ' + params.ent.name + ' has changed to ' + params.coords.x + ', ' + params.coords.y);
    },
    setNewCoordsEnt(state, params) {
      params.ent.newCoords.x = params.coords.x;
      params.ent.newCoords.y = params.coords.y;

      console.log('New coords of ' + params.ent.name + ' was set: ' + params.coords.x + ', ' + params.coords.y);
    },
    clearNewCoordsEnt(state, ent) {
      ent.newCoords.x = null;
      ent.newCoords.y = null;

      console.log('New coords of ' + ent.name + ' was cleared');
    },
    startMovingEnt(state, ent) {
      ent.isMoving = true;

      console.log(ent.name + ' is now moving');
    },
    stopMovingEnt(state, ent) {
      ent.isMoving = false;

      console.log(ent.name + ' was stopped');
    },
    changeLocationX(state, x) {
      state.location.coords.x = x;
    },
    changeLocationY(state, y) {
      state.location.coords.y = y;
    },
    pushAnim(state, anim) {
      state.anims.push(anim);
    },
    shiftAnim(state, anim) {
      state.anims.shift();
    },
    changeAngleEnt(state, params) {
      params.ent.angle = params.angle;

      console.log('Angle of ' + params.ent.name + ' was set ' + params.angle);
    },
    setDestinationController(state, params) {
      params.ent.hasDestinationBeenChanged = params.value;

      console.log('Controller of ' + params.ent.name + ' was set ' + params.value);
    },
    changeCurrentHPEnt(state, params) {
      params.ent.currentHP += params.value;
    },
    changeCurrentMPEnt(state, params) {
      params.ent.currentMP += params.value;
    },
    setCurrentHPEnt(state, params) {
      params.ent.currentHP = params.value;
    },
    setCurrentMPEnt(ent, params) {
      params.ent.currentMP = params.value;
    },
    changeIsAlive(state, params) {
      params.ent.isAlive = params.value;
    }
  },
  actions: {
    setNewDestinationEnt(context, params) {
      context.commit('setNewCoordsEnt', {ent: params.ent, coords: params.coords});
      context.commit('setDestinationController', {ent: params.ent, value: true});
      context.commit('startMovingEnt', params.ent);
    },
    stopEntity(context, ent) {
      context.commit('clearNewCoordsEnt', ent);
      context.commit('stopMovingEnt', ent);
    },
    moveEntity(context, params) {
      context.commit('changeCurrentCoordsEnt', params)
    },
    addAnim(context, anim) {
      context.commit('pushAnim', anim);
      setTimeout(() => {
        context.commit('shiftAnim');
      }, 500);
    },
    deathEnt(context, ent) {
      context.commit('changeIsAlive', {ent, value: false});
      context.commit('setCurrentHPEnt', {ent, value: 0});
      context.commit('setCurrentMPEnt', {ent, value: 0});

      console.log('death');
    },
    reviveEnt(context, params) {
      context.commit('setCurrentHPEnt', {ent: params.ent, value: params.hp});
      context.commit('setCurrentMPEnt', {ent: params.ent, value: params.mp});
      context.commit('changeIsAlive', {ent: params.ent, value: true});

      console.log('revive');
    }
  },
  modules: {
  }
})
