<template>
  <ion-card>
    <img :src="image" alt="image movie" />
    <ion-card-header>
      <ion-card-subtitle>{{ genre }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <ion-button clear v-if="path !== '/detail'" @click="viewMore()">Ver más</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>

import {
  SET_SHOW_BACK_BUTTON
} from 'src/store/modules/movies/mutations.types'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      path: null
    }
  },
  mounted() {
    this.path = this.$route.path
  },
  methods: {
    viewMore() {
      this.$store.commit(SET_SHOW_BACK_BUTTON, true)
      this.$router.push({
        name: 'detail',
        params: {
          id: this.id,
          title: this.title,
          image: this.image,
          genre: this.genre
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
