import { ChangeEvent } from "react";
import { ApplicationRouter } from "../../routes/router";

export interface IField {
  // ... state
  fieldSel: IfieldsObject[];
}

// SPIELS STARTS

interface IUser {
  username?: string | null;
  password?: string | null;
}

interface IAdminregistration {
  firstname?: string | null;
  lastname?: string | null;
  username?: string | null;
  password?: string | null;
  conpassword?: string | null;
}

interface IRoutes {
  home: any;
  admin: any;
}

export interface IfieldsObject {
  fieldId: Number;
  data: {
    user: IUser;
    adminreg: IAdminregistration;
  };
  routes: IRoutes;
}

// SPIELS ENDS

export interface IFieldContextType {
  allFieldSelected: IfieldsObject[];
  selectedIndex: any;
  handleOnChange: (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string,
    type: string
  ) => void;
  open: boolean;
  setOpen: any;
  handleOnToast: (
    message: string,
    position: any,
    hideProgressBar: boolean,
    closeOnClick: boolean,
    pauseOnHover: boolean,
    draggable: boolean,
    progress?: any,
    theme?: any,
    type?: any
  ) => void;
  loginCredentials: Object;
  setLoginCredentials: any;
}

export type PropsIndex = {
  selectedIndex: any;
};

export const fieldIndex: PropsIndex = {
  selectedIndex: 0,
};
