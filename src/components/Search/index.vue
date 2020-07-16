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
