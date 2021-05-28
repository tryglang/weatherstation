<template>
  <v-app>
    <v-app-bar height="dense" color="blue" app> <!-- finne en bedre måte å ha toolbar på uten at ting overlapper eller at den blir for stor -->
      <v-toolbar-title>Killingen</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <h1 class="d-flex justify-center">Værstasjon for Killingen</h1>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style>
.links{
  color: aliceblue;
}

</style>
