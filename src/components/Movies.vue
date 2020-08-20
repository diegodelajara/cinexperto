<template>
  <div>
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title"
      :image="movie.image"
      :genre="movie.genre"/>
  </div>
</template>

<script>
import Movie from './Movie'
import { moviesRef } from '../../firebaseConfig'

export default {
  firebase: {
    movies: moviesRef
  },
  components: {
    Movie
  },
  name: "home",
  data () {
    return {
      movies: []
    }
  },
  // async mounted() {
  //   const res = await this.$store.dispatch(GET_MOVIES)
  //   this.movies = res
  // }
}
</script>
