<script setup lang="ts">
const users = [
  {
    "stars": 4,
    "user": {"name": "Анна К.", "slug": "А.К"},
    "text": "Я всегда боялась садиться за руль, но благодаря профессионализму инструктора страх исчез. Все объяснялось четко и доступно, уроки проходили в спокойной атмосфере. Теперь езжу уверенно и без стресса!"
  },
  {
    "stars": 4,
    "user": {"name": "Игорь М.", "slug": "И.М."},
    "text": "Очень благодарен автошколе DriveSafe! Теория изложена максимально понятно, а практика помогла мне освоить все маневры. Инструктор терпеливо отвечал на все вопросы и поддерживал на каждом этапе."
  },
  {
    "stars": 4,
    "user": {"name": "Екатерина Н.", "slug": "Е.Н."},
    "text": "Преподаватели знают свое дело, но организация занятий оставляет желать лучшего. Были переносы уроков, из-за чего обучение затянулось. Но всё же научилась водить, и это главное!"
  },
  {
    "stars": 3,
    "user": {"name": "Дмитрий К.", "slug": "Д.К."},
    "text": "Цены выше, чем в некоторых других автошколах, и обучение растянулось из-за нехватки свободных мест на практике. Инструктор хороший, но иногда говорил слишком быстро."
  },
  {
    "stars": 5,
    "user": {"name": "Владимир С.", "slug": "В.С."},
    "text": "Отличные преподаватели, удобный график и хорошие машины для обучения. Все занятия проходили в дружелюбной атмосфере, и теперь я с уверенностью выезжаю на дорогу. Спасибо автошколе!"
  },
  {
    "stars": 5,
    "user": {"name": "Марина Л.", "slug": "М.Л."},
    "text": "Отличная школа! Машины новые, уроки интересные, а преподаватели — настоящие профессионалы. Теперь я уверенный водитель!"
  }
]
</script>

<template>
  <div class="container">
    <div class="responses-data">
      <div class="response" v-for="user in users">
        <div class="stars d-flex gap-2">
          <svg
              v-for="i in user.stars"
              width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.5644 0.272788C10.7557 -0.0665348 11.2443 -0.0665351 11.4356 0.272787L14.6965 6.05822C14.7678 6.1848 14.8907 6.27409 15.0332 6.30283L21.5431 7.61634C21.9249 7.69338 22.0759 8.1581 21.8123 8.44486L17.3177 13.334C17.2194 13.4409 17.1724 13.5854 17.1891 13.7298L17.9516 20.327C17.9963 20.7139 17.601 21.0011 17.2468 20.839L11.2081 18.0752C11.076 18.0148 10.924 18.0148 10.7919 18.0752L4.7532 20.839C4.39902 21.0011 4.0037 20.7139 4.04842 20.327L4.81088 13.7298C4.82756 13.5854 4.78062 13.4409 4.68228 13.334L0.187687 8.44486C-0.0759266 8.1581 0.0750707 7.69338 0.456887 7.61634L6.96683 6.30283C7.10927 6.27409 7.23217 6.1848 7.30352 6.05822L10.5644 0.272788Z"
                fill="#4D79F0"/>
          </svg>
        </div>
        <div class="message">
          <span>{{ user.text }}</span>
        </div>
        <div class="user d-flex">
          <div class="avatar">{{ user.user.slug }}</div>
          <span>{{ user.user.name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.responses-data {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin: 50px 0;


  .response {
    @media (max-width: 1399px) {
      justify-content: center;
    }

    transition: 0.3s;

    &:hover {
      background: #6d6def;
      color: white;

      svg {
        stroke: white;
        fill: white;

        path {
          fill: white;
        }
      }

      .user {
       .avatar {
        background: #F3F6FF;
         color: black;
      }
      }
    }

    background: white;
    padding: 30px;
    width: 400px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

    * {
      margin: 10px 0;
    }

    .message {
      flex-grow: 1;
    }

    .user {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .avatar {
        transition: 0.9s;
        margin-right: 20px;
        width: 50px;
        height: 50px;
        background: #333742;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
}

</style>