const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register a custom task
      on("task", {
        failed() {
          // You can log, notify, or perform any action here
          return null;
        },
      });
      return config;
    },
  },
});
