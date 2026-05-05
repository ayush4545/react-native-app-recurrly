const appJson = require('./app.json')

export default {
  expo: {
    ...appJson.expo,
    extra: {
      ...(appJson.expo?.extra || {}),
      posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
      posthogHost: process.env.POSTHOG_HOST,
      eas: {
        projectId: "f5263a61-4766-4e28-a6e3-9d86aad6730e"
      }
    },
  },
}