export type action = {
  type: string;
  payload: any;
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

export type createListPayload = {
  offset: number;
  limit: number;
};
export type closeChatPayload = {
  id: number;
};