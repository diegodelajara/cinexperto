<template>
    <ion-slides pager="true" :options="slideOpts" mode="ios">
      <ion-slide>
        <ion-card>
          <ion-img width="80" height="80" :src="img"></ion-img>
        </ion-card>
      </ion-slide>
      <ion-slide>
        <ion-card>
          <ion-img width="80" height="80" :src="img"></ion-img>
        </ion-card>
      </ion-slide>
      <ion-slide>
        <ion-card>
          <ion-img width="80" height="80" :src="img"></ion-img>
        </ion-card>
      </ion-slide>
      <ion-slide>
        <ion-card>
          <ion-img width="80" height="80" :src="img"></ion-img>
        </ion-card>
      </ion-slide>
      <ion-slide>
        <ion-card>
          <ion-img width="80" height="80" :src="img"></ion-img>
        </ion-card>
      </ion-slide>
    </ion-slides>
</template>

<script>


export default {
  data () {
    return {
      img: require('src/assets/madison.jpg'),
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
    margin: 0 5px;
    .sc-ion-card-ios-h.sc-ion-card-ios-s.ios.hydrated {
      margin: 10px 0 10px 10px;
    }
  }
  .swiper-pagination {
    &.swiper-pagination-bullets {
      display: none;
    }
  }
</style>