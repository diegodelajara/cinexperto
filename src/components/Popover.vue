<template>
  <div>
    <ion-list-header>
        <ion-label>Calificación: {{ calification * 20 }}</ion-label>
    </ion-list-header>
    <ion-row class="ion-align-items-center">
      <ion-col v-for="i in 5" :key="i" @click="onRate(i)" class="ion-text-center">
        <ion-icon v-if="i <= calification" name="star" color="warning" size="large"></ion-icon>
        <ion-icon v-else name="star-outline" color="grey" size="large"></ion-icon>
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calification: null
    }
  },
  methods: {
    onRate(value) {
      this.calification = value
    }
  },
}
</script>

<style scoped lang="scss">
  .my-custom-class {
    ion-col {
      padding-left: 5px;
    }
}
</style>