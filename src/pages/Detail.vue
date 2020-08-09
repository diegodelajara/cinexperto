<template>
<section>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding></ion-content>
  </ion-page>
  <Movie
    :id="id"
    :title="title"
    :image="image"
    :genre="genre"/>
</section>
</template>

<script>
import Movie from 'src/components/Movie'

export default {
  components: {
    Movie
  },
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
}
</script>

<style>

</style>