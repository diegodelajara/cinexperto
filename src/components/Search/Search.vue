<template>
  <ion-searchbar placeholder="Buscar película"></ion-searchbar>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    searchMovie(e) {
      this.text = e.target.value
    }
  }
}
</script>
