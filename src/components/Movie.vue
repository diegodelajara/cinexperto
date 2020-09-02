<template>
  <ion-card>
    <img :src="image" alt="image movie" @click="viewMore()" />
    <ion-card-header>
      <ion-row class="ion-align-items-center">
        <ion-col size="9">
          <ion-card-subtitle>{{ genre }}</ion-card-subtitle>
        </ion-col>
        
        <ion-col size="3" class="ion-text-end">
          <ion-icon name="star-outline" size="large" @click="rate"></ion-icon>
        </ion-col>
      </ion-row>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<script>
import Modal from 'src/components/Modal'

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
      loggedIn: false
    }
  },
  methods: {
    rate() {
      this.loggedIn
        ? console.log('logged')
        : this.openModal()
    },

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
    },

    openModal() {
      return this.$ionic.modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              store: this.$store,
              title: 'Log in',
            }
          },
        })
        .then(m => m.present())
    }
  }
}
</script>

<style scoped>
</style>
