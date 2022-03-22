<template>
  <v-app>
    <v-main>
      <v-container class="container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style scoped>
.container {
  height: 100%;
}
</style>