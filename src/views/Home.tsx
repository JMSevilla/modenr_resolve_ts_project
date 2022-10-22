import React, { useState, useContext, useEffect } from "react";
import {
  ResponsiveAppBar,
  SystemContainer,
  SystemGrid,
  SystemCard,
  SystemTextField,
  SystemButton,
  SystemBackdrop,
} from "../components";
import { CardContent, Typography } from "@mui/material";

import { useHistory } from "react-router-dom";

import { Context } from "../core/context/FieldContext";
import { IFieldContextType } from "../core/context/index";

import Services from "../core/api/services/Service";

const Home = (): JSX.Element => {
  const {
    handleOnChange,
    allFieldSelected,
    selectedIndex,
    handleOnToast,
    open,
    setOpen,
    setLoginCredentials,
  } = useContext(Context) as IFieldContextType;
  const { data, routes } = allFieldSelected[selectedIndex];
  const history = useHistory();
  useEffect(() => {
    checkAdministrator();
  }, []);
  const checkAdministrator = () => {
    Services.CHECKALL_USERS().then((repo: any) => {
      if (repo.data == "admin_not_exist") {
        history.push(routes.admin);
      } else {
        history.push(routes.home);
      }
    });
  };
  const handleOnSignin = () => {
    if (!data.user.username || !data.user.password) {
      handleOnToast(
        "There's an empty fields. Please try again.",
        "top-right",
        false,
        true,
        true,
        true,
        undefined,
        "dark",
        "error"
      );
    } else {
      setOpen(!open);
      Services.SYSTEM_SIGNIN(data.user).then((res) => {
        const { data }: any = res;
        if (data.message == "success_admin") {
          handleOnToast(
            "Successfully Logged in as administrator",
            "top-right",
            false,
            true,
            true,
            true,
            undefined,
            "dark",
            "error"
          );
          setOpen(false);
          setLoginCredentials(data);
        }
      });
    }
  };
  return (
    <>
      <ResponsiveAppBar />
      <SystemContainer stylish={{ marginTop: "100px" }}>
        <SystemCard style={{ alignItems: "center" }}>
          <CardContent>
            <Typography variant="h6">MDR Core System | User login</Typography>
            <SystemTextField
              value={data.user.username}
              handleChange={(e) => handleOnChange(e, "username", "user")}
              placeholder={"Enter username"}
              label="Username"
              variant="outlined"
              style={{
                marginBottom: "10px",
                width: "100%",
              }}
              type="text"
            />
            <SystemTextField
              value={data.user.password}
              handleChange={(e) => handleOnChange(e, "password", "user")}
              placeholder={"Enter password"}
              label="Password"
              variant="outlined"
              style={{
                marginBottom: "10px",
                width: "100%",
              }}
              type="password"
            />

            <SystemButton
              buttonName="LOG IN"
              variant={"contained"}
              style={{
                float: "right",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              handleClick={() => handleOnSignin()}
            />
          </CardContent>
        </SystemCard>
      </SystemContainer>
      <SystemBackdrop open={open} />
    </>
  );
};
export default Home;
