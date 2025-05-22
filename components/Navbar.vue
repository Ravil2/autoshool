<script setup lang="ts">

</script>

<template>
  <div class="container">
    <nav>
      <div class="logo">
        <img src="@/assets/images/logo.svg">
        <b>DriveSafe</b>
      </div>
      <div class="links">
        <a href="/">Главная</a>
        <a href="/about">О нас</a>
        <a href="/prices">Цены</a>
      </div>
      <div class="button-here">
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal" >Записаться</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  align-items: center;

  @media (max-width: 728px) {
    * {
      margin: 10px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    b {
      font-family: Unbounded-Bold;
      margin-left: 20px;
    }
  }
  .links {
    display: flex;
    gap: 20px;
    a {
      text-decoration: none;
      color: gray;
    }
  }

  button {
    border: #2d60ee 3px solid;
    padding: 10px 30px;
    background: none;
    color: #2d60ee;
    font-family: Unbounded-Bold;
    border-radius: 15px;
    transition: 0.3s;

    &:hover {
      background: #2d60ee;
      color: white;
    }
  }
}
</style>