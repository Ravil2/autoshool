<script setup lang="ts">

import InstructorList from "~/components/home/InstructorList.vue";
import ResponsesData from "~/components/home/ResponsesData.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <section class="record-title">
    <navbar :bg="null"/>
    <div class="container" v-motion-slide-visible-once-left :duration="300" :delay="250">
      <div class="row d-flex align-items-center">
        <div class="col listen-new">
          <h1 v-motion-slide-visible-once-left :duration="300" :delay="250">
            Научим водить уверенно и безопасно
          </h1>
          <p v-motion-slide-visible-once-left :duration="300" :delay="350">
            <span>DriveSafe</span> – это автошкола, где ваша безопасность на дороге становится приоритетом...
          </p>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" v-motion-slide-visible-once-left :duration="300" :delay="450">
            Записаться
            <svg class="ms-3" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 12H19" stroke="#F7F8FA" stroke-width="2" stroke-linecap="round"/>
              <path d="M12 5L19 12L12 19" stroke="#F7F8FA" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="col">
          <div class="main-car"
               v-motion-slide-visible-once-left
               :duration="300"
               :delay="550">
            <img src="@/assets/images/main-car.png" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="base-content">
    <div class="container" v-motion-slide-visible-once-left :duration="300" :delay="250">
      <h1 class="mt-5" v-motion-slide-visible-once-left :duration="300" :delay="350">
        Освой вождение легко и уверенно!
      </h1>
      <div class="content">
        <div class="cards">
          <div class="card first" v-motion-slide-visible-once-left :duration="300" :delay="450">
            <b>01</b>
            <span>Индивидуальный подход к каждому ученику</span>
            <div class="data">
              <img src="@/assets/images/obuchenie.png">
              <div class="text">
                <b>Обучение</b>
                <span>Мы подбираем программу обучения с учетом ваших навыков и опыта</span>
              </div>
            </div>
          </div>
          <div class="card second" v-motion-slide-visible-once-left :duration="300" :delay="550">
            <b>02</b>
            <span>Опытные инструкторы и современные автомобили</span>
            <div class="data">
              <img src="@/assets/images/comfort.png">
              <div class="text">
                <b>Комфорт</b>
                <span>Наши инструкторы помогут вам освоить вождение уверенно и без стресса</span>
              </div>
            </div>
          </div>
          <div class="card trhee" v-motion-slide-visible-once-left :duration="300" :delay="650">
            <b>03</b>
            <span>Гибкий график занятий</span>
            <div class="data">
              <img src="@/assets/images/udobstvo.png">
              <div class="text">
                <b>Удобство</b>
                <span>Выбирайте удобное время занятий — утром, днём или вечером</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="instruction">
    <div class="container">
      <div class="center-items" v-motion-slide-visible-once-left :duration="300" :delay="250">
        <div class="logo">
          <img src="@/assets/images/logo.svg" class="img-fluid">
          <p>Drive Safe</p>
        </div>
        <div class="messages">
          <h1 v-motion-slide-visible-once-left :duration="300" :delay="350">Опытные инструкторы</h1>
          <h2 v-motion-slide-visible-once-left :duration="300" :delay="450">которые помогут вам освоить вождение</h2>
          <span v-motion-slide-visible-once-left :duration="300" :delay="550">
            Не уверены в своих навыках? Не волнуйтесь! Наши профессиональные преподаватели помогут вам стать уверенным водителем.
          </span>
        </div>
      </div>

      <InstructorList v-motion-slide-visible-once-left :duration="300" :delay="650"/>
    </div>
  </section>

  <section class="responses">
    <div class="d-flex flex-column" v-motion-slide-visible-once-left :duration="300" :delay="250">
      <h1 class="text-center text-uppercase" v-motion-slide-visible-once-left :duration="300" :delay="350">
        Реальные отзывы от тех, кто уже уверенно водит!
      </h1>
      <h1 class="text-center second-t" v-motion-slide-visible-once-left :duration="300" :delay="450">
        Что говорят наши ученики
      </h1>
    </div>

    <responses-data v-motion-slide-visible-once-left :duration="300" :delay="550"/>
  </section>

  <section class="go-to-price">
    <div class="container">
      <div class="go">
        <div class="image-wrapper">
          <img src="@/assets/images/car-down-home.png" alt="car" />
          <div class="overlay">
            <h1>Готовы начать обучение?</h1>
            <span>
              Мы предлагаем удобные и эффективные уроки вождения для всех уровней подготовки. Ознакомьтесь с ценами и выберите идеальный вариант для себя!
            </span>
            <a href="/prices">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0685 2.5C14.0685 2.15482 13.7887 1.875 13.4435 1.875C13.0983 1.875 12.8185 2.15482 12.8185 2.5V3.54167H7.40186V2.5C7.40186 2.15482 7.12204 1.875 6.77686 1.875C6.43168 1.875 6.15186 2.15482 6.15186 2.5V3.54167H5.11019C3.84454 3.54167 2.81853 4.56768 2.81853 5.83333V9.16667V15.8333C2.81853 17.099 3.84454 18.125 5.11019 18.125H15.1102C16.3758 18.125 17.4019 17.099 17.4019 15.8333V9.16667V5.83333C17.4019 4.56768 16.3758 3.54167 15.1102 3.54167H14.0685V2.5ZM16.1519 8.54167V5.83333C16.1519 5.25804 15.6855 4.79167 15.1102 4.79167H14.0685V5.83333C14.0685 6.17851 13.7887 6.45833 13.4435 6.45833C13.0983 6.45833 12.8185 6.17851 12.8185 5.83333V4.79167H7.40186V5.83333C7.40186 6.17851 7.12204 6.45833 6.77686 6.45833C6.43168 6.45833 6.15186 6.17851 6.15186 5.83333V4.79167H5.11019C4.5349 4.79167 4.06853 5.25804 4.06853 5.83333V8.54167H16.1519ZM4.06853 9.79167H16.1519V15.8333C16.1519 16.4086 15.6855 16.875 15.1102 16.875H5.11019C4.5349 16.875 4.06853 16.4086 4.06853 15.8333V9.79167Z" fill="#fff"/>
              </svg>
              Посмотреть стоимость обучения
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer v-motion-slide-visible-once-left :duration="300" :delay="650"/>
</template>


