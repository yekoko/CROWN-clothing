import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import "./sign-in-form.style.scss";
import { SignInContainer, ButtonContainer } from "./sign-in-form.style";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    //await signInWithGooglePopup();
    dispatch(googleSignInStart());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //await signInAuthUserWithEmailAndPassword(email, password);
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Email and Password");
      }
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            onChange: handleChange,
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            onChange: handleChange,
            value: password,
            required: true,
          }}
        />
        <ButtonContainer>
          <Button buttonOptions={{ type: "submit" }}>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            buttonOptions={{ type: "button", onClick: signInWithGoogle }}
          >
            Sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
