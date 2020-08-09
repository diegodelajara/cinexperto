<template>
  <ion-slides pager="true" :options="slideOpts" mode="ios">
    <ion-slide>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>

<script>


export default {
  data () {
    return {
      slideOpts: {
        initialSlide: 1,
        speed: 400
      }
    }
  }
}
</script>

<style lang="scss">
  .swiper-slide {
    width: 200px !important;
  }
  .swiper-pagination {
    &.swiper-pagination-bullets {
      display: none;
    }
  }
</style>