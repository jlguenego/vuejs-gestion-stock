<script lang="ts" setup></script>

<template>
  <main>
    <h1>List view</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <button @click="$router.push($route.path + '/create')">Ajouter</button>
        <button>Supprimer</button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">2.44 €</td>
            <td class="qty">100</td>
          </tr>
          <tr>
            <td class="name">Pioche</td>
            <td class="price">8.00 €</td>
            <td class="qty">20</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">5.50 €</td>
            <td class="qty">54</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">3.45 €</td>
            <td class="qty">34</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
div.content {
  display: flex;
  flex-flow: column;
  gap: 0.5em;
}

nav {
  display: flex;
  gap: 0.3em;
}
</style>
