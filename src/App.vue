<template>
  <div class="app">
    <Field />
    <button @click="log">Console log state</button>
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
