const { join } = require("path");

exports.config = {
  //hostname: "localhost",
  //port: 4723,
  //path: "/wd/hub",
  user: "viniciushonorato_AUMh1o",
  key: "FsnkJurUaVqxjExYGuEf",
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",
  //services: ["appium"],
  services: ["browserstack"],
  capabilities: [
    {
      // platformName: "Android",
      // maxInstances: 1,
      // platformVersion: "11",
      // deviceName: "webdriveIO",
      // automationName: "UiAutomator2",
      // app: join(process.cwd(), "./app/android/Android-NativeDemoApp-0.4.0.apk"),
      // appPackage: "com.wdiodemoapp",
      // appActivity: "com.wdiodemoapp.MainActivity",
      // appWaitActivity: "com.wdiodemoapp.MainActivity",
      // newCommandTimeout: 240
      'app' : 'bs://75fb8213242d0c48cf1597688f405c969380932a',
      'device' : 'Samsung Galaxy A51',
      'os_version' : '10.0',
      'project' : 'Exercício Módulo 17',
      'build' : '1',
      'name': 'form and login tests'
    },
  ],
  waitforTimeout: 20000,
  mochaOpts:{
      timeout: 300000
  }
};
