<template>
  <header>
    <div id="info">
      <p><strong>Frank Congson</strong></p>
      <p>Design Systems Engineer</p>
      <p>Remote, New Zealand 🇳🇿</p>
    </div>
    <div id="contact">
      <ul>
        <li><a href="">Twitter</a></li>
        <li><a href="">GitHub</a></li>
        <li><a href="">LinkedIn</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  max-width: 1600px;
  font-size: 0.75rem;
}
#info {
  text-align: left;
}
#contact {
  text-align: right;
}
div {
  padding: 1rem;
}
p,
ul,
li {
  margin: 0.5rem auto;
}
ul {
  list-style-type: none;
}
</style>
