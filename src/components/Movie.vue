<template>
  <ion-card>
    <img :src="data.thumbnail" alt="image movie" />
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title>{{ data.title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-button v-if="path !== '/detail'" @click="viewMore(data)">
        Ver más
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      path: null
    }
  },
  mounted() {
    this.path = this.$route.path
  },
  methods: {
    viewMore(post) {
      this.$router.push({ name: 'detail', params: {post}})
    }
  }
}
</script>

<style scoped>
</style>
