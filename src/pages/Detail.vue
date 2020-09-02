<template>
  <div class="ion-page">
    <ion-content padding>
      <Movie
        :id="id"
        :title="title"
        :image="image"
        :genre="genre"/> 
    </ion-content>
  </div>
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
  }
}
</script>
