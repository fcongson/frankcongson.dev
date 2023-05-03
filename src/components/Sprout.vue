<template>
  <div>
    <p>> frankcongson.dev</p>
    <p>> waiting to sprout 🌱</p>
    <p>> <span class="cursor">_</span></p>
  </div>
</template>

<style scoped>
div {
  width: fit-content;
  text-align: left;
  margin: 0 auto;
}
p {
  font-size: 1.5rem;
  margin: 0.5rem auto;
}
@keyframes cursor-blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cursor {
  animation: cursor-blink 1.5s steps(2) infinite;
}
</style>
