<template>
  <ion-toolbar>
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
  </ion-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return{
    } 
  },
  computed: {
    ...mapGetters([
      'showBackButton'
    ])
  }
}
</script>
