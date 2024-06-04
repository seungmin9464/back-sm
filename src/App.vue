<template>
  <HeaderComponents />
  <router-view />
</template>

<script>
import HeaderComponents from "../src/components/HeaderComponents.vue";

export default {
  name: "app",
  components: {
    HeaderComponents,
  },
};
</script>
