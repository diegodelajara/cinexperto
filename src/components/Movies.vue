<template>
  <div>
    <Movie
      v-for="movie in movies"
      :key="movie.data.id"
      :data="movie.data"/>
  </div>
</template>

<script>
import Movie from './Movie'
import {
  GET_MOVIES
} from 'src/store/modules/movies/actions.types'

export default {
  components: {
    Movie
  },
  name: "home",
  data () {
    return {
      movies: []
    }
  },
  async mounted() {
    const res = await this.$store.dispatch(GET_MOVIES)
    this.movies = res
  }
}
</script>
