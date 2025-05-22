<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="info">
        <h2>Детали для связи</h2>
        <p>Мы свяжимся с вами</p>
      </div>
      <div class="contacts">
        <div>
          <h3>Телефон</h3>
          <p>+7 (702) 555-0122</p>
          <br>
          <h3>WhatsApp</h3>
          <p>+7 (777) 011 4321</p>
        </div>
        <div>
          <h3>Офис</h3>
          <p>Алмата, ул. Мухтара Ауэзова 12</p>
          <p>1 этаж</p>
        </div>
        <div>
          <h3>Почта</h3>
          <p>drivasafesupport@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
  <div class="bottom">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="DriveSafe">
      <span>DriveSafe</span>
    </div>
    <p class="reserved">© 2025 DriveSafe All rights reserved.<br>Work creator: Kuzmin Nikita</p>
  </div>
</template>

<style scoped>
.reserved {
  color: #5D5F61;
  font-family: Unbounded;
}
* {
  font-family: Unbounded;
}

.footer {
  background: #4D79F0;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.contacts div {
  margin-bottom: 30px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.info {
  max-width: 300px;
}

.info h2 {
  font-size: 48px;
  margin-bottom: 30px;
  font-family: Unbounded-Bold;
}

.contacts {
  display: flex;
  gap: 40px;
}

.contacts h3 {
  font-size: 16px;
  font-family: Unbounded-Bold;
}

.contacts p {
  font-size: 14px;
  margin: 0;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 15px 20px;
  margin-top: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 30px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
  }

  .contacts {
    flex-direction: column;
    gap: 10px;
  }

  .bottom {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}
</style>
