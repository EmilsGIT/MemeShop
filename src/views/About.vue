<template>
<v-container grid-list-xs>
  <v-layout align-center class="info_box">
    <v-flex sm4 xs12 offset-sm1>

<h1>The Memeshop</h1>

    </v-flex>
  </v-layout>
    <v-layout align-center class="info_box" row wrap>
    <v-flex sm2 xs12 offset-sm1>
<h1>About Us</h1>
<div class="infobox">
  <p>
    Lonely and sad?<br>
    Feels like your friends don't appreciate your humor?<br>
    The Memeshop sells cheap, watermark-free memes to share with your friend(s), <br>
    instant gradification guaranteed.
    </p>
</div>

    </v-flex>
    
  </v-layout>
</v-container>
</template>

<style lang="scss" scoped>
.info_box:first-child .flex h1 {
  font-size: 150%;
  padding: 50px;
}

.infobox {
  width: 650px;
}
</style>