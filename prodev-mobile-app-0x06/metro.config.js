const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro-config");

const config = getDefaultConfig(__dirname);

// Make sure input matches your CSS file location
module.exports = withNativeWind(config, { input: "./styles/global.css" });
