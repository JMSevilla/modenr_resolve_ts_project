import React, { useState, useEffect, useContext } from "react";
import {
  ResponsiveAppBar,
  SystemContainer,
  SystemCard,
  SystemGrid,
  SystemTextField,
  SystemButton,
  SystemBackdrop,
} from "../../components";
import { CardContent, Typography } from "@mui/material";
import Services from "../../core/api/services/Service";
import { Context } from "../../core/context/FieldContext";
import { IFieldContextType } from "../../core/context";
import { useHistory } from "react-router-dom";
const Administrator = (): JSX.Element => {
  const {
    allFieldSelected,
    selectedIndex,
    handleOnChange,
    open,
    setOpen,
    handleOnToast,
  } = useContext(Context) as IFieldContextType;
  const { data, routes } = allFieldSelected[selectedIndex];
  const history = useHistory();
  useEffect(() => {
    handleScanAdministrator();
  }, []);
  const handleScanAdministrator = () => {
    Services.CHECKALL_USERS().then((repo: any) => {
      if (repo.data == "admin_not_exist") {
      } else {
        history.push(routes.home);
      }
    });
  };
  const handleCreate = () => {
    setOpen(!open);
    Services.ADMIN_REGISTRATION(data.adminreg).then((res) => {
      const { data }: any = res;
      if (data.message == "admin_registration_success") {
        setOpen(false);
        handleOnToast(
          "Successfully registered",
          "top-right",
          false,
          true,
          true,
          true,
          undefined,
          "dark",
          "success"
        );
        history.push(routes.home);
      }
    });
  };
  return (
    <>
      <ResponsiveAppBar />
      <SystemContainer stylish={{ marginTop: "100px" }}>
        <SystemCard>
          <CardContent>
            <Typography variant="h6">
              MDR Core System | Administrator Registration
            </Typography>
            <hr />
            <SystemGrid
              rowSpacing={1}
              style={{
                marginTop: "30px",
              }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              xs={6}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <>
                      <SystemTextField
                        handleChange={(e) =>
                          handleOnChange(e, "firstname", "admin-reg")
                        }
                        placeholder={"Enter firstname"}
                        label="Firstname"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        type="text"
                        variant="outlined"
                        id="outlined-basic"
                        value={data.adminreg.firstname}
                      />
                    </>
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <>
                      <SystemTextField
                        handleChange={(e) =>
                          handleOnChange(e, "lastname", "admin-reg")
                        }
                        placeholder={"Enter lastname"}
                        label="Lastname"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        type="text"
                        variant="outlined"
                        id="outlined-basic"
                        value={data.adminreg.lastname}
                      />
                    </>
                  ),
                },
              ]}
            />
            <Typography variant="h6">Credentials Information</Typography>
            <hr />
            <SystemGrid
              rowSpacing={1}
              style={{
                marginTop: "30px",
              }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              xs={6}
              GridItems={[
                {
                  childrenId: 1,
                  children: (
                    <>
                      <SystemTextField
                        handleChange={(e) =>
                          handleOnChange(e, "username", "admin-reg")
                        }
                        placeholder={"Enter username"}
                        label="Username"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        type="text"
                        variant="outlined"
                        id="outlined-basic"
                        value={data.adminreg.username}
                      />
                    </>
                  ),
                },
                {
                  childrenId: 2,
                  children: (
                    <>
                      <SystemTextField
                        handleChange={(e) =>
                          handleOnChange(e, "password", "admin-reg")
                        }
                        placeholder={"Enter password"}
                        label="Password"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        type="password"
                        variant="outlined"
                        id="outlined-basic"
                        value={data.adminreg.password}
                      />
                    </>
                  ),
                },
                {
                  childrenId: 3,
                  children: (
                    <>
                      <SystemTextField
                        handleChange={(e) =>
                          handleOnChange(e, "conpassword", "admin-reg")
                        }
                        placeholder={"Confirm your password"}
                        label="Confirm password"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        type="password"
                        variant="outlined"
                        id="outlined-basic"
                        value={data.adminreg.conpassword}
                      />
                    </>
                  ),
                },
              ]}
            />
            <SystemButton
              buttonName="CREATE"
              variant={"contained"}
              style={{
                float: "right",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              handleClick={() => handleCreate()}
            />
          </CardContent>
        </SystemCard>
      </SystemContainer>
      <SystemBackdrop open={open} />
    </>
  );
};

export default Administrator;
