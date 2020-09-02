<template>
  <section>
    
    <ion-toolbar mode="ios">
      <ion-buttons v-show="$route.name !== 'home'" slot="start">
        <ion-back-button
            text="Volver"
            default-href="/"
            @click="$router.go(-1)"
          />
      </ion-buttons>
      <ion-title>
        Cinexperto
      </ion-title>

        <ion-avatar v-if="user" slot="end" class="avatar" @click="popover">
          <img :src="user.photoURL || user.user.photoURL" alt="user profile image">
        </ion-avatar>
        <span v-if="user" @click="logOut">Salir</span>
    </ion-toolbar>
    <!-- <pre>

    {{ user.user.photoURL }}
    </pre> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  SET_LOG_OUT
} from 'src/store/modules/user/actions.types'
export default {
  data () {
    return {
      defaultImage: require('src/assets/images/avatar.svg')
    }
  },
  methods: {
    async logOut() {
      await this.$store.dispatch(SET_LOG_OUT)
    },

    popover() {
      // this.$ionic.popoverController.create({
      //     component: {
      //         template: `
      //         <ion-list>
      //             <ion-list-header>
      //                 <ion-label>Ionic</ion-label>
      //             </ion-list-header>
      //             <ion-item>Learn Ionic</ion-item>
      //             <ion-item>Documentation</ion-item>
      //             <ion-item>Showcase</ion-item>
      //             <ion-item>GitHub Repo</ion-item>
      //         </ion-list>`,
      //     },
      //     translucent: true,
      //     event
      // })
      // .then(p => p.present())
    }
  },
  computed: {
    ...mapGetters([
      'showBackButton',
      'user'
    ])
  }
}
</script>

<style scoped>
  .avatar {
      width: 35px;
      height: 35px;
      margin: 5px;
  }
</style>