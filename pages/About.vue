<script setup lang="ts">

</script>

<template>
  <Navbar/>

  <div class="container">
    <h1 class="text-center welcome-message">Мы здесь, чтобы<br><span>гарантировать ваш успех</span></h1>

    <div class="about-block">
      <div class="about">
        <span>Автошкола "DriveSafe" предлагает профессиональное обучение вождению для новичков и опытных водителей. Наши инструкторы помогут вам уверенно овладеть навыками безопасного и комфортного управления автомобилем. Мы создаем современные программы обучения, соответствующие всем требованиям и стандартам, чтобы вы легко получили водительское удостоверение и чувствовали себя уверенно на дороге.</span>
      </div>
      <img src="@/assets/images/about/car.png" class="img-fluid">
    </div>

    <h1 class="text-center ryadom">Мы рядом,
      <span><br> где бы вы не были</span></h1>
  </div>
  <img class="map" src="@/assets/images/about/map.png">

  <div class="container">

    <div class="contents">
      <div>
        <h1>Наша <span>миссия</span></h1>
        <hr>
        <div class="row">
          <div class="col title">Индивидуальный подход </div>
          <div class="col desc">Мы помогаем каждому ученику освоить навыки безопасного и уверенного вождения, подбирая оптимальную программу обучения</div>
        </div>
        <div class="row">
          <div class="col title">Профессионализм </div>
          <div class="col desc">Наши инструкторы — сертифицированные специалисты с многолетним опытом, готовые поддержать вас на каждом этапе обучения</div>
        </div>
        <div class="row">
          <div class="col title">Опыт </div>
          <div class="col desc">Мы обучили тысячи водителей, помогая им успешно сдать экзамены и чувствовать себя уверенно на дороге.</div>
        </div>
        <div class="row">
          <div class="col title">Технологии </div>
          <div class="col desc">Современные автомобили, симуляторы и онлайн-курсы делают процесс обучения комфортным и эффективным.</div>
        </div>
      </div>
      <div class="last">
        <h1>Наши <span>принципы</span></h1>
        <hr>
        <div class="row">
          <div class="col title">Безопасность</div>
          <div class="col desc">Мы обучаем правилам дорожного движения и безопасному вождению, чтобы каждый ученик чувствовал себя уверенно на дороге</div>
        </div>
        <div class="row">
          <div class="col title">Качество </div>
          <div class="col desc">Используем современные методики обучения, симуляторы и новые автомобили, чтобы сделать процесс обучения комфортным и эффективным</div>
        </div>
        <div class="row">
          <div class="col title">Поддержка</div>
          <div class="col desc">Мы обучили тысячи водителей, помогая им успешно сдать экзамены и чувствовать себя уверенно на дороге.</div>
        </div>
        <div class="row">
          <div class="col title">Технологии </div>
          <div class="col desc">Мы сопровождаем вас на каждом этапе — от первых уроков до успешной сдачи экзамена и получения прав</div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>

.contents {
  .row {
    margin-top: 20px;
  }

  hr {
    border: 3px solid !important;
  }
  div h1 {
    margin-top: 30px;
    font-family: Unbounded-Bold;
    font-size: 48px;
    span {
      color: #2d60ee;
    }
  }
  .row {
    .title {
      color: black;
      font-family: Unbounded-Bold;
    }
  }
  .last {
    margin-bottom: 60px;
  }
}
.welcome-message {
  margin-top: 10%;
  font-size: 48px;
  font-family: Unbounded-Bold;

  span {
    color: #2d60ee;
  }
}


.map {
  margin-top: 30px;
  width: 100%;
}
.about-block {
  max-width: 100%;

  .about {
    margin-top: 40px;
    background: linear-gradient(#009FFF, #0079FF);
    padding: 40px;
    border-radius: 30px;
    color: white;

    span {
      font-size: 28px;
      @media (max-width: 728px) {
        font-size: 20px;
      }
    }
  }

  img {
    margin-top: -80px;
    margin-left: 8%;

    @media (max-width: 728px) {
      margin-top: -30px;
    }
  }
}

.ryadom {
  margin-top: -10%;

  font-size: 64px;
  font-family: Unbounded-Bold;

  span {
    color: #0197FF;
  }
}
</style>