import React from "react";

var data = new FormData();

interface IProcess {
  Processor_administrator_registration: (obj: Object) => void;
  Processor_system_signin: (obj: Object) => void;
}

class Processor implements IProcess {
  Processor_administrator_registration(obj: any) {
    data.append("firstname", obj.firstname);
    data.append("lastname", obj.lastname);
    data.append("username", obj.username);
    data.append("password", obj.password);
    return data;
  }
  Processor_system_signin(obj: any) {
    data.append("username", obj.username);
    data.append("password", obj.password);
    return data;
  }
}

export default new Processor();
