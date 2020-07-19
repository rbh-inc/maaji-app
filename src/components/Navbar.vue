<template>
  <div class="navbar">
    <nav class="nav-extended grey darken-4">
      <div class="nav-content">
        <router-link :to="{ name: 'Home' }">
          <span class="nav-title">Maaji Civils</span>
        </router-link>
        <router-link :to="{ name: 'Admin' }">
          <a class="right edit-button">
            <i class="material-icons small">edit</i>
          </a>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar nav {
  padding: 0 30px;
}
.nav-title {
  font-family: "Red Rose", cursive;
}
.edit-button {
  margin-top: 20px;
  border-top: solid #3e2723 3px;
  border-bottom: solid #3e2723 3px;
}
</style>
