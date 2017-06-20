<template>
  <v-dialog v-model="test" @input="$emit('close', $event)">
    <v-card>
      <v-card-row>
        <v-card-title>Add Workout</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>Blah blah blah</v-card-text>
      </v-card-row>
      <v-card-row actions>
        <v-btn class="green--text darken-1" flat="flat" @click.native="$emit('close')">Close</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // Name
  name: 'new-workout',

  // Components
  components: {},

  // Props
  props: {
    dialog: Boolean
  },

  // Data
  data () {
    return {
      open: false
    }
  },

  // Created
  created () {},

  // Mounted
  mounted () {},

  // Methods
  methods: {},

  // Computed
  computed: {
    test () {
      return this.dialog
    }
  },

  // Watch
  watch: {}

}
</script>

<style scoped lang="scss">
</style>
