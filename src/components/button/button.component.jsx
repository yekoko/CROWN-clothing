import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
const Button = ({ children, buttonType, buttonOptions }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...buttonOptions}>{children}</CustomButton>
    // <button
    //   className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    //   {...buttonOptions}
    // >
    //   {children}
    // </button>
  );
};

export default Button;
