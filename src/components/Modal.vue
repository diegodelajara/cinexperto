<template>
  <div>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-buttons slot="start">
          <ion-button @click="close">Cerrar</ion-button>
        </ion-buttons>
        <ion-title slot="secondary">{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-row  class="ion-align-self-center">
        <ion-col >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero illum tempore velit numquam? Enim ab sint harum! Saepe dolorem voluptates reiciendis rerum accusantium libero incidunt dignissimos repellendus, iusto distinctio?
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="4">
          <ion-thumbnail class="center" @click="login('gmail')">
            <ion-img :src="rrss.gm" alt="Gmail" class="ion-align-self-end"></ion-img>
          </ion-thumbnail>
        </ion-col>
        <ion-col size="4">
          <ion-thumbnail class="center" @click="login('facebook')">
            <img :src="rrss.fb" alt="Facebook">
          </ion-thumbnail>
        </ion-col>
        <ion-col size="4">
          <ion-thumbnail class="center" @click="login('twitter')">
            <img :src="rrss.tw" alt="Twitter">
          </ion-thumbnail>
        </ion-col>
      </ion-row>
    </ion-content>
  </div>
</template>

<script>
import {
  SET_USER
} from 'src/store/modules/user/mutations.types'

import {
  GET_USER
} from 'src/store/modules/user/actions.types'

export default {
  name: 'Modal',
  props: {
    store: { required: true, type: Object },
    title: { type: String, default: 'Super Modal' }
  },
  data() {
    return {
      content: 'Content',
      rrss: {
        fb: require('src/assets/images/rrss/fb.png'),
        tw: require('src/assets/images/rrss/tw.png'),
        gm: require('src/assets/images/rrss/gmail.png')
      }
    }
  },
  methods: {
    close() {
      this.$ionic.modalController.dismiss()
    },
    async login(value) {
      const user = await this.store.dispatch(GET_USER, value)
      this.store.commit(SET_USER, user)
      this.close()
    }
  },
}
</script>

<style>
.center {
  margin: 0 auto;
}
</style>
