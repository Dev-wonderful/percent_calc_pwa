<template>
  <section class="container">
    <div>
      <h2>Insert the number to check</h2>
      <input v-model="checkNumber" type="text" />
    </div>
    <div>
      <h2>Insert the main number</h2>
      <input v-model="mainNumber" type="text" />
    </div>
    <button v-on:click="calculate">Calculate</button>
    <div class="result">
      <h2>Percentage is:</h2>
      <p>{{ result }}%</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PercentCalc",
  data() {
    return {
      value: "hello i'm here",
      checkNumber: "",
      mainNumber: "",
      result: 0,
    };
  },
  methods: {
    calculate(): void {
      console.log("Clicked");
      // the "+" symbol in front of the variable, converts string to number
      let fnum = +this.parse(this.checkNumber);
      let snum = +this.parse(this.mainNumber);
      let percent = !fnum && !snum ? 0 : (fnum / snum) * 100;
      this.result = +percent.toFixed(8);
    },
    parse(text: string): string {
      // remove commas if present
      let parsed = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] != ",") {
          parsed += text[i];
        }
      }
      return parsed;
    },
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
section.container {
  background-color: aliceblue;
  margin: 50px auto;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  border-radius: 4px;
  border: 1px solid black;
}
section.container div {
  /* background-color: aqua; */
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border-bottom: 1px solid black; */
}
input,
div.result p {
  height: 30px;
  width: 50%;
  padding-inline: 10px;
  font-size: 20px;
  border-radius: 4px;
}
div.result p {
  border: 1px solid black;
  line-height: 30px;
  overflow: hidden;
}
button {
  height: 30px;
  margin: 20px auto 20px;
  width: 50%;
  font-size: 20px;
  border-radius: 4px;
  background-color: #2c3e50;
  border: 1px solid black;
  color: whitesmoke;
  cursor: pointer;
}
</style>
