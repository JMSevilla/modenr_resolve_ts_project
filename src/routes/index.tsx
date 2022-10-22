import React from "react";
import { Switch, Route } from "react-router-dom";
import { ApplicationRouter, appAdminRouter } from "./router";
import { Home, Administrator, AdministratorDashboardHome } from "../views";
import { SystemToast } from "../components";
import FieldContext from "../core/context/FieldContext";

import { RouterAdminWithSidebar } from "./Shared/shared";

interface IRouterWithLoad {
  Component: React.ComponentType;
  exact?: any;
  path?: any;
}

const RouteWithLoad: React.FC<IRouterWithLoad> = ({ Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props: any) => (
          <>
            <Component {...props} />
          </>
        )}
      />
    </>
  );
};

const AppRouter = () => {
  return (
    <Switch>
      <FieldContext>
        <SystemToast
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <RouteWithLoad
          exact
          path={ApplicationRouter.homepage.path}
          Component={Home}
        />
        <RouteWithLoad
          exact
          path={ApplicationRouter.admin_register.path}
          Component={Administrator}
        />
        <RouterAdminWithSidebar
          exact
          path={appAdminRouter.Home.path}
          Component={AdministratorDashboardHome}
        />
      </FieldContext>
    </Switch>
  );
};

export default AppRouter;
