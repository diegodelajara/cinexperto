<template>
  <ion-app>
    <div class="ion-page" main>
      <ion-header>
        <Toolbar />
      </ion-header>
      <ion-vue-router></ion-vue-router>
      <ion-menu-controller></ion-menu-controller>
      <ion-modal-controller></ion-modal-controller>
    </div>
  </ion-app>
</template>

<script>
import Toolbar from 'src/components/Toolbar/Toolbar'

export default {
  name: 'app',
  components: {
    Toolbar
  }
}
</script>