<style scoped>

.record-title {
  background: url("@/assets/images/home-bg.png");

  @media (max-width: 728px) {
    img {
      display: none;
    }

    align-items: center;
    padding: 30px;
  }

  .listen-new {
    h1 {
      font-size: 68px;
      font-weight: bold;
      font-family: Unbounded-Bold;
      @media (max-width: 728px) {
        font-size: 32px;
      }

    }

    p {
      font-size: 16px;
      font-weight: normal;
      font-family: Unbounded;
      margin: 20px 0;
      color: #555A65;

      span {
        color: #4D79F0;
      }
    }

    button {
      background: #4D79F0;
      margin-top: 20px;
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      transition: 0.3s;

      &:hover {
        background: #2d60ee;
      }
    }
  }
}
.base-content {
  background: #F3F6FF;
  background: url("@/assets/images/second-bg.jpg");
  background-size: cover;
  object-fit: cover;
  height: auto;

  .content {
    margin-top: 50px;

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 30px;

      @media (max-width: 728px) {
        justify-content: center;
      }

      .card {npm run dev

        &.first {
          margin-top: 60px !important;
        }
        &.second {
          margin-top: 20px;
        }
        &.trhee {
          margin-top: 0px;
        }

        display: flex;
        flex-direction: column;
        border: none;
        background: none;
        border-radius: 12px;
        overflow: hidden;
        width: 400px;
        height: 600px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin-bottom: 100px;

        @media (max-width: 728px) {
          align-items: center;
        }

        &:hover {
          transform: scale(1.35);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        b {
          font-size: 32px;
          color: rgba(37, 37, 37, 0.35);
          margin: 16px;
        }

        span {
          color: rgba(37, 37, 37, 0.8);
          font-size: 24px;
          margin: 0 16px 16px;
        }

        .data {
          position: relative;
          width: 100%;


          img {
            width: 400px;
            height: 600px;
            object-fit: cover;
            border-radius: 0 0 12px 12px;
            transition: 0.4s;
            &:hover {
              transform: scale(1.05);
              box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
            }
          }

          .text {
            position: absolute;
            bottom: 200px;
            color: white;
            padding: 12px;
            border-radius: 8px;

            b {
              font-size: 18px;
              color: white;
            }

            span {
              font-size: 14px;
              color: white;
              display: block;
              margin-top: 4px;
              max-width: 250px;
            }
          }
        }
      }
    }
  }

  h1 {
    background: #4D79F0;
    border-radius: 19px;
    font-size: 72px;
    color: white;
    padding: 20px 20px;
    display: inline-block;
    line-height: 1.2;
    text-align: left;

    @media (max-width: 728px) {
      font-size: 32px;
    }
  }

}
.instruction {
  background: #F3F6FF;

  .center-items {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;

      p {
        font-family: Unbounded-Bold;
        margin: 0;
        margin-left: 15px;
      }
    }
    .messages {
      margin-top: 20px;
      font-family: Unbounded-Bold;

      span {
        margin-top: 30px !important;
        font-family: Unbounded;
      }
    }
  }
}
.responses {
  background: url("@/assets/images/responses-bg.png") no-repeat center / cover;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  h1 {
    color: white;
    font-size: 20px;
    padding-top: 20px;
  }
  .second-t {
    font-size: 48px;
    color: white;
    font-family: Unbounded-Bold;
  }
}
.go-to-price {
  position: relative;
  justify-content: center;
  margin: auto;

  .image-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 68px;
    margin-bottom: 10px;
    font-family: Unbounded-Bold;
  }

  span {
    font-size: 14px;
    margin-bottom: 20px;
    font-family: Unbounded;
    color: rgba(255, 255, 255, 0.71);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    text-align: center;

    padding: 15px 55px;
    max-width: 500px;
    font-weight: bold;
    color: #000;
    border-radius: 16px;
    transition: 0.3s;

    text-decoration: none;
  }

  a svg {
    margin-right: 10px;
    fill: black;
    path {
      fill: black;
    }
  }

  a:hover {
    background: #2d60ee;
    color: white;

    svg {
      fill: white;
      path {
        fill: white
      }
    }
  }

  @media (max-width: 768px) {
    border-radius: 20px;

    .overlay {
      width: 90%;
      padding: 25px;
      height: 200px;
      border-radius: 20px;

    }
    img {
      height: 600px;
      object-fit: cover;
      border-radius: 20px !important;
    }

    h1 {
      font-size: 22px;
    }

    span {
      font-size: 16px;
    }

    a {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .overlay {
      width: 95%;
      padding: 25px;
    }

    h1 {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }

    a {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
}
</style>