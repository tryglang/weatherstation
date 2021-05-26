<template>
  <div>
      <h1 class="d-flex justify-center">Værstasjon for Killingen</h1>
      <div>
        <div class="d-flex justify-center flex-wrap">
      <v-card :width="200">
        <router-link :to="{name: 'LuftTemp'}" style="text-decoration: none; color: inherit;">
          <div>
            <v-card-title class="justify-center">Lufttemperatur</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="d-flex justify-center">23°C</v-card-text>
          </div>
        </router-link>
      </v-card>

      <v-card :width="200">
        <router-link :to="{name: 'VannTemp'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vanntemperatur</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-center">16°C</v-card-text>
        </router-link>
      </v-card>
        </div>
        
    <div class="d-flex justify-center flex-wrap">

      <v-card :width="200">
        <router-link :to="{name: 'VannStand'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vannstand</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-center">25cm</v-card-text>
        </router-link>
      </v-card> 

      <v-card :width="200">
        <router-link :to="{name: 'Vind'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vindfart</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-center">5m/s</v-card-text>
        </router-link>
      </v-card>

    </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .linkcleaner{
    text-decoration: none;
    color: #121212;
  }
</style>