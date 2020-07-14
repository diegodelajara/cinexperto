<template>
  <Movie :data="post" />
</template>

<script>
import Movie from './Movie'

export default {
  components: {
    Movie
  },
  props: ['post']
}
</script>

<style>

</style>