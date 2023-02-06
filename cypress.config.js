const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.edu.goit.global",
    env: {
      username: "user888@gmail.com",
      password: "1234567890",
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
