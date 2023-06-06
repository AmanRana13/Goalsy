import * as React from "react";
//NAVIGATION ACTION
import { CommonActions } from "@react-navigation/native";
export const navigationRef: any = React.createRef();

let navigator: any;

export const navigate = (path: string, params?: object) => {
  navigationRef.current.navigate(path, params);
};

export const goBack = () => {
  navigationRef.current.goBack();
};

export const reset = (name: string, index: number) => {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: index,
      routes: [
        {
          name: name,
        },
      ],
    })
  );
};

export const setNavigator = (nav: any) => {
  navigator = nav;
};

export const getCurrentRoute = () => {
  const route = navigator.getCurrentRoute();
  return route.name;
};