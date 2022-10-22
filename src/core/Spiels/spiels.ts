import { ApplicationRouter } from "../../routes/router";
class Spiels {
  fields = [
    {
      fieldId: 1,
      data: {
        user: {
          username: null,
          password: null,
        },
        adminreg: {
          firstname: null,
          lastname: null,
          username: null,
          password: null,
          conpassword: null,
        },
      },
      routes: {
        home: ApplicationRouter.homepage.path,
        admin: ApplicationRouter.admin_register.path,
      },
    },
  ];
}

export default new Spiels();
