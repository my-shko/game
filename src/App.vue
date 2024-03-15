<template>
  <div class="app">
    <Field />
    <button @click="log">Console log state</button>
    <button @click="hp">hp</button>
    <button @click="mp">mp</button>
    <button @click="revive">revive</button>
  </div>
</template>

<script>
import Field from './components/Field.vue';
import store from './store';
import {initialize, update} from './functions/basic.js';

initialize();
setTimeout(() => {
  update();
}, 100)

export default {
  name: 'App',
  components: {
    Field
  },
  computed: {
    currentValue() {
      return store.state.currentValue;
    },
    newValue() {
      return store.state.newValue;
    }
  },
  methods: {
    log() {
      console.log(store.state);
    },
    hp() {
      store.commit('changeCurrentHPEnt', {ent: store.state.character, value: -5})
    },
    mp() {
      store.commit('changeCurrentMPEnt', {ent: store.state.character, value: -5});
    },
    revive() {
      if(store.state.character.isAlive) {
        console.log('still alive');
      } else {
        store.dispatch('reviveEnt', {ent: store.state.character, hp: 10, mp: 20});
      }
    }
  }
}
</script>

<style lang="sass">
  .app
    width: 90vw
    height: 90vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>
