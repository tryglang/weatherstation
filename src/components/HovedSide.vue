<template>
  <div>
      <div>
        <div class="mb-4 d-flex justify-center flex-wrap">
      <v-card :width="200" class="mr-4">
        <router-link :to="{name: 'LuftTemp'}" style="text-decoration: none; color: inherit;">
          <div>
            <v-card-title class="justify-center">Lufttemperatur</v-card-title>
            <v-divider></v-divider>
            <p class="mt-5 mb-5 d-flex justify-center">{{luftTemp}}°C</p>
           <!-- <p class="link d-flex justify-center">Mer info-></p>--> <!-- vet ikke om jeg vil ha med dette eller ikke-->
          </div>
        </router-link>
      </v-card>

      <v-card :width="200" class="ml-4">
        <router-link :to="{name: 'VannTemp'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vanntemperatur</v-card-title>
        <v-divider></v-divider>
        <div class="d-flex justify-center flex-wrap">
          <h4>0,2m</h4>
          <p class="mr-7">{{værData.vannTempGrunn}}°C</p><!-- se i display-modalene i bacheloren for kanskje eksempel for hvordan disse kan ligge ved siden av hverandre -->
          <v-divider vertical></v-divider>
          <p>0,5m</p>
          <p class="ml-7">{{værData.vannTempDyp}}°C</p>
        </div>
        </router-link>
      </v-card>
        </div>
        
    <div class="mt-4 d-flex justify-center flex-wrap">
      <v-card :width="200" class="mr-4">
        <router-link :to="{name: 'VannStand'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vannstand</v-card-title>
        <v-divider></v-divider>
        <p class="mt-5 mb-5 d-flex justify-center">{{værData.vannStand}}cm</p>
        </router-link>
      </v-card> 

      <v-card :width="200" class="ml-4">
        <router-link :to="{name: 'Vind'}" style="text-decoration: none; color: inherit;">
        <v-card-title class="justify-center">Vindfart</v-card-title>
        <v-divider></v-divider>
        <p class="mt-5 mb-5 d-flex justify-center">{{værData.vindFart}}m/s</p>
        </router-link>
      </v-card>
    </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    luftTemp: 23,
    værData: {luftTemp: 23, vannTempDyp: 12, vannTempGrunn: 16, vannStand: 26, vindFart: 4}
  }
}
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