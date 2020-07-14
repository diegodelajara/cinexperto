<template>
  <ion-app>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/loading"></ion-back-button>
      </ion-buttons>
      <ion-buttons slot="secondary">
        <ion-button>
          Cinexperto
        </ion-button>
      </ion-buttons>
      <ion-title>
        Ionic
      </ion-title>
    </ion-toolbar>
    <ion-content>
      <Search />
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script>
import Search from 'src/components/Search'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>
