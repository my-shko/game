<template>
  <div class="field">
    <Location />
  </div>
</template>

<script>
import store from './../store';
import Location from './Location.vue';

export default {
  name: 'Field',
  components: {
    Location
  },
  props: {
    msg: String,
    currentValue: Number,
    newValue: Number
  }
}
</script>

<style scoped lang="sass">
  .field
    position: relative
    width: 300px
    height: 300px
    border: 1px solid black
    background-color: #EEE
    overflow: hidden
</style>
