import { CSSProperties } from "react";

export interface IButton {
  buttonName: string;
  buttonColor?: any;
  handleClick: () => void;
  variant: any;
  size?: any;
  style: CSSProperties;
  color?: any;
  sx?: any;
  disabled?: boolean;
  key?: any;
  autoFocus?: any;
}

export interface IBackdrop {
  open: boolean;
}

export interface IToast {
  position?: any;
  autoClose?: any;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: any;
  rtl?: boolean;
  pauseOnFocusLoss?: any;
  draggable?: any;
  pauseOnHover?: any;
  theme?: any;
}

export interface ISidebar {
  open: boolean;
  handleDrawerClose: () => void;
  theme?: any;
  handleClick?: () => void;
  dropDown?: any;
  Drawer?: any;
  DrawerHeader?: any;
}

export interface IAdministratorSidebar {
  open: boolean;
  handleDrawerOpen?: any;
  AppBar?: any;
  token?: any;
  signoutRouteDestroy?: () => void;
}
