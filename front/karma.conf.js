// Karma configuration file
// https://karma-runner.github.io/latest/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",

    frameworks: [
      "jasmine",
      "@angular-devkit/build-angular"
    ],

    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],

    client: {
      jasmine: {},
      clearContext: false,
    },

    jasmineHtmlReporter: {
      suppressAll: true,
    },

    // ==========================================
    // CODE COVERAGE
    // ==========================================
    coverageReporter: {
      dir: require("path").join(
        __dirname,
        "./coverage/microcrm"
      ),

      subdir: ".",

      reporters: [
        // Rapport HTML pour consultation locale
        {
          type: "html"
        },

        // Rapport LCOV utilisé par SonarQube
        {
          type: "lcovonly",
          file: "lcov.info"
        },

        // Résumé affiché dans le terminal
        {
          type: "text-summary"
        }
      ],
    },

    reporters: [
      "progress",
      "kjhtml"
    ],

    browsers: [
      "ChromeHeadlessNoSandbox",
      "ChromeHeadless",
      "Chrome"
    ],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage"
        ],
      },
    },

    restartOnFileChange: true,
  });
};