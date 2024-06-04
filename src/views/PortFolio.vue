<template>
  <div class="sub__page">
    <h1>PORTFOLIO</h1>

    <router-view />

    <div>
      <Intro />
    </div>
  </div>
</template>

<script>
import Intro from "../components/IntroView.vue";

export default {
  name: "app",
  components: {
    Intro,
  },
};
</script>
