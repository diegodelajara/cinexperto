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
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
