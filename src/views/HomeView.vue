<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <PercentCalc />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PercentCalc from "@/components/PercentCalc.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    PercentCalc,
  },
});
</script>
