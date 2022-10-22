import ApiCallBegan from "../api";
import Processor from "./Process";

interface IServices {
  CHECKALL_USERS: () => void;
  ADMIN_REGISTRATION: (obj: Object) => void;
  SYSTEM_SIGNIN: (obj: Object) => void;
}

interface ICore {
  CORE_PROCESS_CHECKALLUSERS: (repository: any) => void;
  CORE_PROCESS_ADMINREGISTER: (repository: any) => void;
  CORE_PROCESS_SYSTEM_SIGNIN: (repository: any) => void;
}

class Core implements ICore {
  CORE_PROCESS_CHECKALLUSERS(repository: any) {
    return new Promise((resolve: any) => {
      return repository.then((snapshot: any) => {
        resolve(snapshot);
      });
    }).catch((err: any) => console.log(err));
  }
  CORE_PROCESS_ADMINREGISTER(repository: any) {
    return new Promise((resolve: any) => {
      return repository.then((snapshot: any) => {
        resolve(snapshot);
      });
    });
  }
  CORE_PROCESS_SYSTEM_SIGNIN(repository: any) {
    return new Promise((resolve: any) => {
      return repository.then((snapshot: any) => {
        resolve(snapshot);
      });
    });
  }
}

class Services extends Core implements IServices {
  CHECKALL_USERS() {
    const response = ApiCallBegan.connect().get(
      "/api/administrator/check-admin"
    );
    return this.CORE_PROCESS_CHECKALLUSERS(response);
  }
  ADMIN_REGISTRATION(obj: Object) {
    const response = ApiCallBegan.connect().post(
      "/api/administrator/registration",
      Processor.Processor_administrator_registration(obj)
    );
    return this.CORE_PROCESS_ADMINREGISTER(response);
  }
  SYSTEM_SIGNIN(obj: Object) {
    const response = ApiCallBegan.connect().post(
      "/api/services/login",
      Processor.Processor_system_signin(obj)
    );
    return this.CORE_PROCESS_SYSTEM_SIGNIN(response);
  }
}

export default new Services();
