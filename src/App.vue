<template>
  <v-app>
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
