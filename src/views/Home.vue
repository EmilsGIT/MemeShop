<template>
<v-container grid-list-xs>
  <v-layout align-center class="info_box">
    <v-flex sm2 xs12 offset-sm9>
<h1>The Memeshop</h1>
<div>
  <p>Memes for any occasion</p>
</div>
    </v-flex>
  </v-layout>
    <v-layout align-center class="info_box" row wrap>
    <v-flex sm2 xs12 offset-sm1>
<h1>Memes for Funerals</h1>
<div>
  <p>buy our bagels</p>
</div>
    </v-flex>
        <v-flex sm2 xs12>
<h1>Memes to impress</h1>
<div>
  <p>buy our bagels</p>
</div>
    </v-flex>
        <v-flex sm2 xs12>
<h1>Casual Memes</h1>
<div>
  <p>buy our bagels</p>
</div>
    </v-flex>
    
  </v-layout>
</v-container>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    //HelloWorld
  },
}
</script>

<style lang="scss">
    .info_box .flex h1 {
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
      text-align:center;
    }

    .info_box .flex div {
      background-color: white;
      padding:20px;
    }

    .layout:first-child {
        height: 40vh;
    }
</style>