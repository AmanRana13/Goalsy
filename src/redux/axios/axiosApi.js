import {Method} from './apiMethods';

let header1 = {
  'Content-Type': 'multipart/form-data',
  Accept: 'application/json',
};

let header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

//Auth APIs
export const signUpApi = data => Method.POST('user/register', data);
export const loginApi = data => Method.POST('user/login', data, header);
export const forgotPasswordApi = data =>
  Method.POST('user/forgot', data, header);
