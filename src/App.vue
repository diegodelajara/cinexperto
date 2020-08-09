<template>
  <ion-app>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <!-- <ion-buttons slot="secondary">
        <ion-button>
          Cinexperto
        </ion-button>
      </ion-buttons> -->
      <ion-title>
        Cinexperto
      </ion-title>
    </ion-toolbar>
    <ion-content>
      <Search />
      <home-slider />
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script>
import Search from 'src/components/Search'
import HomeSlider from 'src/components/HomeSlider'

export default {
  name: 'App',
  components: {
    HomeSlider,
    Search
  }
}
</script>
