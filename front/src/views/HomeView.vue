<template>
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <button @click="$router.push('/stock')">Voir le stock</button>
    <button class="primary">Voir le stock</button>
    <button disabled>Voir le stock</button>
  </main>
</template>

<style scoped>
main {
  justify-content: center;
}
</style>
