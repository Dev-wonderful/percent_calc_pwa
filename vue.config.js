const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Percentage Calculator",
    themeColor: "#2c3e50"
  }
});
