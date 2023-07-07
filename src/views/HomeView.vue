<template>
  <div class="home">
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
