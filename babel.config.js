module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@hook': './src/hook',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@components': './src/components',
        },
      },
    ]
  ],
};
