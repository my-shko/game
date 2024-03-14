<template>
  <div class="location" @click="click" :style="{top: top + 'px', left: left + 'px'}">
    <Character />
    <Mob v-for="(mob, id) in mobs" :key="id" :mob="mob" />
    <Anim v-for="(anim, id) in anims" :key="id" :anim="anim" />
  </div>
</template>

<script>
import store from './../store';
import Character from './Character.vue';
import Mob from './Mob.vue';
import Anim from './Anim.vue';

import {vars} from './../db.js';

export default {
  name: 'Location',
  components: {
    Character,
    Anim,
    Mob
  },
  props: {},
  computed: {
    top() {
      return store.state.location.coords.y;
    },
    left() {
      return store.state.location.coords.x;
    },
    character() {
      return store.state.character;
    },
    mobs() {
      return store.state.mobs
    },
    anims() {
      return store.state.anims;
    }
  },
  methods: {
    click(e) {
      let locX = ((e.clientX - this.$el.getBoundingClientRect().x));
      let locY = ((e.clientY - this.$el.getBoundingClientRect().y));

      if (1) { // клік по полю має спрацювати на рух?
        let charX = locX - vars.charSize / 2;
        let charY = locY - vars.charSize / 2;

        store.dispatch('setNewDestinationEnt', {ent: this.character, coords: {x: charX, y: charY}});
        store.dispatch('addAnim', {x: locX, y: locY});
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .location
    position: absolute
    width: 1080px
    height: 1350px
    background: url('./../assets/map1.jpg')
</style>
