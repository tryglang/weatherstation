<template>
  <div>
      <div>
        <div class="mb-4 d-flex justify-center flex-wrap">
      <v-card :width="200" class="mr-4">
        <router-link :to="{name: 'LuftTemp'}" style="text-decoration: none; color: inherit;">
          <div>
            <v-card-title class="justify-center">Lufttemperatur</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="mt-5 d-flex justify-center">23°C</v-card-text>
            <v-card-text class="link d-flex justify-center">Mer info-></v-card-text> <!-- vet ikke om jeg vil ha med dette eller ikke-->
          </div>
        </router-link>
      </v-card>

      <v-card :width="200" class="ml-4">
        <router-link :to="{name: 'VannTemp'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vanntemperatur</v-card-title>
        <v-divider></v-divider>
        <div class="d-flex justify-center flex-wrap">
        <v-card-text class="d-flex">16°C</v-card-text><!-- se i display-modalene i bacheloren for kanskje eksempel for hvordan disse kan ligge ved siden av hverandre -->
        <v-divider vertical></v-divider>
        <v-card-text class="d-flex">14°C</v-card-text>
        </div>
        </router-link>
      </v-card>
        </div>
        
    <div class="mt-4 d-flex justify-center flex-wrap">
      <v-card :width="200" class="mr-4">
        <router-link :to="{name: 'VannStand'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vannstand</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="d-flex justify-center">25cm</v-card-text>
        </router-link>
      </v-card> 

      <v-card :width="200" class="ml-4">
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

  .link{
    color: blue;
  }
</style>