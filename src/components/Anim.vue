<template>
  <div
    class="anim"
    :style="{
      top: (anim.y - animSize / 2) + 'px',
      left: (anim.x - animSize / 2) + 'px',
      width: animSize + 'px',
      height: animSize + 'px',
      background: 'radial-gradient(circle closest-side, transparent ' + 0 + 'px, rgba(255, 255, 255, 0.5) ' + 6 + 'px, transparent ' + (animSize / 2) + 'px)'
    }"
  ></div>
</template>

<script>
  import {vars} from './../db.js';

  export default {
    name: 'Anim',
    data() {
      return {
        animSize: vars.animSize
      }
    },
    props: {
      anim: Object
    },
    computed: {}
  }
</script>

<style scoped lang="sass">
  .anim
    position: absolute
    animation-name: anim
    animation-duration: 0.5s
    opacity: 0

  @keyframes anim
    0%
      opacity: 0
      transform: scale(0.2)
    10%
      opacity: 100%
      transform: scale(0.4)
    100%
      opacity: 0
      transform: scale(1)
</style>