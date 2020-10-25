export default {
  expo: {
    name: "Gmail-Clone",
    slug: "Gmail-Clone",
    description:
      "A prototype of Gmail UI written in pure javascript for React Native framework",
    privacy: "public",
    sdkVersion: "39.0.0",
    platforms: ["ios", "android", "web"],
    version: "1.0.0",
    orientation: "default",
    primaryColor: "#cccccc",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    notification: {
      icon: "./assets/icon.png",
      color: "#ffffff",
    },
  },
};
