<template>
  <section>
    <h1>Your site belongs here.</h1>
    <a class="button" href="https://getbethel.com">Create with us</a>
    <logo class="powered-by" color="#FFF" />
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Site not found'
    }
  }
}
</script>

<style scoped>
section {
  align-items: center;
  background: linear-gradient(135deg, #106982 0%, #85D8CE 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
h1 {
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 8px;
}
a.button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  padding: 8px 15px;
  text-decoration: none;
}
.powered-by {
  bottom: 1rem;
  height: 1.5rem;
  margin: 0;
  position: absolute;
}
</style>
