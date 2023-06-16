import {Method} from './apiMethods';

//Auth APIs

export const api = {
  signUpApi: (data: any) => Method.post('user/register', data, true),
  loginApi: (data: any) => Method.post('/user/login', data),
  forgotPasswordApi: (data: any) => Method.post('user/forgot', data),

  // home
  deleteAccount: () => Method.delete('user/delete'),
  userDetail: () => Method.get('user/profile'),
  userEditDetail: (data: any) => Method.put('user/edit', data, true),
  changePassword: (data: any) => Method.post('user/changePassword', data),
  userQuiz: () => Method.get('user/quiz'),
  QuizAnswer: (data: any) => Method.post('user/quizAnswer', data),
  notificationSound: (data: any) => Method.put('user/preferences', data),
  createTicket: (data: any) => Method.post('ticket/create', data),
  CreateTicketList: (data: any) => Method.post('ticket/list', data),
  closeChat: (data: any) => Method.get(`ticket/close/${data}`),
};
