import React, { useState, useEffect } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Drawer, DrawerHeader, AppBar } from "../../components/Drawer/Drawer";
import {
  SystemContainer,
  SystemAdminNavbar,
  SystemSidebar,
} from "../../components";
import { appAdminRouter } from "../router";
interface IRouterAdminWithSidebar {
  Component: React.ComponentType;
  exact?: any;
  path?: any;
}

const RouterAdminWithSidebar: React.FC<IRouterAdminWithSidebar> = ({
  Component,
  ...rest
}) => {
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 1024 ? setOpen(false) : setOpen(true);
    });
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (
          <>
            <Box className="flex">
              <CssBaseline />
              <SystemAdminNavbar
                open={open}
                AppBar={AppBar}
                handleDrawerOpen={handleDrawerOpen}
              />
              <SystemSidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                theme={theme}
                dropDown={dropDown}
                Drawer={Drawer}
                DrawerHeader={DrawerHeader}
              />
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
                className="flex justify-center h-[100vh]"
              >
                <DrawerHeader />
                <SystemContainer appClassName="mt-20" maxWidth="xl">
                  <Component {...props} />
                </SystemContainer>
              </Box>
            </Box>
          </>
        );
      }}
    />
  );
};

export { RouterAdminWithSidebar };
