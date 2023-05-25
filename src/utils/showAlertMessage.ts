import { showMessage } from "react-native-flash-message";


function ShowAlertMessage(message:string, type:string, duration = 3000) {
    const colour = (type === 'info') ? 'green' : 'red';
    showMessage({
        message: message,
        backgroundColor: colour,
        duration: duration
    });
};


export { ShowAlertMessage }