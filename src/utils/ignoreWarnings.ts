import {LogBox} from 'react-native';

const ignoreWarns = [
  'EventEmitter.removeListener',
  'Setting a timer for a long period of time',
  'ViewPropTypes will be removed from React Native',
  'AsyncStorage has been extracted from react-native',
  "exported from 'deprecated-react-native-prop-types'.",
  'Non-serializable values were found in the navigation state.',
  'VirtualizedLists should never be nested inside plain ScrollViews',
  'RCTBridge required dispatch_sync to load REAModule. This may lead to deadlocks',
];

console.warn = () => {};
// console.log = () => {};
console.error = () => {};

LogBox.ignoreLogs(ignoreWarns);
