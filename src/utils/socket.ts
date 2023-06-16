import {SOCKET_BASE_URL} from 'redux/axios/apikit';
import {io} from 'socket.io-client';

export const socket = io(SOCKET_BASE_URL, {
  autoConnect: true,
  reconnection: true,
});
