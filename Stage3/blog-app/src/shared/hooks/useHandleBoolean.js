import { useState } from 'react';

export const useHandleBoolean = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  const myObj = {
    show: show,
    handleOpen: handleOpen,
    handleClose: handleClose,
    handleToggle: handleToggle,
  };

  return myObj;
};
