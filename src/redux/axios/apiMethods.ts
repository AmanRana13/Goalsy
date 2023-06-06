import constants, { popupType } from 'theme/constants';
import APIKit from './apikit';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {logout} from 'utils/globalFunctions';
import networkUtils from 'utils/networkUtils';

// headers
const jsonHeader = {
  'access-control-allow-origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const formDataHeader = {
  'access-control-allow-origin': '*',
  'Content-Type': 'multipart/form-data',
  Accept: 'application/json',
};

const StatusCodes = {
  Success: 1,
  Failure: 0,
  Unauthenticated: 2,
};

// common api handler
const apiHandler = async (handler: any) => {
  let internetConnection = await networkUtils();
  if (internetConnection) {
    return handler
      .then((result: any) => {
        return {
          success: true,
          status: StatusCodes.Success,
          message: result.data.message,
          data: result?.data,
        };
      })
      .catch((err: any) => {
        if (err?.response?.status) {
          if (err?.response?.status >= 400 && err?.response?.status < 500) {
            if (
              err?.response?.status === 401 ||
              err?.response?.status === 403
            ) {
              logout(err.response.data.message);
            } else {
              ShowAlertMessage(err?.response?.data?.message);
              return {
                success: false,
                status: StatusCodes.Failure,
                message: err?.response?.data?.message,
              };
            }
          } else {
            ShowAlertMessage(constants.someThingWentWrong);
            return {
              success: false,
              status: StatusCodes.Failure,
              message: err?.response?.data?.message,
            };
          }
        } else {
          // ShowAlertMessage(constants.someThingWentWrong);
          return {
            success: false,
            status: StatusCodes.Failure,
            message: err?.response?.data?.message,
          };
        }
      });
  } else {
    ShowAlertMessage(constants.internetCheck, popupType.error);
  }
};

// Methods
export const Method = {
  // post method
  post: (url: string, body: any, formData?: boolean) =>
    apiHandler(
      APIKit.post(url, body, {
        headers: formData ? formDataHeader : jsonHeader,
      }),
    ),

  // get method
  get: (url: string) => apiHandler(APIKit.get(url, {headers: jsonHeader})),

  // put method
  put: (url: string, body: any, formData?: boolean) =>
    apiHandler(
      APIKit.put(url, body, {headers: formData ? formDataHeader : jsonHeader}),
    ),

  // delete method
  delete: (url: string) =>
    apiHandler(APIKit.delete(url, {headers: jsonHeader})),
};

export default Method;
