<template>
  <div
    class="character"
    :style="{
      left: x + 'px',
      top: y + 'px',
      width: charSize + 'px',
      height: charSize + 'px'
    }"
  >
    <div
      class="character-body"
      :style="{
        transform: 'rotate(' + angle + 'rad)',
        backgroundColor: bgc
      }"
    ></div>
    <div
      class="ch-bars"
      :style="{width: charSize + 'px'}"
    >
      <div
        class="ch-bar ch-bar-hp"
        :style="{
          background: 'linear-gradient(to right, #F11155, #F11155 ' + percentHP + '%, #333 ' + percentHP + '%)'
        }"
      ></div>
      <div
        class="ch-bar ch-bar-mp"
        :style="{
          background: 'linear-gradient(to right, #A2FF00, #A2FF00 ' + percentMP + '%, #333 ' + percentMP + '%)'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import store from './../store';
import {vars} from './../db.js';

export default {
  name: 'Character',
  data() {
    return {
      charSize: vars.charSize
    }
  },
  computed: {
    x() {
      return store.state.character.currentCoords.x
    },
    y() {
      return store.state.character.currentCoords.y
    },
    angle() {
      return store.state.character.angle;
    },
    percentHP() {
      let cur = store.state.character.currentHP;
      let max = store.state.character.maxHP;
      return cur / (max / 100);
    },
    percentMP() {
      let cur = store.state.character.currentMP;
      let max = store.state.character.maxMP;
      return cur / (max / 100);
    },
    bgc() {
      console.log(store.state.character.isAlive ? 'golden' : '#CCC')
      return store.state.character.isAlive ? 'gold' : '#CCC';
    }
  }
}
</script>

<style scoped lang="sass">
  .character
    position: absolute
  .character-body
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: 50%
    &::after
      width: 6px
      height: 6px
      background-color: rgba(0, 50, 255, 0.5)
      content: ''
      position: absolute
      left: 5px
      top: -2px
      transform: rotate(45deg)
  .ch-bars
    position: absolute
    display: flex
    flex-direction: column
    left: 0
    top: -10px
  .ch-bar
    width: 100%
    height: 2px
</style>
