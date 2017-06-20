<template>
  <v-layout>
    You haven't added any workouts yet.
    <v-btn floating primary class="add-fab"
      @click.native.stop="dialog = true"
    >
      <v-icon light>add</v-icon>
    </v-btn>
    <new-workout
      :dialog="dialog"
      @close="dialog = $event"
    >

    </new-workout>
  </v-layout>
</template>

<script>
import NewWorkout from './newWorkout'

export default {
  // Name
  name: 'workouts',

  // Components
  components: {
    NewWorkout
  },

  // Props
  props: {},

  // Data
  data () {
    return {
      dialog: false
    }
  },

  // Created
  created () {},

  // Mounted
  mounted () {},

  // Methods
  methods: {},

  // Computed
  computed: {},

  // Watch
  watch: {}

}
</script>

<style scoped lang="scss">
.add-fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
