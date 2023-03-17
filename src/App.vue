<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  
  #app{
    background-image:url('./assets/img/bgimg1.png');
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(217, 28%, 24%);
  background-blend-mode: multiply;
  }
</style>