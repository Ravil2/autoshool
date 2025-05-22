<script setup lang="ts">

</script>
<template>
  <div class="instructors">
    <div class="instructor active" v-motion-slide-visible-once-left :duration="400" :delay="200">
      <img src="@/assets/images/nurlan.png" />
      <div class="data">
        <h1>Нурлан Нысысбай</h1>
        <p class="level">Инструктор</p>
        <p class="stazh">Стаж работы: 5 лет</p>
        <span class="description">Отличается индивидуальным подходом к каждому ученику, терпением и умением объяснять сложные моменты простыми словами</span>
      </div>
    </div>
    <div class="instructor" v-motion-slide-visible-once-bottom :duration="500" :delay="300">
      <img src="@/assets/images/alexandr.png" />
      <div class="data">
        <h1>Александр Сорокин</h1>
        <p class="level">Преподаватель</p>
        <p class="stazh">Стаж работы: 8 лет</p>
        <span class="description">Спокойствие, терпение и чёткие объяснения – три главных качества Александра. Его задача — не просто научить водить, а сделать из ученика уверенного и ответственного водителя</span>
      </div>
    </div>
    <div class="instructor active" v-motion :initial="{ opacity: 0, rotate: -10, scale: 0.9 }" :enter="{ opacity: 1, rotate: 0, scale: 1, transition: { duration: 600, delay: 400 } }">
      <img src="@/assets/images/vselovod.png" />
      <div class="data">
        <h1>Всеволод Серебряков</h1>
        <p class="level">Инструктор</p>
        <p class="stazh">Стаж работы: 3 года</p>
        <span class="description">Использует инновационные методики, помогает ученикам быстрее освоить навыки вождения и справляться с волнением за рулем</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.instructors {
  margin-top: 50px;
  background: #FBF9F5;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  .instructor {
    transition: 0.3s;
    cursor: pointer;
    width: 380px;
    max-width: 100%;

    &:hover {
      transform: scale(1.09);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
    }

    .data {
      text-align: center;
      font-family: Unbounded;
      background: #DEE7FF;
      padding: 20px;
      border-radius: 0 0 20px 20px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.09);
      }

      h1 {
        font-size: 22px;
        font-family: Unbounded-Bold;
      }

      .description {
        font-size: 14px;
      }
    }
  }

  .active .data {
    background: #4D79F0;
    color: #FFFFFF;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;

    .instructor {
      width: 45%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .instructor {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    .data {
      padding: 15px;

      h1 {
        font-size: 18px;
      }

      .description {
        font-size: 13px;
      }
    }
  }
}

</style>