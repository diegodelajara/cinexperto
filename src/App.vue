<template>
  <ion-app>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/loading"></ion-back-button>
      </ion-buttons>
      <!-- <ion-buttons slot="secondary">
        <ion-button>
          Cinexperto
        </ion-button>
      </ion-buttons> -->
      <ion-title>
        Cinexperto
      </ion-title>
    </ion-toolbar>
    <ion-content>
      <Search />
      <pre v-for="(movie, key) in todos" :key="key">
        {{ movie.email }}
      </pre>
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script>
import Search from 'src/components/Search'

import firebase from 'firebase/app'
import 'firebase/database'
import config from 'src/firebase/config'
const app = firebase.initializeApp(config)
const db = app.database()
const moviesRef = db.ref('movies')

export default {
  firebase: {
    todos: moviesRef,
  },
  name: 'App',
  components: {
    Search
  },
  data: () => ({
    todos: []
  })
}
</script>
