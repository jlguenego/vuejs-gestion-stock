<template>
  <header>
    <RouterLink to="/">
      <img src="/images/logo.svg" alt="Logo" />
      <span>{{ $appName }}</span>
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 3em;
  background-color: #eee;
  padding: 0.5em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: inherit;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }

    img {
      height: 2.5em;
    }
    span {
      font-size: 1.3em;
      font-weight: bold;
    }
  }
}
</style>
