const { join } = require("path");
const allure = require("allure-commandline");
const video = require("wdio-video-reporter");

exports.config = {
  hostname: "localhost",
  port: 4723,
  // user: "viniciushonorato_AUMh1o",
  // key: "FsnkJurUaVqxjExYGuEf",
  services: ["appium"],
  // services: ["browserstack"],
  path: "/wd/hub",
  specs: ["./test/specs/login.spec.js"],
  framework: "mocha",
  capabilities: [
    {
      platformName: "Android",
      platformVersion: "11",
      deviceName: "ebac-qe",
      automationName: "UiAutomator2",
      app: join(process.cwd(), "./app/android/loja-ebac.apk"),
      appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
      newCommandTimeout: 240,
      // 'app' : 'bs://35cdf16b32be3498addb8929351d5508ad34b2c9',
      // 'device' : 'Samsung Galaxy S8',
      // 'os_version' : '7.0',
      // 'project' : 'Meu primeiro projeto em device farm',
      // 'build' : 'Node Android',
      // 'name': 'test_login'
    },
  ],
  waitforTimeout: 20000,
  mochaOpts: {
    timeout: 300000,
  },
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    [
      video,
      {
        saveAllVideos: true, // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
      },
    ],
  ],
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
  afterStep: function (test, scenario, { error, duration, passed }) {
    driver.takeScreenshot();
  },
};
