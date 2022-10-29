<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <div>Nom</div>
        <input type="text" />
      </label>
      <label>
        <div>Prix</div>
        <input type="text" />
      </label>
      <label>
        <div>Quantité</div>
        <input type="text" />
      </label>
      <button type="button" @click="$router.push($route.matched[0].path)">
        Ajouter
      </button>
    </form>
  </main>
</template>
