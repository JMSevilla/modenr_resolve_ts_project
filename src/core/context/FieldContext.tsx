import React, { createContext, useState, ChangeEvent } from "react";
import { IfieldsObject, IFieldContextType, fieldIndex, IField } from "./index";
import { toast } from "react-toastify";
import Spiels from "../Spiels/spiels";

export const Context = createContext<IFieldContextType | null>(null);

interface ContextProps {
  children: React.ReactNode;
}

const FieldContext: React.FC<ContextProps> = ({ children }) => {
  const [allFieldSelected, setAllFieldSelected] = useState<IfieldsObject[]>(
    Spiels.fields
  );
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(fieldIndex.selectedIndex);
  const [loginCredentials, setLoginCredentials] = useState({});
  const handleOnToast = (
    message: string,
    position: any,
    hideProgressBar: boolean,
    closeOnClick?: boolean,
    pauseOnHover?: boolean,
    draggable?: boolean,
    progress?: any,
    theme?: any,
    type?: any
  ) => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: position,
          autoClose: 5000,
          hideProgressBar: hideProgressBar,
          closeOnClick: closeOnClick,
          pauseOnHover: pauseOnHover,
          draggable: draggable,
          progress: progress,
          theme: theme,
        });
        break;
      case "error":
        toast.error(message, {
          position: position,
          autoClose: 5000,
          hideProgressBar: hideProgressBar,
          closeOnClick: closeOnClick,
          pauseOnHover: pauseOnHover,
          draggable: draggable,
          progress: progress,
          theme: theme,
        });
        break;
      default:
        break;
    }
  };
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string,
    type: string
  ) => {
    const value: string = event.currentTarget.value;
    const tempAllFieldSelected = [...allFieldSelected];
    const tempFieldSelected = { ...tempAllFieldSelected[selectedIndex] };
    const tempField = { ...tempFieldSelected.data };
    let data;
    let routes;
    switch (type) {
      case "user":
        let user = {};
        user = {
          username: fieldName == "username" ? value : tempField.user.username,
          password: fieldName == "password" ? value : tempField.user.password,
        };
        data = {
          user: user,
          adminreg: tempField.adminreg,
        };
        routes = {
          home: tempFieldSelected.routes.home,
          admin: tempFieldSelected.routes.admin,
        };
        tempFieldSelected.data = data;
        tempFieldSelected.routes = routes;
        tempAllFieldSelected[selectedIndex] = tempFieldSelected;
        setAllFieldSelected(tempAllFieldSelected);
        break;
      case "admin-reg":
        let adminreg = {};
        adminreg = {
          firstname:
            fieldName == "firstname" ? value : tempField.adminreg.firstname,
          lastname:
            fieldName == "lastname" ? value : tempField.adminreg.lastname,
          username:
            fieldName == "username" ? value : tempField.adminreg.username,
          password:
            fieldName == "password" ? value : tempField.adminreg.password,
          conpassword:
            fieldName == "conpassword" ? value : tempField.adminreg.conpassword,
        };
        data = {
          user: tempField.user,
          adminreg: adminreg,
        };
        routes = {
          home: tempFieldSelected.routes.home,
          admin: tempFieldSelected.routes.admin,
        };
        tempFieldSelected.data = data;
        tempFieldSelected.routes = routes;
        tempAllFieldSelected[selectedIndex] = tempFieldSelected;
        setAllFieldSelected(tempAllFieldSelected);
        break;
    }
  };
  return (
    <Context.Provider
      value={{
        allFieldSelected,
        handleOnChange,
        selectedIndex,
        open,
        setOpen,
        handleOnToast,
        loginCredentials,
        setLoginCredentials,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default FieldContext;
