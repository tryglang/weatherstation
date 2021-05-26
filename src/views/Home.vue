<template>
<div>
  <HovedSide />
    <p>
      <router-link to="/">Home</router-link>
    </p>
    <p>
      <router-link to="/about">About</router-link>
    </p>
</div>
</template>

<script>
  import HovedSide from '../components/HovedSide'

  export default {
    name: 'Home',

    components: {
      HovedSide,
    },
  }
</script>
