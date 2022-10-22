import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IToast } from "../../core/componentsInterfaces";

const SystemToast: React.FC<IToast> = (props) => {
  const {
    position,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    theme,
  } = props;
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      rtl={rtl}
      pauseOnFocusLoss={pauseOnFocusLoss}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      theme={theme}
    />
  );
};

export default SystemToast;
