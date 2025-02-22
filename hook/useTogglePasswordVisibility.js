import { useState } from "react";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye-with-line");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye-with-line") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye") {
      setRightIcon("eye-with-line");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
