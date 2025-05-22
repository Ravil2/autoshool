<template>
  <transition name="page" mode="out-in">
    <NuxtPage/>
  </transition>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0 shadow">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="signupModalLabel">Запись в автошколу</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <form id="drivingSchoolForm">
            <div class="mb-3">
              <label for="nameInput" class="form-label">Ваше имя</label>
              <input type="text" class="form-control" id="nameInput" placeholder="Введите имя" required>
            </div>
            <div class="mb-3">
              <label for="phoneInput" class="form-label">Телефон</label>
              <input type="tel" class="form-control" id="phoneInput" placeholder="+7 (___) ___-__-__" required>
            </div>
            <div class="mb-3">
              <label for="dateInput" class="form-label">Удобное время</label>
              <input type="datetime-local" class="form-control" id="dateInput" required>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button type="submit" class="btn btn-primary" form="drivingSchoolForm">Записаться</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.custom-toast {
  background: red !important;
}

html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(10px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}
</style>

<script setup lang="ts">

</script>
