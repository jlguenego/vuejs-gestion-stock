<template>
  <main>
    <h1>Create view</h1>
    <button @click="$router.push($route.matched[0].path)">
      Retourner au stock
    </button>
    {{ $route }}
  </main>
</template>
