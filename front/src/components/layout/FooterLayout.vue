<template>
  <footer>
    <RouterLink to="/legal"> Mentions Légales </RouterLink>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: inherit;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
