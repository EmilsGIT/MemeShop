<template>
  <v-app id="app">
    <navigation />


    <v-content>
        <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import navigation from './components/navigation.vue';


  export default {
     components: {
    navigation
  },
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss">

main {
 background-image: url('./assets/image001.png');
 background-size: cover;
}

   .col h1  {
       //@include infobox_mixin()
       border: solid;
       border-radius: 5px;
        border-color: white;
      padding: 10px;
     margin-bottom: 5px;
      color:white;
      font-weight: bold;
      text-transform: uppercase;
      font-size:16px;
      text-align:left;
    }

       .col:last-child h1 {
       //@include infobox_mixin()
       border: solid;
       border-radius: 5px;
        border-color: white;
      padding: 10px;
     margin-bottom: 5px;
      color:white;
      font-weight: bold;
      text-transform: uppercase;
      font-size:16px;
      text-align:left;
    }

#info {
    background-color: white;
}
</style>