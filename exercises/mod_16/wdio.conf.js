const { join } = require("path");

exports.config = {
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",
  services: ["appium"],
  capabilities: [
    {
      platformName: "Android",
      maxInstances: 1,
      platformVersion: "11",
      deviceName: "webdriveIO",
      automationName: "UiAutomator2",
      app: join(process.cwd(), "./app/android/Android-NativeDemoApp-0.4.0.apk"),
      appPackage: "com.wdiodemoapp",
      appActivity: "com.wdiodemoapp.MainActivity",
      appWaitActivity: "com.wdiodemoapp.MainActivity",
      newCommandTimeout: 240
    },
  ],
  waitforTimeout: 20000,
  mochaOpts:{
      timeout: 300000
  }
};
