<template>
  <ion-input
    placeholder="Buscar"
    type="search"
    :value="text"
    @keyup="searchMovie"
  ></ion-input>
</template>

<script>
export default {
  data () {
    return {
      text: 'hola'
    }
  },
  methods: {
    searchMovie(e) {
      this.text = e.target.value
      console.log('%c this.text', 'color:pink', this.text)
    }
  }
}
</script>
