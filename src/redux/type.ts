export type action = {
  type: string;
  payload: object | boolean | string;
};

export type login = {
  email: string;
  password: string;
};

export type HeaderType = {
  'access-control-allow-origin': string,
  'Content-Type': string,
  Accept: string,
};
