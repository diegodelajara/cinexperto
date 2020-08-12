<template>
  <div class="ion-page">
    <ion-header>
      <Toolbar />
    </ion-header>
    <ion-content padding>
      <Search />
      <home-slider />
      <Movies />
    </ion-content>
  </div>
</template>

<script>
import Search from 'src/components/Search/Search'
import HomeSlider from 'src/components/HomeSlider'
import Movies from './Movies'
import Toolbar from 'src/components/Toolbar/Toolbar'

export default {
  components: {
    HomeSlider,
    Movies,
    Search,
    Toolbar
  }
}
</script>

<style>

</style>