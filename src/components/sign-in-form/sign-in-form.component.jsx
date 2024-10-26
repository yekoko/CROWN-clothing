import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";
import { type } from "@testing-library/user-event/dist/type";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Email and Password");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button buttonOptions={{ type: "submit" }}>Sign In</Button>
          <Button
            buttonType="google"
            buttonOptions={{ type: "button", onClick: signInWithGoogle }}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
