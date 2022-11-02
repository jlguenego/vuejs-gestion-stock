<template>
  <dynamic-title title="Accueil" />
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <button v-on:click="$router.push('/stock')">Voir le stock</button>
  </main>
</template>

<style scoped>
main {
  justify-content: center;
}
</style>
