import {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';

const DeviceTheme = () => {
  const colorScheme = useColorScheme();
  const [state, setState] = useState('');
  useEffect(() => {
    setState(colorScheme);
  }, [colorScheme, state]);
  return state;
};

export default DeviceTheme;
