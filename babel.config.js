module.exports = {
  plugins: [
    // eslint-disable-next-line prettier/prettier
    ['relay', {artifactDirectory: './src/__generated__'}],
    ['module:react-native-dotenv'],
    // ['react-native-web'],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
