<template>
  <div class="mob" :style="{left: mob.currentCoords.x + 'px', top: mob.currentCoords.y + 'px', transform: 'rotate(' + mob.angle + 'rad)'}"></div>
</template>

<script>
import store from './../store';

export default {
  name: 'Mob',
  props: {
    mob: Object
  }
}
</script>

<style scoped lang="sass">
  .mob
    width: 16px
    height: 16px
    background-color: rgba(255, 50, 0, 0.5)
    position: absolute
    border-radius: 50%
    &::after
      width: 6px
      height: 6px
      background-color: rgba(255, 50, 0, 0.5)
      content: ''
      position: absolute
      left: 5px
      top: -2px
      transform: rotate(45deg)

</style>