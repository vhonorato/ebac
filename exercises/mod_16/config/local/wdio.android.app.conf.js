const { join } = require("path");
const { generalConf } = require("../general/general.conf");

exports.config = {
  ...generalConf,
  specs: ["./test/specs/android/**/*spec.js"],

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
      newCommandTimeout: 240,
    },
  ],
};
