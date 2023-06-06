import {showMessage} from 'react-native-flash-message';


function ShowAlertMessage(message: string, type?: string, duration?: number) {
  const color = type === 'info' ? 'green' : 'red';
  showMessage({
    message: message,
    backgroundColor: color,
    duration: duration ?? 3000,
  });
}

export {ShowAlertMessage};
